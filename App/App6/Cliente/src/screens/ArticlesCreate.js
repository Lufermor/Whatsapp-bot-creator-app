
import React, { useState, useEffect } from 'react'; //Cuando queremos fetch data, necesitamos usar useEffect
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, FAB, TextInput, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Layout from '../components/Layout';
import { saveArticle } from '../../api';

function ArticlesCreate(props) {

  const navigation = useNavigation();

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const insertData = async () => {
    await saveArticle(title, body)
      .then(data => {
        navigation.navigate('ArticleDetails', { data: data })
      })
      .catch(error => console.log(error))
  }

  return (
    <Layout>
      <View style={{ flex: 1 }}>
      <TextInput style={styles.inputStyle}
        label="Title"
        value={title}
        mode="outlined"
        onChangeText={text => setTitle(text)}
      />
      <TextInput style={{ padding: 10 }}
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
        onPress={() => insertData()}
      >Insert Article</Button>
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
    flex: 1,
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

export default ArticlesCreate