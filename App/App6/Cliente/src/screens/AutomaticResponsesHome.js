import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, RefreshControl, Dimensions } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';

import AutomaticResponseItem from '../components/AutomaticResponsesItem';
import Layout from '../components/Layout';
import { getRespuestasAutomaticasByBot } from '../api/RespuestaAutomaticaRoutes.js';

function AutomaticResponsesHome(props) {
  const navigation = useNavigation();
  const botData = props.route.params.data;
  const isFocused = useIsFocused();
  console.log(props.route.params)

  const [automaticResponses, setAutomaticResponses] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    try {
      const responses = await getRespuestasAutomaticasByBot(botData.bot_id);
      setAutomaticResponses(responses);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [isFocused]);

  const renderResponseItem = ({ item }) => {
    return <AutomaticResponseItem response={item} />;
  };

  const handleCreateResponse = () => {
    navigation.navigate('AutomaticResponseCreate', { botData: botData });
    //console.log("handleCreateResponse")
  };

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ width: '100%' }}
          data={automaticResponses}
          keyExtractor={(item) => `${item.respuesta_id}`}
          renderItem={renderResponseItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#78e08f']} progressBackgroundColor="#0a3d62" />
          }
        />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={handleCreateResponse}
        />
      </SafeAreaView>
    </Layout>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  card: {
    width: windowWidth * 0.9,
    padding: 20,
  },
});

export default AutomaticResponsesHome;
