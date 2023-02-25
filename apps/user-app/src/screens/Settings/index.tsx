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

const Settings = ({ route, navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);
  
    const [modal, setModal] = useState(false);
  return (
    <View style={{ backgroundColor: "#fff", position: "relative" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />
      <View style={{
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 20
      }}>
        
      <TouchableOpacity onPress={
              () => navigation.navigate("Wallet", { user: "" })
          }>
          </TouchableOpacity>
          <Text style={{
            fontSize: 26,
            fontWeight: '600'
          }}>Configuracion y privacidad</Text>
      </View>
         
      
      
      
    </View>
  );
};

export default Settings;
