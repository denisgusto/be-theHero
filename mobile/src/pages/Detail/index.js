import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailCompose from 'expo-mail-composer';
import { TouchableOpacity, Linking } from 'react-native';

import {
  Container,
  Header,
  Logo,
  Incident,
  IProperty,
  IValue,
  ContactBox,
  HeroTitle,
  HDescription,
  Actions,
  Action,
  AText,
} from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailCompose.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Logo />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IProperty marginBreak>ONG:</IProperty>
        <IValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IValue>

        <IProperty>CASO:</IProperty>
        <IValue>{incident.title}</IValue>

        <IProperty>VALOR:</IProperty>
        <IValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </IValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HDescription>Entre em contato:</HDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <AText>WhatsApp</AText>
          </Action>

          <Action onPress={sendMail}>
            <AText>E-mail</AText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
