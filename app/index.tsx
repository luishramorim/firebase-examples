import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar, BottomNavigation, Button, Card, Divider, Text } from 'react-native-paper';

const readmeText = `
# Exemplos de Integração com Firebase

Este aplicativo foi criado para demonstrar como integrar e utilizar os principais serviços do Firebase em uma aplicação React Native com Expo.

## Funcionalidades disponíveis

Autenticação
- Login com e-mail e senha
- Cadastro de novos usuários
- Reset de senha
- Logout

Firestore
- Leitura e escrita de dados
- Atualização e exclusão de documentos
- Exemplos de coleções e subcoleções

Storage
- Upload de arquivos (imagens, documentos)
- Download e visualização
- Gerenciamento de arquivos

Configuração de Ambiente
- Uso de variáveis via .env
- Configuração dinâmica com app.config.js e expo-constants

## Objetivo

Este projeto tem como objetivo fornecer exemplos claros, diretos e funcionais para quem deseja aprender a trabalhar com Firebase dentro do ecossistema React Native com Expo.

## Como usar

- Selecione uma das funcionalidades na tela inicial para começar.
- Cada funcionalidade demonstra um recurso do Firebase de forma isolada e bem documentada.
`;

function HomeRoute() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Exemplos com Firebase" />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            Este aplicativo demonstra exemplos de integração com o Firebase utilizando React Native e Expo.
          </Text>
          <Divider style={{ marginVertical: 8 }} />
          <Text variant="bodySmall" style={styles.readme}>
            {readmeText}
          </Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => {}}>
            Login
          </Button>
          <Button mode="outlined" onPress={() => {}}>
            Cadastro
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

function LoginRoute() {
  return (
    <ScrollView contentContainerStyle={styles.center}>
      <Text variant="titleLarge">Tela de Login (Exemplo)</Text>
    </ScrollView>
  );
}

function RegisterRoute() {
  return (
    <ScrollView contentContainerStyle={styles.center}>
      <Text variant="titleLarge">Tela de Cadastro (Exemplo)</Text>
    </ScrollView>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Início', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'login', title: 'Login', focusedIcon: 'login' },
    { key: 'register', title: 'Cadastro', focusedIcon: 'account-plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    login: LoginRoute,
    register: RegisterRoute,
  });

  return (
    <>
      <Appbar.Header elevated>
        <Appbar.Content title="Firebase Examples" />
      </Appbar.Header>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    padding: 16,
  },
  center: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    padding: 8,
  },
  text: {
    marginBottom: 8,
  },
  readme: {
    marginBottom: 8,
  },
  actions: {
    justifyContent: 'flex-end',
    paddingRight: 8,
    paddingBottom: 8,
  },
});