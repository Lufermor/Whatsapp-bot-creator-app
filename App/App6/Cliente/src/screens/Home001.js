
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Aquí estamos probando a enviarle atributos desde App.js, aquí se recibe como props
function Home001(props) {
  const [name002, setName002] = useState('Name in useState')
  return (
    <View>
      <Text style={{color:'red', backgroundColor:'yellow'}} >Text from Home001</Text>
      <Text style= {styles.textStyle1}> {props.name001} </Text>
      <Text style= {styles.textStyle1}> {name002} </Text>
      <Button title='Home001Button' onPress={() => setName002("home001-useState-name002 changed")} />
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
    margin: 20,
  },
});


export default Home001