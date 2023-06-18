import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Layout from '../components/Layout';
import { updateRespuestaAutomatica } from '../api/RespuestaAutomaticaRoutes';
import { getBot } from '../api/BotRoutes';
import { getPlantilla, updatePlantilla } from '../api/PlantillaRoutes';
import { getPalabraClave, updatePalabraClave } from '../api/PalabraClaveRoutes';

function AutomaticResponseEdit(props) {
  const data = props.route.params.data;

  const [botId, setBotId] = useState(data.bot_id);
  const [plantillaId, setPlantillaId] = useState('');
  const [palabraClaveId, setPalabraClaveId] = useState('');
  const [plantillaNombre, setPlantillaNombre] = useState('');
  const [palabraClaveNombre, setPalabraClaveNombre] = useState('');
  const [contenidoPlantilla, setContenidoPlantilla] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bot = await getBot(data.bot_id);
      const plantilla = await getPlantilla(data.plantilla_id);
      const palabraClave = await getPalabraClave(data.palabra_clave_id);

      setBotId(bot.bot_id);
      setPlantillaId(plantilla.plantilla_id);
      setPlantillaNombre(plantilla.nombre);
      setPalabraClaveId(palabraClave.palabra_clave_id);
      setPalabraClaveNombre(palabraClave.palabra_clave);
      setContenidoPlantilla(plantilla.contenido);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      await updateRespuestaAutomatica(data.respuesta_id, botId, plantillaId, palabraClaveId);

      await updatePlantilla(plantillaId, {
        bot_id: botId,
        contenido: contenidoPlantilla,
        nombre: plantillaNombre,
      });

      await updatePalabraClave(palabraClaveId, {
        bot_id: botId,
        palabra_clave: palabraClaveNombre,
      });

      props.navigation.navigate('AutomaticResponseDetails', { data: data });
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
          onChangeText={text => setBotId(Number(text))}
        />
        <TextInput
          style={styles.inputStyle}
          label="Template Name"
          value={plantillaNombre}
          mode="outlined"
          onChangeText={text => setPlantillaNombre(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Keyword Name"
          value={palabraClaveNombre}
          mode="outlined"
          onChangeText={text => setPalabraClaveNombre(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Template Content"
          value={contenidoPlantilla}
          multiline
          numberOfLines={10}
          mode="outlined"
          onChangeText={text => setContenidoPlantilla(text)}
        />
        <Button
          style={{ margin: 10 }}
          icon="pencil"
          mode="contained"
          onPress={updateData}
        >
          Update Automatic Response
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

export default AutomaticResponseEdit;
