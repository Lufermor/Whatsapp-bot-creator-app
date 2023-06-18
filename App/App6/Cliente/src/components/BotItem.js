import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";

const BotItem = ({ bot }) => {
  const navigation = useNavigation();

  const handleBotPress = () => {
    navigation.navigate("BotDetails", { data: bot });
  };

  const cardWidth = Dimensions.get("window").width * 0.9; // Calcula el ancho de la tarjeta

  return (
    <TouchableOpacity onPress={handleBotPress}>
      <Card style={[styles.cardStyle, { width: cardWidth }]}>
        <Text style={styles.textStyle}>{bot.nombre}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 8,
    padding: 16,
  },
  textStyle: {
    fontSize: 16,
  },
});

export default BotItem;
