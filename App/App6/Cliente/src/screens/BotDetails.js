import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Layout from '../components/Layout';
import { deleteBot } from '../api/BotRoutes';

function BotDetails(props) {
  const navigation = useNavigation();
  const data = props.route.params.data;

  const handleDelete = () => {
    Alert.alert("Delete Bot", "Are you sure you want to delete the bot?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          await deleteBot(data.bot_id)
            .then(() => navigation.navigate('BotsHome'))
            .catch(error => console.log(error));
        },
      },
    ]);
  };

  return (
    <Layout>
      <ScrollView>
        <Card style={styles.cardStyle}>
          <Text style={styles.textStyle1}>{data.nombre}</Text>
          <Text>Bot ID: {data.bot_id}</Text>
          <Text>Created Date: {data.fecha_creacion}</Text>
          <Text>Start Time: {data.hora_inicio_actividad}</Text>
          <Text>End Time: {data.hora_fin_actividad}</Text>
          <View style={styles.btnStyle}>
            <Button
              style={{ margin: 10 }}
              icon="update"
              mode="contained"
              onPress={() => navigation.navigate('BotEdit', { data: data })}
            >
              Edit
            </Button>
            <Button
              style={{ margin: 10 }}
              icon="delete"
              mode="contained"
              onPress={() => handleDelete()}
            >
              Delete
            </Button>
          </View>
          <Button
              style={{ margin: 10 }}
              icon="pencil"
              mode="contained"
              onPress={() => navigation.navigate('AutomaticResponsesHome', { data: data })}
            >
              Automatic responses
            </Button>
        </Card>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 20,
    padding: 20,
  },
  textStyle1: {
    color: 'blue',
    padding: 20,
    margin: 15,
  },
  btnStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15,
    padding: 10,
  },
});

export default BotDetails;
