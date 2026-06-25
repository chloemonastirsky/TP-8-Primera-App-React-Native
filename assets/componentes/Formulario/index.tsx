import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";


const Formulario = () => {
    const USUARIO_CORRECTO = "Flechita 2.0";
    const CONTRASENA_CORRECTA = "soyelmejorprofe";
    const [usuario, setUsuario] = useState<string>("");
    const [contrasena, setContrasena] = useState<string>("");
    const [cargando, setCargando] = React.useState(false);   
    const [error, setError] = React.useState(false);
    const [login, setLogin] = React.useState(false); 
    
    const Login =() => {
        setCargando(true);
        setError(false);
        setTimeout(() => {
      if (
        usuario === USUARIO_CORRECTO &&
        contrasena === CONTRASENA_CORRECTA
      ) {
        setLogin(true);
      } else {
        setError(true);
      }
      setCargando(false);
    }, 1000);
    }

    if (login) {
    return (
      <View style={styles.container}>
        <Text style={styles.successText}>¡Bienvenido, {usuario}!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setLogin(false);
            setUsuario("");
            setContrasena("");
          }}
        >
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

   return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
 
      {/* Formulario */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />
 
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={true}
        />
 
        {/* Mensaje de error */}
        {error && (
          <Text style={styles.errorText}>
            Usuario o contraseña incorrectos, vuelva a intentar.
          </Text>
        )}
 
        {/* Botón login o spinner */}
        {cargando ? (
          <ActivityIndicator size="large" color="#4A90E2" style={styles.spinner} /> //circulito de carga
        ) : (
          <TouchableOpacity style={styles.button} onPress={Login}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        )}
      </View>
 
      {/* Botones secundarios */}
      <TouchableOpacity onPress={() => console.log("Olvidaste la clave")}>
        <Text style={styles.linkText}>¿Olvidaste la clave?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={() => console.log("Crear cuenta")}>
        <Text style={styles.linkText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  form: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#4A90E2",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  successText: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  linkText: {
    color: "#4A90E2",
    fontSize: 14,
    marginTop: 12,
    textDecorationLine: "underline",
  },
  spinner: {
    marginTop: 8,
  },
});
 
export default Formulario;