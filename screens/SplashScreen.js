import React from "react";
import { View, StyleSheet, Image } from "react-native";

const splash_screen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/littleLemonLogo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    height: 90,
    width: "85%",
    resizeMode: "contain",
  },
});

export default splash_screen;
