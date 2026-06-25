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
}

export default Header;