// src/screens/HomeScreen.js
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthContext from "../context/auth/AuthContext";

const HomeScreen = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    // Aquí puedes cargar datos adicionales si es necesario
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hola, {state.user?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
