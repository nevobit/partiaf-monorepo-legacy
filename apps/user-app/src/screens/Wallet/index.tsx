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

const Wallet = ({ route, navigation }: any) => {
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
          <Ionicons
            name={"ios-wallet-outline"}
            style={{ fontWeight: "100", fontSize: 26, marginRight: 10 }}
          />
          </TouchableOpacity>
          <Text style={{
            fontSize: 26,
            fontWeight: '600'
          }}>Cartera</Text>
      </View>
          <Text style={{
            padding: 20,
            fontSize: 25,
            fontWeight: '500'
          }}>{DivisaFormater(user.balance)}</Text>
      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="slideInUp"
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: "95%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
              position: "relative",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 600,
                padding: 0,
                backgroundColor: "#000",
                display: 'flex',
                flexDirection:'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
            </View>
            
            <View style={{
              padding: 10,
              paddingHorizontal: 20
            }} >
              <View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Wallet;
