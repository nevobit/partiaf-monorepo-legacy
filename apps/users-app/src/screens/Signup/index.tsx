import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View as DefaultView } from "react-native";
import { View } from "../../components/Layout/Theme";
import colors from "../../components/Layout/Theme/colors";
import Button from "../../components/Shared/Button";
import Input from "../../components/Shared/Input";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../graphql/queries/user";
import { useDispatch } from "react-redux";
import { signin } from "../../features/auth";

const Signup = ({navigation}: any) => {
  const { theme } = useTheme();
  
  const [register] = useMutation(REGISTER_USER);
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    password: "",
    balance: 20000
  });
  
  const dispatch = useDispatch();
  
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      
      if(!terms){
        return;
      }
      
      const { data } = await register({
        variables: {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          phone: user.phone,
          password: user.password
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
        position: "relative",
        // paddingVertical: 40,
        paddingTop:20,
      }}
    > 
      <DefaultView style={{
        marginBottom:10,
        paddingHorizontal: 20
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Ionicons name="ios-arrow-back-outline" style={{
            fontSize: 25,
            color: colors[theme].text
          }}  />
        </TouchableOpacity>
      </DefaultView>
      <Text
        style={{
          textAlign: "left",
          fontWeight: "700",
          fontSize: 25,
          paddingHorizontal: 20,
          color: colors[theme].text
        }}
      >
        Unete a la fiesta,
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontWeight: "700",
          fontSize: 25,
          paddingHorizontal: 20,
          color: colors[theme].text,
          marginBottom: 10
        }}
      >
        Crea tu cuenta ahora!
      </Text>
      <DefaultView style={{
        display: "flex",
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 15
      }}>
        <DefaultView style={{
          width: '48%',
          marginRight:15,
          
        }}>
      <Input  value={user.firstname}
              onChangeText={(text) =>
                setUser((prev) => ({ ...prev, ["firstname"]: text }))
              }  icon="ios-person-outline" placeholder="Nombre" />
          
        </DefaultView>
        <DefaultView style={{
          width: '48%'
        }}>
        <Input value={user.lastname}
              onChangeText={(text) =>
                setUser((prev) => ({ ...prev, ["lastname"]: text }))
              }  icon="ios-person-outline" placeholder="Apellido" />
          
        </DefaultView>
        
      </DefaultView>
      <DefaultView style={{
          paddingHorizontal: 20,
        
      }}>
        
      <Input value={user.username}
          onChangeText={(text) =>
            setUser((prev) => ({ ...prev, ["username"]: text }))
          }  icon="ios-person-outline" placeholder="Usuario" />
      <Input
       value={user.phone}
       onChangeText={(text) =>
         setUser((prev) => ({ ...prev, ["phone"]: text }))
       }
        icon="ios-phone-portrait-outline"
        placeholder="Ingresa tu numero de telefono"
      />
      <Input
       value={user.password}
       onChangeText={(text) =>
         setUser((prev) => ({ ...prev, ["password"]: text }))
       }
        icon="ios-lock-closed-outline"
        isPassword={true}
        placeholder="Ingresa tu contraseña"
      />
      <DefaultView style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <TouchableOpacity style={{
          width: 20,
          height: 20,
          borderRadius: 5,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0,1)',
          marginRight: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        onPress={() => setTerms(!terms)}
        >
          {terms? (
             <Ionicons  style={{
              fontSize: 28
            }} name="ios-checkbox-outline" />
            
          ): null}
         
        </TouchableOpacity>
        <Text style={{
          fontSize: 14,
          fontWeight: '500',
          color: colors[theme].text,
          marginTop: 10
        }}>Acepto los terminos y condiciones de Partiaf y afirmo ser mayor de edad?</Text>
      </DefaultView>
      <Button
        text="Inicia sesión"
        style={{
          zIndex: 5,
          marginTop: 15
        }}
        onPress={onSubmit}
      />
              {/* <TouchableOpacity
            style={{
              height: 50,
              padding: 10,
              width: '100%',
              paddingTop: 10,
              borderRadius: 5,
              marginTop: 10,
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
          position: "relative",
          bottom: 0,
          width: "100%",
        }}
      >
        
         <DefaultView
          style={styles.registerContainer}
        >
          <Text
            style={[styles.textRegister, { color: colors[theme].holderColor }]}
          >
            ¿Tienes una cuenta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text
              style={{
                color: colors[theme].text,
                fontSize: 16,
                fontWeight: '900'
              }}
            >
              Inicia sesión
            </Text>
          </TouchableOpacity>
        </DefaultView> 
      </DefaultView>
    </View>
  );
};

export default Signup;
