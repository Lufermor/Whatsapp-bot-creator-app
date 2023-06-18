import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Layout from '../components/Layout';
import { saveRespuestaAutomatica } from '../api/RespuestaAutomaticaRoutes';
import { savePalabraClave } from '../api/PalabraClaveRoutes';
import { savePlantilla } from '../api/PlantillaRoutes';

function AutomaticResponseCreate(props) {
  const botData = props.route.params.botData;

  const [botId, setBotId] = useState(botData.bot_id);
  const [plantillaNombre, setPlantillaNombre] = useState('');
  const [palabraClaveNombre, setPalabraClaveNombre] = useState('');
  const [contenidoPlantilla, setContenidoPlantilla] = useState('');

  const createResponse = async () => {
    try {
      const newPlantilla = {
        bot_id: botId,
        contenido: contenidoPlantilla,
        nombre: plantillaNombre,
      };
      const plantilla = await savePlantilla(newPlantilla);

      const newPalabraClave = {
        bot_id: botId,
        palabra_clave: palabraClaveNombre,
      };
      const palabraClave = await savePalabraClave(newPalabraClave);

      const newRespuestaAutomatica = {
        bot_id: botId,
        plantilla_id: plantilla.plantilla_id,
        palabra_clave_id: palabraClave.palabra_clave_id,
      };
      await saveRespuestaAutomatica(newRespuestaAutomatica);

      props.navigation.navigate('AutomaticResponsesHome', { data: botData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View>
        <TextInput
          style={styles.inputStyle}
          label="Bot ID"
          value={botId.toString()}
          mode="outlined"
          disabled
        />
        <TextInput
          style={styles.inputStyle}
          label="Template Name"
          value={plantillaNombre}
          mode="outlined"
          onChangeText={(text) => setPlantillaNombre(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Keyword Name"
          value={palabraClaveNombre}
          mode="outlined"
          onChangeText={(text) => setPalabraClaveNombre(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Template Content"
          value={contenidoPlantilla}
          multiline
          numberOfLines={10}
          mode="outlined"
          onChangeText={(text) => setContenidoPlantilla(text)}
        />
        <Button
          style={{ margin: 10 }}
          icon="plus"
          mode="contained"
          onPress={createResponse}
        >
          Create Automatic Response
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

export default AutomaticResponseCreate;
