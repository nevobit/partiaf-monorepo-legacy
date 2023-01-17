import React from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {KeyboardAvoidingView} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, RootStackParamList } from '../../navigation/AppNavigator';
type HomeScreenNavigationProp = StackNavigationProp<
AuthStackParamList
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  };

const Signup = ({navigation}: Props) => {
  return (

    <View
      style={{
        height: '90%',
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <View style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Image
          source={{ uri: "https://i.postimg.cc/DZL8VnL4/partiaf-single.png" }}
          style={{
            // marginLeft: 23,
            marginTop: 4,
            width: 200,
            height: 40,
            resizeMode: "contain",
          }}
        />
        <Text style={{
          fontSize: 20,
          color: '#333',
          marginTop: 15,
        }} >Registrate para continuar explorando</Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, marginTop: 100 }}>
        <TouchableOpacity
          style={{
            width: "50%",
            height: 50,
            backgroundColor: "#fff",
            margin: 10,
            padding: 10,
            paddingTop: 10,
            borderRadius: 5,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: 'row'
          }}
        >
          <Image source={{uri: 'https://i.postimg.cc/prGMhh19/google.png'}}  style={{
            marginTop: 4,
            width: 30,
            height: 30,
            resizeMode: "contain",
            marginRight: 10
          }} />
          <Text style={{ textAlign: "center", fontSize: 18 }}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            height: 50,
            backgroundColor: "#fff",
            margin: 10,
            padding: 10,
            paddingTop: 10,
            borderRadius: 5,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: 'row'
          }}
        >
          <Image source={{uri: 'https://i.postimg.cc/HWBr46qM/facebook.png'}}
          style={{
            marginTop: 4,
            width: 30,
            height: 30,
            resizeMode: "contain",
            marginRight: 10
          }}
          />
          <Text style={{ textAlign: "center", fontSize: 18  }}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View>
      <View
          style={{
            height: 50,
            width: "100%",
            padding: 10,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons
            name="ios-person-outline"
            style={{ fontSize: 18, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40 }}
            placeholder="Nombre Completo"
          />
        </View>
        <View
          style={{
            height: 50,
            width: "100%",
            padding: 10,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons
            name="ios-person-outline"
            style={{ fontSize: 18, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40 }}
            placeholder="Usuario"
          />
        </View>
        <View
          style={{
            height: 50,
            width: "100%",
            padding: 10,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons
            name="ios-person-outline"
            style={{ fontSize: 18, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40 }}
            placeholder="Telefono"
          />
        </View>
        <View
          style={{
            height: 50,
            width: "100%",
            padding: 10,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons
            name="ios-person-outline"
            style={{ fontSize: 18, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40 }}
            placeholder="Contrasena"
          />
        </View>

      </View>
      
      <TouchableOpacity style={{marginTop: 20, borderRadius: 5, width: '105%', height: 50, backgroundColor: '#FFE243'}}>
          <Text style={{width: '105%', marginTop: 10, fontSize: 20, fontWeight: '600', color: '#333', textAlign: 'center' }}>Iniciar Sesion</Text>
        </TouchableOpacity>

      <Text style={{
        fontSize: 18,
        marginTop: 40
      }}>
        Ya tienes una cuenta? <TouchableOpacity onPress={() => navigation.navigate('Signin')}><Text>Inicia sesión</Text></TouchableOpacity>
      </Text>
    </View>
  );
};

export default Signup;
