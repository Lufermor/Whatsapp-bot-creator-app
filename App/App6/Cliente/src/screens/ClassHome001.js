

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ClassHome001 extends Component {

  state = {name003: 'classhome name003 in state'}
  render() {
    return (
      <View>
        <Text style={{ color: 'purple', backgroundColor: 'yellow', fontSize:20 }} >Text from ClassHome001</Text>
        <Text style={styles.textStyle1}> {this.props.name002} </Text>
        <Text style={styles.textStyle1}> { this.state.name003 } </Text>
        <Button title='Click Me' onPress={() => this.setState({name003: 'classhome name003 in state updated' })} />
      </View>
    )
  }
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

export default ClassHome001