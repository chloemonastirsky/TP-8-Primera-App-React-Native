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
  ActivityIndicator
} from "react-native";


const Formulario = () => {
    const USUARIO_CORRECTO = "Flechita 2.0";
    const CONTRASENA_CORRECTA = "soyelmejorprofe";
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);
    const [login, setLogin] = useState(false);
    
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
      <Text style={styles.successText}>
        ¡Bienvenido, {usuario}!
      </Text>

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
          source={require("./logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
 
        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#aaa"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          keyboardType="email-address"
        />
 
        <TextInput
          style={[styles.input, styles.inputFocused]}
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
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
 
        {/* Botón */}
        {cargando ? (
          <ActivityIndicator size="large" color="#7B2FBE" style={styles.spinner} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={Login}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
        )}
 
        {/* Links secundarios */}
        <TouchableOpacity onPress={() => console.log("Olvidaste la clave")}>
          <Text style={styles.linkText}>Olvidaste la clave?</Text>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => console.log("Crear cuenta")}>
          <Text style={styles.linkText}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
 
  // ── Header ──────────────────────────────────────────────
  header: {
    backgroundColor: "#7B2FBE",   // morado de la imagen
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
 
  // ── Contenedor principal ─────────────────────────────────
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "#fff",
  paddingHorizontal: 32,
  paddingTop: 70,
},
 
  // ── Logo ─────────────────────────────────────────────────
  logo: {
  width: 280,
  height: 160,
  marginBottom: 25,
},
 
  // ── Inputs ───────────────────────────────────────────────
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: "#333",
    marginBottom: 14,
    backgroundColor: "#fff",
  },
  // Simula el input con borde morado (el de contraseña en la foto)
  inputFocused: {
    borderColor: "#7B2FBE",
    borderWidth: 1.5,
  },
 
  // ── Botón principal ──────────────────────────────────────
  button: {
    width: "100%",
    backgroundColor: "#7B2FBE",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,       // simula el texto en mayúsculas con más aire
  },
 
  // ── Links ────────────────────────────────────────────────
  linkText: {
    color: "#333",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
 
  // ── Estados ──────────────────────────────────────────────
  errorText: {
    color: "red",
    fontSize: 13,
    marginBottom: 10,
    textAlign: "center",
  },
  successText: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  spinner: {
    marginVertical: 14,
  },
});
 
export default Formulario;