import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {KeyboardAvoidingView} from 'react-native';
import { LOGIN_USER } from "../../graphql/queries/user";
import { useMutation } from "@apollo/client";
// import { useDispatch } from 'react-redux';
// import { loginUser } from "../../redux/states/user";
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, RootStackParamList } from '../../navigation/AppNavigator';
import { useDispatch } from "react-redux";
import { signin } from "../../features/auth";
import colors, { mainColor } from "../../components/Layout/Theme/colors";
type HomeScreenNavigationProp = StackNavigationProp<
AuthStackParamList
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  };


const Signin = ({navigation}: Props) => {

  const [login] = useMutation(LOGIN_USER);

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
       const { data } = await login({
         variables: {
           username: user.username,
           password: user.password,
         },
       });

      dispatch(signin({ ...data.userSignin }));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  if (error.length > 0) {
    setTimeout(() => {
      setError("");
    }, 10000);
  }


  return (
    <SafeAreaView
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
          source={{ uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png" }}
          style={{
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
        }} >Inicia sesion para continuar explorando</Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 100, width: '100%' }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: '50%',
            backgroundColor: "#fff",
            padding: 10,
            paddingTop: 10,
            borderRadius: 5,
            marginRight: 10,
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
            height: 60,
            backgroundColor: "#fff",
            padding: 10,
            marginLeft: 10,
            width: '50%',
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

      <View style={{
        width: '100%',
      }}>
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
            style={{ fontSize: 25, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40, fontSize: 18}}
            
            placeholder="Usuario"
            value={user.username}
            onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['username']: text }))}
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
            name="ios-lock-closed-outline"
            style={{ fontSize: 25, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 60, fontSize: 18 }}
            placeholder="Contrasena"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['password']: text }))}
          />
        </View>

      </View>
      <Text>{error}</Text>
      
      <TouchableOpacity style={{marginTop: 20, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '105%', height: 60, backgroundColor: '#FFE243'}} onPress={onSubmit}>
          <Text style={{width: '100%', fontSize: 22, fontWeight: '600', color: '#333', textAlign: 'center' }}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <View style={{
        marginTop: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
          
      <Text style={{
        fontSize: 18,
        marginRight: 10
      }}>
        Aun no tienes una cuenta?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{
          fontSize: 18,
          fontWeight: '600'
        }}>Registrate aqui</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default Signin;
