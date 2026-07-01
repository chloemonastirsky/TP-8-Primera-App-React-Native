import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Formulario />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});