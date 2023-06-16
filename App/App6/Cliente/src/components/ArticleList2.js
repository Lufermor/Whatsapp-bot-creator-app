import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { deleteArticles, getArticles } from "../../api";

import ArticleItem2 from "./ArticleItem2";

const ArticleList2 = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const loadData = async () => {
    try {
      const articles = await getArticles();
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

  const handleDelete = (id) => {
    Alert.alert("Delete Article", "Are you sure you want to delete the article", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          await deleteArticles(id);
          await loadData();
        },
      },
    ]);
  };

  useEffect(() => {
    loadData();
    console.log("called");
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <ArticleItem2 article={item} handleDelete={handleDelete} />
  );

  return (
    <SafeAreaView style={{ flex: 1, width: "90%" }}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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

export default ArticleList2;