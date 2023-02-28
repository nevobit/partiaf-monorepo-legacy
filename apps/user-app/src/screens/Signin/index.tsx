import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { LOGIN_USER } from "../../graphql/queries/user";
import { useMutation } from "@apollo/client";
// import { useDispatch } from 'react-redux';
// import { loginUser } from "../../redux/states/user";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamList,
  RootStackParamList,
} from "../../navigation/AppNavigator";
import { useDispatch } from "react-redux";
import { signin } from "../../features/auth";
import colors, { mainColor } from "../../components/Layout/Theme/colors";
import { Dimensions } from "react-native";
import Input from "../../components/Shared/Input/Input";
import Button from "../../components/Shared/Button/Input";
import { Logo } from "../../components/Shared/Logo";
import styles from "./styles";

type HomeScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Signin = ({ navigation }: Props) => {
  const [login] = useMutation(LOGIN_USER);

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
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

  const halfWindowsHeight = Dimensions.get("window").height;

  return (
    // <SafeAreaView
    //   style={{
    //     height: '90%',
    //     width: "90%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //   }}
    // >
    //   <View style={{
    //     display: 'flex',
    //     alignItems: 'center'
    //   }}>
    //     <Image
    //       source={{ uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png" }}
    //       style={{
    //         marginTop: 4,
    //         width: 200,
    //         height: 40,
    //         resizeMode: "contain",
    //       }}
    //     />
    //     <Text style={{
    //       fontSize: 20,
    //       color: '#333',
    //       marginTop: 15,
    //     }} >Inicia sesion para continuar explorando</Text>
    //   </View>

    //   <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 100, width: '100%' }}>
    //     <TouchableOpacity
    //       style={{
    //         height: 60,
    //         width: '50%',
    //         backgroundColor: "#fff",
    //         padding: 10,
    //         paddingTop: 10,
    //         borderRadius: 5,
    //         marginRight: 10,
    //         display: 'flex',
    //         alignItems: "center",
    //         justifyContent: "center",
    //         flexDirection: 'row'
    //       }}
    //     >
    //       <Image source={{uri: 'https://i.postimg.cc/prGMhh19/google.png'}}  style={{
    //         marginTop: 4,
    //         width: 30,
    //         height: 30,
    //         resizeMode: "contain",
    //         marginRight: 10
    //       }} />
    //       <Text style={{ textAlign: "center", fontSize: 18 }}>Google</Text>
    //     </TouchableOpacity>
  
    //   </View>

  
    //   <Text>{error}</Text>

    //   <TouchableOpacity style={{marginTop: 20, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '105%', height: 60, backgroundColor: '#FFE243'}} >
    //       <Text style={{width: '100%', fontSize: 22, fontWeight: '600', color: '#333', textAlign: 'center' }}>Iniciar Sesion</Text>
    //     </TouchableOpacity>

    // </SafeAreaView>

    <SafeAreaView
      style={{
        height: halfWindowsHeight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "90%",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Image source={{ uri: Logo }} style={styles.logo} />
        </View>

        <Input placeholder="Usuario"
          value={user.username}
          onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['username']: text }))}
        />
        <Input placeholder="Contraseña" 
          secureTextEntry={true}
             value={user.password}
             onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['password']: text }))} />
        <TouchableOpacity onPress={() => navigation.navigate("Reset")} style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 15
        }}>
          <Text style={{
            fontWeight: '500',
            fontSize: 15
          }}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <Button color={mainColor} textColor="#333" text="Iniciar sesión" onPress={onSubmit} />
        <Text style={{
          textAlign: 'center',
          padding: 10,
        }}>O</Text>
            <TouchableOpacity
           style={{
             height: 50,
             backgroundColor: "#fff",
             padding: 10,
             width: '100%',
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
           <Text style={{ textAlign: "center", fontSize: 15, fontWeight: '600'  }}>Facebook</Text>
         </TouchableOpacity>
      </View>
      <View style={{
        position: 'absolute',
        bottom: 20,
      }}>
        <Text style={{
          textAlign: 'center',
          padding: 10,
        }}>¿No tienes una cuenta? <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{
                 fontSize: 16,
                 fontWeight: '600'
               }}>Regístrate aquí</Text></TouchableOpacity></Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
