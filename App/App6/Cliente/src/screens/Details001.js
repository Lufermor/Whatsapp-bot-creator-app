
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, FAB, TextInput, Button } from 'react-native-paper';

function Details001(props) {
  
  const data = props.route.params.data;

  const deleteData = () => {
    fetch(`http://192.168.1.136:3000/article_delete/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(data => {
        // props.route.params.updateData(data); // Esta funciona
        props.navigation.navigate('Home0022222', { data: data })
      })
      .catch(error => console.log(error))
  }

  return (
    <ScrollView>
      <View style={styles.viewStyle} >
        <Text> {data.title} </Text>
        <Text> {data.body} </Text>
        <Text> {data.date} </Text>
        <View style = {styles.btnStyle} >
          <Button
            style={{ margin: 10 }}
            icon="update"
            mode='contained'
            onPress={() => props.navigation.navigate('Edit001', {data: data} )}
          >Edit</Button>
          <Button
            style={{ margin: 10 }}
            icon="delete"
            mode='contained'
            onPress={() => deleteData()}
          >Delete</Button>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1 significa que estará a pantalla completa
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle1: {
    color: 'blue',
    padding: 10,
    margin: 5,
  },
  cardStyle: {
    margin: 2,
    padding: 2,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  viewStyle: {
    padding: 10,
    margin: 10,
    backgroundColor: "gray",
  },
  btnStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15,
    padding: 10,
  }
});

export default Details001