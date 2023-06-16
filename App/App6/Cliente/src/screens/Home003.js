
import React, { useState, useEffect } from 'react';  // When we want to make fetch, we need to use useEffect.
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { getArticles } from '../../api';

// When attributes are sent to this screen, they will be found in props.
function Home002(props) {

  const [articles, setArticles] = useState([]);
  const updateData = (newData) => { setArticles([...articles, newData]); };
  const [loading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const articles = await getArticles();
      console.log(articles.length);
      setArticles(articles);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect is a function that executes everytime this screen is loaded,
      it's the first function to be executed. */
  useEffect(() => { loadData() }, [])

  const clickedItem = (data) => {
    props.navigation.navigate('Details001', { data: data })
  };

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle} onPress={() => (clickedItem(item))}>
        <Text style={styles.textStyle1}> {item.title} </Text>
      </Card>
    )
  };

  return (
    <View style={{ flex: 1 }} >
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          return renderData(item)
        }}
        // Next two lines are for enable "pull to refresh"
        onRefresh={() => { loadData() }}
        refreshing={loading}
        keyExtractor={item => `${item.id}`}
      />
      <FAB //Floating action button
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "green" } }}
        onPress={() => props.navigation.navigate('CreateArticles0011', { updateData: updateData })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1 means it will be at full screen
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
  }
});

export default Home002