import Header from "./Header";
import Formulario from "./Formulario";
import { SafeAreaView } from "react-native";    

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header />
    <Formulario />
  </SafeAreaView>
);