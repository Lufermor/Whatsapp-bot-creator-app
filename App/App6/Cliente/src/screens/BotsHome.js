import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, FlatList, SafeAreaView, RefreshControl } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { FAB } from 'react-native-paper';

import BotItem from "../components/BotItem";
import Layout from "../components/Layout";
import { getBots } from "../api/BotRoutes";


import { UserContext } from '../UserContext';

const BotsHome = () => {
  const navigation = useNavigation();
  const [bots, setBots] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const { userId} = useContext(UserContext);

  const loadData = async () => {
    try {
      const bots = await getBots(userId);
      setBots(bots);
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

  const renderItem = (item) => {
    return <BotItem bot={item} />;
  };

  const handleCreateBot = () => {
    navigation.navigate('BotCreate');
  };

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={bots}
          keyExtractor={(item) => `${item.bot_id}`}
          renderItem={({ item }) => renderItem(item)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#78e08f"]}
              progressBackgroundColor="#0a3d62"
            />
          }
        />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={handleCreateBot}
        />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    width: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default BotsHome;
