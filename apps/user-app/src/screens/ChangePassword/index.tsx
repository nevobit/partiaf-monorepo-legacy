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

const ChangePassword = ({ navigation }: Props) => {
  const [changePassword] = useMutation(RESET_PASSWORD);

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      
      if(password !== confirmPassword){
        alert("Los dos campos de contraseña deben ser iguales");
        return;
      }
      const { data } = await changePassword({
        variables: {
          password: password,
        },
      });

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
    <SafeAreaView
      style={{
        height: halfWindowsHeight,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            style={{ fontWeight: "100", fontSize: 26 }}
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
      </View>
      
      <View style={{
        padding: 20
      }}>
        <Text style={{
            fontWeight:'500',
            fontSize: 28,
            marginBottom:8
        }}>Crear nueva contraseña</Text>
        <Text style={{
            fontSize: 14,
            marginBottom:20
        }}>Esta contraseña debe ser diferente a la que usas previamente. </Text>
        <Input placeholder="Contraseña" 
             value={password}
             secureTextEntry={true}
             onChangeText={(text) =>  setPassword(text)} />
             <Input placeholder="Confirmar Contraseña" 
             value={confirmPassword}
             secureTextEntry={true}
             onChangeText={(text) =>  setConfirmPassword(text)} />
             <Button color={mainColor} textColor="#333" text="Cambiar Contraseña" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
