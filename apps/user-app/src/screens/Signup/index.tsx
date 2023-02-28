import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamList,
  RootStackParamList,
} from "../../navigation/AppNavigator";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../../graphql/queries/user";
import { signin } from "../../features/auth";
import { Dimensions } from "react-native";
import { Logo } from "../../components/Shared/Logo";
import styles from "../Signin/styles";
import Input from "../../components/Shared/Input/Input";
import Button from "../../components/Shared/Button/Input";
import { mainColor } from "../../components/Layout/Theme/colors";
import CheckBox from '@react-native-community/checkbox';

type HomeScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Signup = ({ navigation }: Props) => {
  const [register] = useMutation(REGISTER_USER);

  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    password: "",
  });

  console.log({user})
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
  const halfWindowsHeight = Dimensions.get("window").height;

  return (
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

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "50%",
              paddingRight: 5,
            }}
          >
            <Input
              placeholder="Nombre"
              value={user.firstname}
              onChangeText={(text) =>
                setUser((prev) => ({ ...prev, ["firstname"]: text }))
              }
            />
          </View>
          <View
            style={{
              width: "50%",
              paddingLeft: 5,
            }}
          >
            <Input
              placeholder="Apellido"
              value={user.lastname}
              onChangeText={(text) =>
                setUser((prev) => ({ ...prev, ["lastname"]: text }))
              }
            />
          </View>
        </View>
        <Input
          placeholder="Usuario"
          value={user.username}
          onChangeText={(text) =>
            setUser((prev) => ({ ...prev, ["username"]: text }))
          }
        />
        <Input
          placeholder="Telefono"
          value={user.phone}
          onChangeText={(text) =>
            setUser((prev) => ({ ...prev, ["phone"]: text }))
          }
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(text) =>
            setUser((prev) => ({ ...prev, ["password"]: text }))
          }
        />
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
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
          fontWeight: '500'
        }}>Acepto los terminos y condiciones de Partiaf?</Text>
      </View>
        <Button
          color={mainColor}
          textColor="#333"
          text="Registrarme"
          onPress={onSubmit}
        />
        <Text
          style={{
            textAlign: "center",
            padding: 10,
          }}
        >
          O
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#fff",
            padding: 10,
            width: "100%",
            paddingTop: 10,
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: "https://i.postimg.cc/HWBr46qM/facebook.png" }}
            style={{
              marginTop: 4,
              width: 30,
              height: 30,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 15, fontWeight: "600" }}
          >
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            padding: 10,
          }}
        >
          ¿Ya tienes una cuenta?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
    // <View
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
    //     <Text>{error}</Text>
    //   </View>

    //   <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, marginTop: 100 }}>
    //     <TouchableOpacity
    //       style={{
    //         width: "50%",
    //         height: 50,
    //         backgroundColor: "#fff",
    //         margin: 10,
    //         padding: 10,
    //         paddingTop: 10,
    //         borderRadius: 5,
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
    //   </View>

    //   <View>
    //   <View
    //       style={{
    //         height: 50,
    //         width: "100%",
    //         padding: 10,
    //         marginBottom: 20,
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         borderRadius: 5,
    //         backgroundColor: "#fff",
    //       }}
    //     >
    //       <Ionicons
    //         name="ios-person-outline"
    //         style={{ fontSize: 18, color: "#000", marginRight: 10 }}
    //       />
    //       <TextInput
    //         style={{ width: "100%", height: 40 }}
    //         placeholder="Nombre Completo"
    //         value={user.firstname}
    //         onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['firstname']: text }))}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         height: 50,
    //         width: "100%",
    //         padding: 10,
    //         marginBottom: 20,
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         borderRadius: 5,
    //         backgroundColor: "#fff",
    //       }}
    //     >
    //       <Ionicons
    //         name="ios-person-outline"
    //         style={{ fontSize: 18, color: "#000", marginRight: 10 }}
    //       />
    //       <TextInput
    //         style={{ width: "100%", height: 40 }}
    //         placeholder="Usuario"
    //         value={user.username}
    //         onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['username']: text }))}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         height: 50,
    //         width: "100%",
    //         padding: 10,
    //         marginBottom: 20,
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         borderRadius: 5,
    //         backgroundColor: "#fff",
    //       }}
    //     >
    //       <Ionicons
    //         name="ios-person-outline"
    //         style={{ fontSize: 18, color: "#000", marginRight: 10 }}
    //       />
    //       <TextInput
    //         style={{ width: "100%", height: 40 }}
    //         placeholder="Telefono"
    //         value={user.phone}
    //         onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['phone']: text }))}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         height: 50,
    //         width: "100%",
    //         padding: 10,
    //         marginBottom: 10,
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         borderRadius: 5,
    //         backgroundColor: "#fff",
    //       }}
    //     >
    //       <Ionicons
    //         name="ios-person-outline"
    //         style={{ fontSize: 18, color: "#000", marginRight: 10 }}
    //       />
    //       <TextInput
    //         style={{ width: "100%", height: 40 }}
    //         placeholder="Contrasena"
    //         secureTextEntry={true}
    //         value={user.password}
    //         onChangeText={(text) =>  setUser((prev) => ({ ...prev, ['password']: text }))}
    //       />
    //     </View>

    //   </View>

    //   <TouchableOpacity style={{marginTop: 20, borderRadius: 5, width: '105%', height: 50, backgroundColor: '#FFE243'}} onPress={onSubmit}>
    //       <Text style={{width: '105%', marginTop: 10, fontSize: 20, fontWeight: '600', color: '#333', textAlign: 'center' }}>Registrarme</Text>
    //     </TouchableOpacity>

    //   <View style={{
    //     marginTop: 60,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //   }}>

    //   <Text style={{
    //     fontSize: 18,
    //     marginRight: 10
    //   }}>
    //     ?
    //   </Text>
    //   <TouchableOpacity onPress={() =>><Text style={{
    //       fontSize: 18,
    //       fontWeight: '600'
    //     }}>Inicia sesión</Text></TouchableOpacity>
    //   </View>

    // </View>
  );
};

export default Signup;
