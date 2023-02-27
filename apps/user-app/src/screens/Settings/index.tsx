import React, { useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_COVERS } from "../../graphql/queries/covers";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_STORE } from "../../graphql/queries/stores/index";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signout } from "../../features/auth";

const Settings = ({ route, navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);
  
    const [modal, setModal] = useState(false);
    
    const dispatch = useDispatch();
    const exit = () => {
      dispatch(signout());
    };
  return (
    <View style={{ backgroundColor: "#fff", position: "relative" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />
      <View style={{
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
            
          }}>Configuracion y privacidad</Text>
      </View>
      
      <Text style={{
        fontSize: 18,
        marginTop: 10,
        padding: 20,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.6)',
        paddingBottom: 10,
        backgroundColor: "#f2f2f2"
      }}>Cuenta</Text>
      <View style={{
        paddingHorizontal: 20,
        marginBottom: 10,
      }}>
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15
        }}
        ><Text style={{
          fontSize: 20,
          fontWeight: '600'
        }}>Cuenta</Text></TouchableOpacity>
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15
        }}
        ><Text style={{
          fontSize: 20,
          fontWeight: '600'
        }}>Privacidad</Text></TouchableOpacity>
        <TouchableOpacity
        style={{
          height: 50,
          paddingVertical: 15
        }}
        ><Text style={{
          fontSize: 20,
          fontWeight: '600'
        }}>Seguridad</Text></TouchableOpacity>
        
      </View>
      
      
      <Text style={{
        fontSize: 18,
        marginTop: 10,
        padding: 20,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.6)',
        paddingBottom: 10,
        backgroundColor: "#f2f2f2"
      }}>Sesion</Text>
      <View style={{
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
          fontSize: 20,
          fontWeight: '600'
        }}>Cerrar sesion</Text></TouchableOpacity>
        
      </View>
    
         
      
      
      
    </View>
  );
};

export default Settings;
