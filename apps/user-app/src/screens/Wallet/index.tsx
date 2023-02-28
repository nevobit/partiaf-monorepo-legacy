import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
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
import {Dimensions} from 'react-native';
import Button from "../../components/Shared/Button/Input";
import { mainColor } from "../../components/Layout/Theme/colors";
import { GET_MY_TICKETS } from "../../graphql/queries/goers";

const Wallet = ({ route, navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);
  
    const [modal, setModal] = useState(false);
const halfWindowsHeight = Dimensions.get('window').height
    

const { data, loading, refetch } = useQuery(GET_MY_TICKETS, {
  variables: { uuid: user.uuid },
});


useEffect(() => {
  refetch();
}, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", marginTop: StatusBar.currentHeight, height: halfWindowsHeight }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} wallet={true} />
      <View style={{
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 20
      }}>
        
      <TouchableOpacity onPress={
              () => navigation.navigate("Wallet", { user: "" })
          }
          style={
            {
              display: 'flex',
              flexDirection:'row',
              alignItems: 'center',
            }
          }
          >
          <Ionicons
            name={"ios-wallet-outline"}
            style={{ fontWeight: "100", fontSize: 26, marginRight: 10 }}
          />
          </TouchableOpacity>
          <Text style={{
            fontSize: 22,
            fontWeight: '600'
          }}>Cartera</Text>
      </View>
      
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
      }}>
      <Text style={{
            fontSize: 25,
            fontWeight: '500'
          }}>{DivisaFormater(user.balance)}</Text>
      
      <View style={{
        width: 100
      }}>
      <Button color={mainColor} text="Recargar" />        
      </View>
      </View>
      
      <View style={{
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginTop: 40,
      }}>
        
        <Text style={{
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 18,
          fontWeight: '500'
        }}>Historial</Text>
        
        <ScrollView>
        {data?.getMyTikets.map((ticket:any) => (
          <View 
          key={ticket.uuid}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            height: 40
          }}>
            
          <Text style={{fontSize: 16}}>{ticket.name}</Text>
          <Text style={{
            fontSize: 16
          }} >{DivisaFormater(ticket.cost)}</Text>
          </View>
          
        ))}
        </ScrollView>
      </View>
    
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
    </SafeAreaView>
  );
};

export default Wallet;
