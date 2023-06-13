
import React, { useState, useEffect } from 'react'; //Cuando queremos fetch data, necesitamos usar useEffect
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

// Aquí estamos probando a enviarle atributos desde App.js, aquí se recibe como props
function Home002(props) {

  const [data, setData] = useState([])

  const updateData = (newData) => { setData([...data, newData]);};
  
  const [loading, setIsLoading] = useState(true);
  const loadData = () => {
    fetch('http://192.168.1.136:3000/list_articles', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(article => {
      setData(article)
      setIsLoading(false)
    })
    .catch(error => console.error(error))
  }

  useEffect(() => { loadData() }, [])

  const clickedItem = (data) => {
    props.navigation.navigate('Details001', {data: data})
  }

  const renderData = (item) => {
    return (
      <Card style = {styles.cardStyle} onPress={() => (clickedItem(item))}>
        <Text style={styles.textStyle1}> {item.title} </Text>
        {/* Ya no ponemos esto aqui porque el body se verá al entrar en Details001 
        <Text style={styles.textStyle1}> {item.body} </Text> */}
      </Card>
    )
  };

  return (
    <View style= {{flex:1}} >
      <FlatList
        data = {data} 
        renderItem={({item}) => {
          {/* console.log(data) */}
          return renderData(item)
        } }
        // Las siguientes dos líneas sirven para el pull to refresh
        onRefresh={() => { loadData() }}
        refreshing = {loading}
        keyExtractor={item => `${item.id}`}
      />
      <FAB //Floating action button
        style={styles.fab}
        small={false}
        icon= "plus"
        theme = {{colors: {accent: "green"}}}
        onPress={() => props.navigation.navigate('CreateArticles0011', { updateData: updateData }) }
      />
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
  }
});


export default Home002