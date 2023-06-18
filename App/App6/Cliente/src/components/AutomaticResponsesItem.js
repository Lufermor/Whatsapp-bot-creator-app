import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

import { getBot} from '../api/BotRoutes';
import { getPlantilla } from '../api/PlantillaRoutes';
import { getPalabraClave } from '../api/PalabraClaveRoutes';

const AutomaticResponseItem = ({ response }) => {
  const navigation = useNavigation();
  const [botName, setBotName] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetchBotName();
    fetchTemplateName();
    fetchKeyword();
  }, []);

  const fetchBotName = async () => {
    try {
      const bot = await getBot(response.bot_id);
      setBotName(bot.nombre);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AutomaticResponseDetails', { data: response })}>
      <Card style={[styles.cardStyle, { width: cardWidth }]}>
        <Text style={styles.textStyle1}>Response ID: {response.respuesta_id}</Text>
        <Text>Bot Name: {botName}</Text>
        <Text>Template Name: {templateName}</Text>
        <Text>Keyword: {keyword}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const cardWidth = Dimensions.get('window').width * 0.9;

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 8,
    padding: 16,
  },
  textStyle: {
    fontSize: 16,
  },
});

export default AutomaticResponseItem;
