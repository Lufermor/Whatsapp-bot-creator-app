import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Layout from '../components/Layout';
import { updateBot, getBot } from '../api/BotRoutes';
import { UserContext } from '../UserContext';

function BotEdit(props) {
  const botData = props.route.params.data;

  const [botName, setBotName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const { userId } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bot = await getBot(botData.bot_id);

      setBotName(bot.nombre);
      setStartTime(bot.hora_inicio_actividad);
      setEndTime(bot.hora_fin_actividad);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      const updatedBot = {
        usuario_id: parseInt(userId),
        nombre: botName,
        hora_inicio_actividad: startTime,
        hora_fin_actividad: endTime,
      };
      await updateBot(botData.bot_id, updatedBot);

      props.navigation.navigate('BotDetails', { data: updatedBot });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View>
        <Text
          style={styles.inputStyle}
          label="User ID"
          value={userId}
          mode="outlined"
        />
        <TextInput
          style={styles.inputStyle}
          label="Bot Name"
          value={botName}
          mode="outlined"
          onChangeText={(text) => setBotName(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Start Time"
          value={startTime}
          mode="outlined"
          onChangeText={(text) => setStartTime(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="End Time"
          value={endTime}
          mode="outlined"
          onChangeText={(text) => setEndTime(text)}
        />
        <Button
          style={{ margin: 10 }}
          icon="pencil"
          mode="contained"
          onPress={updateData}
        >
          Update Bot
        </Button>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 30,
    padding: 10,
  },
});

export default BotEdit;
