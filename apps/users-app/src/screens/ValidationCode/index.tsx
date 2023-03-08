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
import { Dimensions } from "react-native";
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

const ValidationCode = ({ navigation }: Props) => {
  const {theme} = useTheme();
  const [validationCode] = useMutation(RESET_PASSWORD);

  const [error, setError] = useState("");
  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // const { data } = await validationCode({
      //   variables: {
      //     code: code,
      //   },
      // });
      
      navigation.navigate('Change')

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
    <View
    style={{
      paddingTop:20
    }}
    >
      <DefaultView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            style={{fontSize: 25, color: colors[theme].text }}
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
        <View style={styles.header_left}>
          <TouchableOpacity></TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 10,
            }}
          ></TouchableOpacity>
        </View>
      </DefaultView>
      
      <View style={{
        padding: 20
      }}>
        <Text style={{
            fontWeight:'500',
            fontSize: 28,
            marginBottom:8,
            color: colors[theme].text,
          paddingHorizontal: 20,
              
        }}>Ingresa el código de verificación</Text>
        <Text style={{
            fontSize: 16,
            marginBottom:20,
            color: colors[theme].text,
      paddingHorizontal: 20,
            
        }}>Ingresa el código de verificación que te enviamos por mensaje para restablecer tu contraseña. </Text>
        <DefaultView style={{
      paddingHorizontal: 20,
          
        }}>
          
        <Input placeholder="Codigo" 
             value={code}
             onChangeText={(text) =>  setCode(text)} />
             <Button style={{
              marginTop:15
      
      }}  text="Buscar cuenta" onPress={onSubmit} />
        </DefaultView>
      
      </View>
      
    </View>
  );
};

export default ValidationCode;
