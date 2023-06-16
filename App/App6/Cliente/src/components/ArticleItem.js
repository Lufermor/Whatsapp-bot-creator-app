import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, FAB } from 'react-native-paper';

const ArticleItem = ({article}) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.cardStyle} 
      onPress={() => navigation.navigate("ArticleDetails", { data: article })}>
      <Text style={styles.textStyle1}> {article.title} </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    color: 'blue',
    padding: 10,
    margin: 5,
  },
  cardStyle: {
    margin: 2,
    padding: 2,
    flex: 1,
  },
});
export default ArticleItem;