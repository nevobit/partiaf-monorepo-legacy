import React, { useState } from "react";
import {
  Text,
  View as DefaultView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { LOGIN_USER, RESET_PASSWORD } from "../../graphql/queries/user";
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
// import colors, { mainColor } from "../../components/Layout/Theme/colors";
import { Dimensions } from "react-native";
// import Input from "../../components/Shared/Input/Input";
// import Button from "../../components/Shared/Button/Input";
import styles from "./styles";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";
import { View } from "../../components/Layout/Theme";
import colors from "../../components/Layout/Theme/colors";
import { useTheme } from "../../contexts/ThemeContext";

type HomeScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ResetPassword = ({ navigation }: Props) => {
  const {theme} = useTheme();
  const [resetPassword] = useMutation(RESET_PASSWORD);

  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await resetPassword({
        variables: {
          phone: phone,
        },
      });
      
      if(data){
        navigation.navigate("Validation")
      }

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
    <View style={{
      paddingVertical: 40,
      paddingTop:20
    }}>
      <DefaultView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            style={{ fontSize: 25, color: colors[theme].text }}
          />
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png",
          }}
          style={{
            marginLeft: 23,
            marginTop: 4,
            width: 120,
            height: 20,
            resizeMode: "contain",
            opacity: 0
          }}
        />
        <DefaultView style={styles.header_left}>
          <TouchableOpacity></TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 10,
            }}
          ></TouchableOpacity>
        </DefaultView>
      </DefaultView>
      
      <DefaultView style={{
        padding: 20
      }}>
        <Text style={{
            fontWeight:'500',
            fontSize: 28,
            marginBottom:8,
            color: colors[theme].text
        }}>Recupera tu cuenta</Text>
        <Text style={{
            fontSize: 16,
            marginBottom:20,
            color: colors[theme].text
        }}>Ingresa el numero de telefono con el que te registraste y te enviaremos por mensaje un codigo de confirmación para restablecer tu contraseña. </Text>
        <Input placeholder="Telefono" 
             value={phone}
             
             onChangeText={(text) =>  setPhone(text)} />
             <Button style={{
              marginTop:15
             }} text="Buscar cuenta" onPress={onSubmit} />
      </DefaultView>
      {/* <View
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

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 15
        }}>
          <Text style={{
            fontWeight: '500',
            fontSize: 15
          }}>¿Olvidaste tu contraseña?</Text>
        </View>

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
      </View> */}
    </View>
  );
};

export default ResetPassword;
