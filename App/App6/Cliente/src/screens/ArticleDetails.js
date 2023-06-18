
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, FAB, TextInput, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Layout from '../components/Layout';
import { deleteArticle } from '../api/ArticlesRoutes';

function ArticleDetails(props) {

  const navigation = useNavigation();
  const data = props.route.params.data;

  const handleDelete = () => {
    Alert.alert("Delete Article", "Are you sure you want to delete the article", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          await deleteArticle(data.id)
          .then(() => navigation.navigate('ArticlesHome'))
          .catch(error => console.log(error))
        },
      },
    ]);
  };

  return (
    <Layout>
      <ScrollView>
        <Card style={styles.cardStyle} >
          <Text style={styles.textStyle1} > {data.title} </Text>
          <Text> {data.body} </Text>
          <Text> {data.date} </Text>
          <View style={styles.btnStyle} >
            <Button
              style={{ margin: 10 }}
              icon="update"
              mode='contained'
              onPress={() => props.navigation.navigate('ArticleEdit', { data: data })}
            >Edit</Button>
            <Button
              style={{ margin: 10 }}
              icon="delete"
              mode='contained'
              onPress={() => handleDelete()}
            >Delete</Button>
          </View>
        </Card>
        
      </ScrollView>
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
    padding: 20,
    margin: 15,
  },
  cardStyle: {
    marginTop: 20,
    padding: 20,
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

export default ArticleDetails