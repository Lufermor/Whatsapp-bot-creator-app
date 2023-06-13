
import React, { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function Edit001(props) {

  const data = props.route.params.data;

  const [title, setTitle] = useState(data.title)
  const [body, setBody] = useState(data.body)

  const updateData = (id) => {
    fetch(`http://192.168.1.136:3000/article_update/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title, body: body }),
    })
      .then(resp => resp.json())
      .then(data => {
        // props.route.params.updateData(data); // Esta funciona
        props.navigation.navigate('Details001', {data: data})
      })
      .catch(error => console.log(error))
  }

  return (
    <View>
      <TextInput style={styles.inputStyle}
        label="Title"
        value={title}
        mode="outlined"
        onChangeText={text => setTitle(text)}
      />
      <TextInput style={{ padding: 15 }}
        label="Description"
        value={body}
        multiline
        numberOfLines={10}
        mode="outlined"
        onChangeText={text => setBody(text)}
      />
      <Button
        style={{ margin: 10 }}
        icon="pencil"
        onPress={() => updateData()}
      >Update Article</Button>
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
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  inputStyle: {
    marginTop: 30,
    padding: 10,
  }
});

export default Edit001