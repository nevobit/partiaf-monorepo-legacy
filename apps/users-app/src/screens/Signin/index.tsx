import React, {useState}from "react";
import { Image, Text, TouchableOpacity, View as DefaultView } from "react-native";
import { View } from "../../components/Layout/Theme";
import colors from "../../components/Layout/Theme/colors";
import Button from "../../components/Shared/Button";
import Input from "../../components/Shared/Input";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { signin } from "../../features/auth";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/queries/user";


const Signin = ({navigation}: any) => {
  const { theme } = useTheme();
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

  return (
    <View
      style={{
        position: "relative",
        paddingTop:20
      }}
    >
      <DefaultView style={{
        marginTop:10,
        marginBottom:20,
        paddingHorizontal: 20,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back-outline" style={{
            fontSize:25,
            color: colors[theme].text
          }}  />
        </TouchableOpacity>
      </DefaultView>
      <Text
        style={{
          textAlign: "left",
          fontWeight: "700",
          fontSize: 25,
          color: colors[theme].text,
          paddingHorizontal: 20,  
        }}
      >
        Los eventos mas divertidos,
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontWeight: "700",
          fontSize: 25,
          marginBottom: 20,
          color: colors[theme].text,
          paddingHorizontal: 20,        
        }}
      >
        Inicia sesión ahora!
      </Text>
      <DefaultView style={{
        paddingHorizontal: 20,
        
      }}>
        
      <Input label="Usuario" icon="ios-person-outline" placeholder="Ingresa tu usuario"
      value={user.username}
      onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['username']: text }))} />
      <Input
      label="Contraseña"
        icon="ios-lock-closed-outline"
        isPassword={true}
        placeholder="Ingresa tu contraseña"
        value={user.password}
             onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['password']: text }))}
      />
      <Text style={{
        color: 'red'
      }}>{error}</Text>
      <TouchableOpacity
        style={{
          marginBottom: 30,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Reset')}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            textAlign: "right",
            color: colors[theme].holderColor
          }}
        >
          ¿Has olvidado tu contraseña?
        </Text>
      </TouchableOpacity>
      <Button
        text="Inicia sesión"
        style={{
          zIndex: 5,
        }}
        onPress={onSubmit}
      />
       
            {/* <TouchableOpacity
           style={{
             height: 50,
             padding: 10,
             width: '100%',
             paddingTop: 10,
             marginTop: 20,
             borderRadius: 5,
             display: 'flex',
             alignItems: "center",
             justifyContent: "center",
             flexDirection: 'row',
             backgroundColor: colors[theme].tint,
             borderWidth: 1,
             borderColor: colors[theme].border
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
           <Text style={{ textAlign: "center", fontSize: 15, fontWeight: '600', color: colors[theme].text  }}>Facebook</Text>
         </TouchableOpacity> */}
         </DefaultView>
      
      <DefaultView
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
        }}
      >
        
         <DefaultView
          style={styles.registerContainer}
        >
          <Text
            style={[styles.textRegister, { color: colors[theme].holderColor }]}
          >
            ¿No tienes una cuenta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: colors[theme].text,
                fontSize: 16,
                fontWeight: '900'
              }}
            >
              Regístrate ahora
            </Text>
          </TouchableOpacity>
        </DefaultView> 
      </DefaultView>
    </View>
  );
};

export default Signin;
