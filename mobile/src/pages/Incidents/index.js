import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import {
  Container,
  Header,
  Logo,
  HText,
  BoldText,
  Description,
  Title,
  IncidentList,
  Incident,
  IProperty,
  IValue,
  DetailsButton,
  DButtonText,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: {
        page,
      },
    });

    setIncidents(page > 1 ? [...incidents, ...response.data] : response.data);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
    setRefreshing(false);
  }

  function refreshList() {
    setRefreshing(true);
    setPage(1);
    loadIncidents();
  }

  useEffect(() => {
    loadIncidents();
  });

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <Container>
      <Header>
        <Logo />
        <HText>
          Total de <BoldText>{total} casos</BoldText>
        </HText>
      </Header>

      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos abaixo e salve uma vida</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(item) => String(item.id)}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.2}
        onEndReached={loadIncidents}
        renderItem={({ item: incident }) => (
          <Incident>
            <IProperty>ONG:</IProperty>
            <IValue>{incident.name}</IValue>

            <IProperty>CASO:</IProperty>
            <IValue>{incident.title}</IValue>

            <IProperty>VALOR:</IProperty>
            <IValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </IValue>

            <DetailsButton onPress={() => navigateToDetail(incident)}>
              <DButtonText>Ver mais detalhes</DButtonText>
              <Feather name="arrow-right" size={20} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
