import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View as DefaultView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_COVERS } from "../../graphql/queries/covers";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_STORE } from "../../graphql/queries/stores/index";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import {Dimensions} from 'react-native';
import { GET_MY_TICKETS } from "../../graphql/queries/goers";
import Button from "../../components/Shared/Button";
import { View } from "../../components/Layout/Theme";
import { useTheme } from "../../contexts/ThemeContext";
import colors from "../../components/Layout/Theme/colors";
import Ionic from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from "axios";
import Input from "../../components/Shared/Input";
import ButtonOptionsDots from "../../components/Shared/ButtonOptionsDots";
import * as WebBrowser from 'expo-web-browser';
import { GET_USER } from "../../graphql/queries/user";

const Wallet = ({ route, navigation }: any) => {
  const {theme} = useTheme();
  const { user } = useSelector((state: any) => state.auth);
  
  const [amount, setAmount] = useState('');
    
    const [modal, setModal] = useState(false);  

const { data, loading, refetch } = useQuery(GET_MY_TICKETS, {
  variables: { uuid: user.uuid },
});

const { data:userData } = useQuery(GET_USER, {
  variables: { uuid: user.uuid },
});

  const rechargeAccountWompi = async() => {
    const result = await WebBrowser.openBrowserAsync(`https://checkout.wompi.co/p/?public-key=pub_prod_HEeZTO0P2f9Kc8AK2pt3kqZx4MlV3ONP&amount-in-cents=${Number(amount) * 100}&reference=fgjhe${user.username}dnfsdfvefen3u${amount}4tn4iu3jng&currency=COP&customer-data-email=${user.username}&user-data-full-name=${user.firstname + ' ' + user.lastname}&user-data-phone-number=${user.phone}&redirect-url=https://partiaf.com`)
    console.log(result)
    // Linking.openURL(`https://checkout.wompi.co/p/?public-key=pub_prod_HEeZTO0P2f9Kc8AK2pt3kqZx4MlV3ONP&amount-in-cents=${Number(amount) * 100}&reference=fgjhe${user.username}dnfsdfvefen3u${amount}4tn4iu3jng&currency=COP&customer-data-email=${user.username}&user-data-full-name=${user.firstname + ' ' + user.lastname}&user-data-phone-number=${user.phone}`)
    
    // const {data} = await axios.get('https://checkout.wompi.co/p/', {
    //   params: {
    //     'amount-in-cents': Number(amount * 100),
    //     'reference': 'fgjhednfien3u4tn4iu3jng',
    //     'customer-data-email': user.username,
    //     'user-data-full-name': user.firstname + ' ' + user.lastname,
    //     'user-data-phone-number': user.phone,
    //   },
    //   headers: {
    //     'public-key': "pub_prod_rxioPTJAxHjcXVi5KvbCvKAfZYLTnbeH",
    //   }
    // })
  }
  
  const rechargeAccountMercadoPago = async() => {
    console.log("enter")
    
    Linking.openURL(`https://prooving-api-production-ac13.up.railway.app/api/v1/mercadopago?title=Recarga Partiaf&price=${Number(amount)}`)
    
    // const {data} = await axios.get('https://checkout.wompi.co/p/', {
    //   params: {
    //     'amount-in-cents': Number(amount * 100),
    //     'reference': 'fgjhednfien3u4tn4iu3jng',
    //     'customer-data-email': user.username,
    //     'user-data-full-name': user.firstname + ' ' + user.lastname,
    //     'user-data-phone-number': user.phone,
    //   },
    //   headers: {
    //     'public-key': "pub_prod_rxioPTJAxHjcXVi5KvbCvKAfZYLTnbeH",
    //   }
    // })
  }


useEffect(() => {
  refetch();
}, []);
  return (
    <View>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} wallet={true} />
      <DefaultView style={{
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10
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
            style={{ fontWeight: "100", fontSize: 22, marginRight: 10, color: colors[theme].text }}
          />
          </TouchableOpacity>
          <Text style={{
            fontSize: 18,
            fontWeight: '600',
            color: colors[theme].text
          }}>Cartera</Text>
      </DefaultView>
      
      <DefaultView style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
      }}>
      <Text style={{
            fontSize: 22,
            fontWeight: '500',
            color: colors[theme].text
          }}>{DivisaFormater(userData?.userById.balance)}</Text>
      
      <DefaultView style={{
        // width: 100
      }}>
      <Button text="Recargar" onPress={() => setModal(true)} textStyle={{
        fontSize: 14
      }} />        
      </DefaultView>
      </DefaultView>
      
      <DefaultView style={{
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginTop: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
      }}>
           <Ionic name="history"style={{
          fontSize: 22,
          marginRight: 10
        }}  color={colors[theme].text} />
        <Text style={{
          fontSize: 18,
          fontWeight: '500',
          color: colors[theme].text
        }}>
          Historial</Text>
        
      </DefaultView>
    <DefaultView>
      {loading && <ActivityIndicator color="#fff" />}
    <ScrollView>
        {data?.getMyTikets.map((ticket:any) => (
          <DefaultView 
          key={ticket.uuid}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            height: 40
          }}>
            
          <Text style={{fontSize: 14, color: colors[theme].text}}>{ticket.name}</Text>
          <Text style={{
            fontSize: 14,
            color: colors[theme].text
          }} >- {DivisaFormater(ticket.cost)}</Text>
          </DefaultView>
          
        ))}
        </ScrollView>
    </DefaultView>
      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="fadeIn"
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <DefaultView
          style={{
            height: 220,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
            backgroundColor: colors[theme].modal
          }}
        >
           <TouchableOpacity style={{
                                    position: 'absolute',
                                    top: 10,
                                    left: 10
            }} onPress={() => setModal(false)}>
                <Text>
                  <Ionicons
                    name="ios-arrow-back-outline"
                    style={{
                      fontSize: 30,
                      color: colors[theme].text,
                    }}
                  />
                </Text>
              </TouchableOpacity>
          
          <Text style={{
            fontSize: 18,
            marginTop: 55,
            fontWeight: '600',
            color: colors[theme].text
          }}>Valor a recargar</Text>
          <DefaultView
            style={{
              width: "100%",
              height: "100%",
              padding: 10,
              position: "relative",
              marginTop: 10
            }}
          >
           
            <Input keyboardType="number-pad" placeholder="Ingresa una cantidad" placeholderTextColor={colors[theme].holderColor} style={{
              color: colors[theme].text
            }} onChangeText={(text) => setAmount(text)} />
              <Button onPress={rechargeAccountWompi} textStyle={{
                fontSize: 18,
              }} style={{
                marginTop: 10
              }} text="Continuar" />
         
          </DefaultView>
        </DefaultView>
      </Modal>
    </View>
  );
};

export default Wallet;
