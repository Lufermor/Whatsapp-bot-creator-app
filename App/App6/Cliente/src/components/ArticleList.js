import React, { useEffect, useState } from "react";  // When making fetch, it's needed to use useEffect.
import { StyleSheet, FlatList, SafeAreaView, RefreshControl} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import ArticleItem from "./ArticleItem";
import { getArticles } from "../api/ArticlesRoutes";


const ArticleList = () => {

  const navigation = useNavigation();

  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const loadData = async () => {
    try {
      const articles = await getArticles();
      console.log(articles.length);
      setArticles(articles);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    await loadData();
    setRefreshing(false);
  }, []);

  /* useEffect is a function that executes everytime this list is loaded,
      it's the first function to be executed. */
      useEffect(() => { loadData();}, [isFocused]);

  const renderItem = (item) => {
    return ( <ArticleItem article={item} /> );
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "90%" }}>
      <FlatList
        style={{ width: "100%" }}
        data={articles}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          return renderItem(item)
        }}
        // Next lines are for enable "pull to refresh"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#78e08f"]}
            progressBackgroundColor="#0a3d62"
          />
        }
      />
    </SafeAreaView>
  );
};

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

export default ArticleList;