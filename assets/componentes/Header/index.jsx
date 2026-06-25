import React, { use, useEffect } from "react";  
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

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Login (Apellido, Apellido)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#7B2FBE",  // morado de la imagen
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
 
export default Header;