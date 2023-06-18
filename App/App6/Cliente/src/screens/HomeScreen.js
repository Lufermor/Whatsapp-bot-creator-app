import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// import { signOut } from '../api/AuthRoutes';
import Layout from '../components/Layout';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleViewBots = () => {
    navigation.navigate('BotsHome');
  };

  const handleCreateBot = () => {
    navigation.navigate('BotCreate');
  };

  const handleScheduleMessage = () => {
    navigation.navigate('ScheduleMessage');
  };

  const handleSignOut = async () => {
    console.log('handleSignOut');
    // await signOut();
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Login' }],
    // });
  };

  return (
    <Layout>
      <Card onPress={handleViewBots} style={styles.card}>
        <Card.Content>
          <Title>View Bots</Title>
        </Card.Content>
      </Card>

      <Card onPress={handleCreateBot} style={styles.card}>
        <Card.Content>
          <Title>Create Bot</Title>
        </Card.Content>
      </Card>

      <Card onPress={handleScheduleMessage} style={styles.card}>
        <Card.Content>
          <Title>Schedule Message</Title>
        </Card.Content>
      </Card>

      <Card
        onPress={handleSignOut}
        style={[styles.card, styles.signOutCard]} // Estilo adicional para Sign Out
      >
        <Card.Content>
          <Title style={styles.signOutText}>Sign Out</Title>
        </Card.Content>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alineación en la parte superior
    alignItems: 'center',
    paddingTop: 40, // Espacio superior para separar del borde de la pantalla
  },
  card: {
    width: '80%', // Ancho de la tarjeta
    marginVertical: 10, // Espaciado vertical entre las tarjetas
  },
  signOutCard: {
    backgroundColor: '#3076C4', // Color de fondo para Sign Out
  },
  signOutText: { 
    color: 'white', // Color de texto para Sign Out
  },
});
