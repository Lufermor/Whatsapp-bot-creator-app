
import React, { useState, useEffect } from 'react'; //Cuando queremos fetch data, necesitamos usar useEffect
import { render } from 'react-dom';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, FAB, TextInput, Button } from 'react-native-paper';

function CreateArticles001(props) {
  
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const insertData = () => {
    fetch('http://192.168.1.136:3000/add_article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:title, body:body}),
    })
    .then(resp => resp.json())
    .then(data => {
      // const updateData = props.navigation.getParam('updateData');
      //updateData(data);
      props.route.params.updateData(data); // Esta funciona
      props.navigation.navigate('Home0022222');
    })
    .catch(error => console.log(error))
  }
  
  return (
    <View>
      <TextInput style= {styles.inputStyle}
        label = "Title"
        value = {title}
        mode = "outlined"
        onChangeText={text => setTitle(text)}
      />
      <TextInput style= {{padding: 15}}
        label = "Description"
        value = {body}
        multiline
        numberOfLines = {10}
        mode = "outlined"
        onChangeText={text => setBody(text)}
      />
      <Button 
        style={{margin:10}} 
        icon = "pencil"
        onPress={() => insertData()}
      >Insert Article</Button>
      <Text>CreateArticles001</Text>
    </View>
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
      position:'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    inputStyle: {
      marginTop: 30,
      padding: 10,
    }
  });

export default CreateArticles001