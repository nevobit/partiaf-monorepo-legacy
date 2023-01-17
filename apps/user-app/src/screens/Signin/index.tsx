import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
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
        }} >Inicia sesion para continuar explorando</Text>
      </View>
<Text>{user.username}</Text>
<Text>{user.password}</Text>
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
            name="ios-person-outline"
            style={{ fontSize: 18, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40 }}
            placeholder="Contrasena"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['password']: text }))}
          />
        </View>

      </View>
      <Text>{error}</Text>
      
      <TouchableOpacity style={{marginTop: 20, borderRadius: 5, width: '105%', height: 50, backgroundColor: '#FFE243'}} onPress={onSubmit}>
          <Text style={{width: '105%', marginTop: 10, fontSize: 20, fontWeight: '600', color: '#333', textAlign: 'center' }}>Iniciar Sesion</Text>
        </TouchableOpacity>

      <Text style={{
        fontSize: 18,
        marginTop: 40
      }}>
        Aun no tienes una cuenta? <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text>Registrate aqui</Text></TouchableOpacity>
      </Text>
    </View>
  );
};

export default Signin;
