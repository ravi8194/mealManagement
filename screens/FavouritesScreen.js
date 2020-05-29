import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Favourites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default FavouritesScreen;
