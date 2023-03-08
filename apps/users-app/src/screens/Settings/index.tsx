import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View as DefaultView, Switch } from 'react-native';
import { useQuery } from "@apollo/client";
import { GET_COVERS } from "../../graphql/queries/covers";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_STORE } from "../../graphql/queries/stores/index";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signout } from "../../features/auth";
import { View } from "../../components/Layout/Theme";
import { useTheme } from "../../contexts/ThemeContext";
import colors from "../../components/Layout/Theme/colors";

const Settings = ({ route, navigation }: any) => {
  const {theme, updateTheme} = useTheme();
  const { user } = useSelector((state: any) => state.auth);
  
    const [modal, setModal] = useState(false);
    
    const dispatch = useDispatch();
    const exit = () => {
      dispatch(signout());
    };
    
    const whatsapp = async () => {
      try {
        Linking.openURL(`https://wa.link/13sfn0`,
        );
      } catch (error: any) {
        alert(error.message);
      }
    };
  return (
    <View>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} />
      <DefaultView style={{
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 20,
      }}>
        
      <TouchableOpacity onPress={
              () => navigation.navigate("Wallet", { user: "" })
          }>
          </TouchableOpacity>
          <Text style={{
            fontSize: 25,
            fontWeight: '600',
            marginTop: 20,
            color: colors[theme].text
          }}>Soporte y configuración</Text>
      </DefaultView>
      
      {/* <Text style={{
        fontSize: 16,
        marginTop: 10,
        padding: 20,
        fontWeight: '500',
        paddingBottom: 10,
        color: colors[theme].text
      }}>Cuenta</Text>
      <DefaultView style={{
        paddingHorizontal: 20,
        marginBottom: 10,
      }}>
        <DefaultView style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text style={{
            fontSize:18,
            fontWeight: '600',
            color: colors[theme].text
          }}>Tema oscuro</Text>
          <Switch value={theme== 'dark'? true: false} onChange={() => updateTheme('dark')} />
        </DefaultView>
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15
        }}
        ><Text style={{
          fontSize: 18,
          fontWeight: '600',
          color: colors[theme].text

        }}>Cuenta</Text></TouchableOpacity>
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15
        }}
        ><Text style={{
          fontSize: 18,
          fontWeight: '600',
          color: colors[theme].text

        }}>Privacidad</Text></TouchableOpacity>
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15,
        }}
        ><Text style={{
          fontSize: 18,
          fontWeight: '600',
          color: colors[theme].text
        }}>Seguridad</Text></TouchableOpacity>
        
      </DefaultView>
       */}
      
      <Text style={{
        fontSize: 16,
        padding: 20,
        fontWeight: '500',
        paddingBottom: 10,
        color: colors[theme].text
      }}>Soporte</Text>
      <DefaultView style={{
        paddingHorizontal: 20,
        marginBottom: 10,
      }}>
       
      
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15,
          flexDirection: 'row',
          gap: 5
        
        }}
        onPress={whatsapp}
        >
          <Ionicons style={{
          fontSize: 24,
          color: colors[theme].text
          
          }} name='logo-whatsapp' />
          <Text style={{
          fontSize: 18,
          fontWeight: '600',
          color: colors[theme].text
        }}>Whatsapp</Text></TouchableOpacity>
        
      </DefaultView>
      <Text style={{
        fontSize: 16,
        padding: 20,
        fontWeight: '500',
        paddingBottom: 10,
        color: colors[theme].text
      }}>Sesión</Text>
      <DefaultView style={{
        paddingHorizontal: 20,
        marginBottom: 10,
      }}>
       
      
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15
        }}
        onPress={exit}
        ><Text style={{
          fontSize: 18,
          fontWeight: '600',
          color: 'red'
        }}>Cerrar sesion</Text></TouchableOpacity>
        
      </DefaultView>
    
         
      
      
      
    </View>
  );
};

export default Settings;
