
import React, { useState } from 'react'; //Cuando queremos fetch data, necesitamos usar useEffect
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Layout from '../components/Layout';
import { saveArticle } from '../../api';

function ArticlesCreate(props) {

  const navigation = useNavigation();

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [article, setArticle] = useState({
    title: "",
    body: "",
  })

  const handleChange = (name, value) => setArticle({...article, [name]: value})

  const insertData = async () => {
    await saveArticle(article)
      .then(data => {
        navigation.navigate('ArticleDetails', { data: data })
      })
      .catch(error => console.log(error))
  }

  return (
    <Layout>
      <TextInput style={styles.inputStyle}
        label="Title"
        placeholder='Write a tittle'
        value={article.title}
        mode="outlined"
        onChangeText={text => handleChange( 'title', text)}
      />
      <TextInput style={{ margin: 10, padding:10, width: '90%' }}
        placeholder='Write a description'
        value={article.body}
        multiline
        numberOfLines={10}
        mode="outlined"
        onChangeText={text => handleChange( 'body', text)}
      />
      <View style={{ flex: 1 }}>
      <Button
        style={{ margin: 10 }}
        icon="pencil"
        mode='contained'
        onPress={() => insertData()}
      >Insert Article</Button>
      </View>
      <TouchableOpacity/>
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
    width: '90%',
    marginTop: 30,
    padding: 10,
  }
});

export default ArticlesCreate