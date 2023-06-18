import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { View } from 'react-native';

export default function LoginScreen({ onLoginSuccess }) {
  const { updateUserEmail, updateUserId } = useContext(UserContext);

  // ...

  async function fetchUserInfo() {
    // ...

    // Guardamos la información en nuestra variable del usuario y en el contexto
    setUser(useInfo);
    updateUserEmail(useInfo.email);
    updateUserId(useInfo.id);

    // ...
  }

  // ...

  return (
    <View></View>
  );
}



import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function SomeOtherScreen() {
  const { userId, userEmail } = useContext(UserContext);

  // ...

  return (
    <View>
      <Text>User ID: {userId}</Text>
      <Text>User Email: {userEmail}</Text>
      {/* Resto del contenido de la pantalla */}
    </View>
  );
}

if (response?.type === 'success') {
  setAccessToken(response.authentication.accessToken);
  accessToken && fetchUserInfo();

  // Verifica que 'user' no sea nulo antes de acceder a 'user.email'
  if (user && user.email) {
    accessToken && fetchUserInfoByEmail(user.email);
  }

  onLoginSuccess && onLoginSuccess();
}


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FAB, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Layout from '../components/Layout';
import AutomaticResponseList from '../components/AutomaticResponseList';
import { getAutomaticResponses } from '../api/AutomaticResponseRoutes';

const AutomaticResponsesHome = () => {
  const navigation = useNavigation();
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    loadResponses();
  }, []);

  const loadResponses = async () => {
    try {
      const responses = await getAutomaticResponses();
      setResponses(responses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <AutomaticResponseList responses={responses} />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigation.navigate('CreateAutomaticResponse')}
        />
      </View>
    </Layout>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  card: {
    width: windowWidth * 0.9,
    padding: 20,
  },
});

export default AutomaticResponsesHome;
