import React, { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Layout from '../components/Layout';
import { updateArticle } from '../../api';

function ArticleEdit(props) {

  const data = props.route.params.data;

  const [title, setTitle] = useState(data.title)
  const [body, setBody] = useState(data.body)

  const updateData = async (id) => {
    await updateArticle(data.id, title, body)
      .then(resp => resp.json())
      .then(data => {
        props.navigation.navigate('ArticleDetails', { data: data })
      })
      .catch(error => console.log(error))
  }

  return (
    <Layout>
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
          mode='contained'
          onPress={() => updateData()}
        >Update Article</Button>
      </View>
    </Layout>
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

export default ArticleEdit