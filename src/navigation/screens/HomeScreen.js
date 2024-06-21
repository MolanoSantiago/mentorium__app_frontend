import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { windowWidth, COLORS } from "../../utils/util";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";

const PlaceholderImage = require("../../../assets/images/character.png");

const HomeScreen = () => {
  const test = () => {
    console.log('press button');
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.light, COLORS.ternary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 2 }}
        style={styles.background}
      />
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          width={windowWidth}
          height={440}
          borderRadius={18}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Iniciar sesión" theme={"primary"} fn={test} />
        <Button label="Registrarse" fn={test} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "55%",
  },
});

export default HomeScreen;
