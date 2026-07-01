import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import Header from "./assets/componentes/Header";
import Formulario from "./assets/componentes/Formulario";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Formulario />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
