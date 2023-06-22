import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, RefreshControl } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import Layout from '../components/Layout';
import { deleteRespuestaAutomatica } from '../api/RespuestaAutomaticaRoutes';
import { getBot } from '../api/BotRoutes';
import { getPlantilla } from '../api/PlantillaRoutes';
import { getPalabraClave } from '../api/PalabraClaveRoutes';

const AutomaticResponseDetails = (props) => {
  const navigation = useNavigation();
  const response = props.route.params.data;
  const [botName, setBotName] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [keyword, setKeyword] = useState('');
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);
  const [bot, setBot] = useState('');

  useEffect(() => {
    fetchBotName();
    fetchTemplateName();
    fetchKeyword();
  }, [isFocused]);

  const fetchBotName = async () => {
    try {
      const bot = await getBot(response.bot_id);
      setBotName(bot.nombre);
      setBot(bot);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, []);

  const fetchTemplateName = async () => {
    try {
      const plantilla = await getPlantilla(response.plantilla_id);
      setTemplateName(plantilla.nombre);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchKeyword = async () => {
    try {
      const palabraClave = await getPalabraClave(response.palabra_clave_id);
      setKeyword(palabraClave.palabra_clave);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    await deleteRespuestaAutomatica(response.respuesta_id)
      .then(() => navigation.navigate('AutomaticResponsesHome', { data: bot }))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <View style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
        />
      }>
        <Card style={styles.card}>
          <Text style={styles.text}>Response ID: {response.respuesta_id}</Text>
          <Text>Bot Name: {botName}</Text>
          <Text>Template Name: {templateName}</Text>
          <Text>Keyword: {keyword}</Text>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              icon="pencil"
              mode="contained"
              onPress={() => navigation.navigate('AutomaticResponseEdit', { data: response })}
            >
              Edit
            </Button>
            <Button
              style={styles.button}
              icon="delete"
              mode="contained"
              onPress={handleDelete}
            >
              Delete
            </Button>
          </View>
        </Card>
      </View>
    </Layout>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40
  },
  card: {
    width: windowWidth * 0.9,
    padding: 20,
  },
  text: {
    color: 'blue',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    marginVertical: 10,
  },
});

export default AutomaticResponseDetails;
