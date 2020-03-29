import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';

import { formatPrice } from '~/util/format';

import Link from '~/components/Link';

import { Container, Logo, Header, Incidents } from './styles';

export default function Profile() {
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  function formatData(data) {
    return data.map((incident) => ({
      ...incident,
      formattedValue: formatPrice(incident.value),
    }));
  }

  useEffect(() => {
    async function loadIncidents() {
      try {
        const response = await api.get('profile', {
          headers: {
            Authorization: ongId,
          },
        });

        const data = formatData(response.data);

        setIncidents(data);
      } catch (error) {
        toast.error('Erro inesperado, tente novamente');
      }
    }

    loadIncidents();
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      toast.error('Erro ao deletar caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <Logo />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <Incidents>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{incident.formattedValue}</p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </Incidents>
    </Container>
  );
}
