import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Layout from '../components/Layout';
import { saveBot } from '../api/BotRoutes';
import { UserContext } from '../UserContext';

function BotCreate(props) {
  const [botName, setBotName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const { userId } = useContext(UserContext);

  const createBot = async () => {
    try {
      const newBot = {
        usuario_id: userId,
        nombre: botName,
        hora_inicio_actividad: startTime,
        hora_fin_actividad: endTime,
      };
      await saveBot(newBot);

      props.navigation.navigate('BotsHome');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View>
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
          icon="plus"
          mode="contained"
          onPress={createBot}
        >
          Create Bot
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


export default BotCreate;
