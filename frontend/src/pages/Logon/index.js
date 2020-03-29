import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';

import api from '~/services/api';

import heroesImg from '~/assets/heroes.png';

import Input from '~/components/Form/Input';
import Button from '~/components/Button';
import Link from '~/components/Link';

import { Container, Section, Logo } from './styles';

export default function Logon() {
  const history = useHistory();

  async function handleSubmit({ id }) {
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      toast.error('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <Section>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="id" placeholder="Sua ID" />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
