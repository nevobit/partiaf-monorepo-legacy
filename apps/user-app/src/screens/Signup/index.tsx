import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {KeyboardAvoidingView} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, RootStackParamList } from '../../navigation/AppNavigator';
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../../graphql/queries/user";
import { signin } from "../../features/auth";

type HomeScreenNavigationProp = StackNavigationProp<
AuthStackParamList
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  };

const Signup = ({navigation}: Props) => {

  const [register] = useMutation(REGISTER_USER);

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    phone: '',
    password: ''
  });

  const dispatch = useDispatch();

  console.log(error)
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
       const { data } = await register({
         variables: {
           firstname: user.firstname,
           lastname: user.lastname,
           username: user.username,
           phone: user.phone,
           password: user.password,
         },
       });

      dispatch(signin({ ...data.userSignup }));
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
        <Text>{error}</Text>
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
            value={user.firstname}
            onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['firstname']: text }))}
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
            value={user.username}
            onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['username']: text }))}
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
            value={user.phone}
            onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['phone']: text }))}
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
      
      <TouchableOpacity style={{marginTop: 20, borderRadius: 5, width: '105%', height: 50, backgroundColor: '#FFE243'}} onPress={onSubmit}>
          <Text style={{width: '105%', marginTop: 10, fontSize: 20, fontWeight: '600', color: '#333', textAlign: 'center' }}>Registrarme</Text>
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
