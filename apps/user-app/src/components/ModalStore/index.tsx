import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Share,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import {A} from "@expo/html-elements"
import { Linking } from 'react-native';
import { IStore } from "../../types";

const ModalStore = ({ name, phone, modal, setModal }: any) => {

  const shareStore = async () => {
    try {
      await Share.share({
        message: `En partiaf ${name} https://partiaf.com`,
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <Modal
    onSwipeStart={() => setModal(false)}
    style={{
      justifyContent: "flex-end",
      margin: 0,
    }}
    animationOut="slideOutDown"
    isVisible={modal}
    swipeDirection={["down"]}
    onBackButtonPress={() => setModal(false)}
    onBackdropPress={() => setModal(false)}
  >
    <View
      style={{
        backgroundColor: "#fff",
        height: 400,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderColor: "rgba(0,0,0,0.1)",
        position: "relative",
        padding: 20,
        paddingBottom: 10
      }}
    >
      <View style={{
        position: 'absolute',
        top: 15,
        left: '45%',
        width: 40,
        height: 8,
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: 50
      }}>
        
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
           <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/57${phone}`)} style={{
            height: 50
          }}>
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="logo-whatsapp"
            />{" "}
            Whatsapp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`https://goo.gl/maps/gtko7vCmR1dBhLWNA`)} style={{
            height: 50
          }}>
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="ios-location-outline"
            />{" "}
            Ubicación
          </Text>
        </TouchableOpacity>
          <TouchableOpacity style={{
            height: 50
          }}>
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="ios-star-outline"
            />{" "}
            Agregar a favoritos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height: 50
          }}>
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="ios-information-circle-outline"
            />{" "}
            Porque estoy viendo este negocio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height: 50
          }}>
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="eye-off-outline"
            />{" "}
            Ocultar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height: 50
          }}>
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: 'red'
            }}
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="warning-outline"
            />{" "}
            Reportar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height: 50
          }}
          onPress={() => setModal(false)}
          >
          <Text
            style={{
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            
          >
            <Ionicons
              style={{
                fontSize: 25,
                marginRight: 5
              }}
              name="ios-exit-outline"
            />{" "}
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>  
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tabItem: {
    width: 60,
  },
  tabBarText: {
    fonstSize: 10,
    fontWeight: "700",
  },
  actionsButton: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 21,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
    width: 100,
    height: 70,
    marginTop: -19,
    marginRight: -19,
    paddingRight: 20
  },
  dot: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 3,
    width: 3,
    borderRadius: 50,
    marginBottom: 4,
  },
});

export default ModalStore;
