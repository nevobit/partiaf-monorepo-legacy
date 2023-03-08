import React from 'react'
import { View, TextInput, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles  from './styles';
import {useState} from 'react';

const Login = () => {
  const [loading, setLoading] = useState(false); 
  const submit = () => {
    setLoading(!loading);
  }
  return (
    <View style={styles.container}>
        <Image
           source={{ uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png" }}
           style={{
             marginTop: 4,
             width: 200,
             height: 40,
             resizeMode: "contain",
           }}
         />
        <TextInput placeholder='Usuario' style={styles.input}   />
        <TextInput placeholder='Codigo'  style={styles.input}  keyboardType='number-pad' />
        <TouchableOpacity 
        onPress={submit}
        disabled={loading} style={styles.button}>
            {!loading ? (
            <Text style={styles.buttonText}>Inciar Sesión</Text>
                
            ): (
                <ActivityIndicator color="#333"  size="small" />                
            )}
            
        </TouchableOpacity>
    </View>
  )
}

export default Login
