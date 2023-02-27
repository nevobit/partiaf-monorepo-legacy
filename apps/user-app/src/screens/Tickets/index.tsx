import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import Header from "../../components/Layout/Header";
import { RootStackParamList } from "../../navigation/AppNavigator";
import QRCode from "react-native-qrcode-svg";
import { GET_MY_TICKETS } from "../../graphql/queries/goers";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import Modal from 'react-native-modal';
import { DivisaFormater } from "../../utilities/divisaFormater";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Tickets = ({ navigation }: Props) => {
  const { user } = useSelector((state: any) => state.auth);

  const { data, loading, refetch } = useQuery(GET_MY_TICKETS, {
    variables: { uuid: user.uuid },
  });
  
  const [coverSelected, setCoverSelected] = useState<any>();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <ScrollView
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            color: "rgba(0,0,0,0.8)",
          }}
        >
          Codigos activos ({data?.getMyTikets?.length})
        </Text>
        <ScrollView
          style={{
            marginTop: 15,
            marginBottom: 50,
            height: '100%'
          }}
        >
          {data?.getMyTikets.map((ticket: any) => (
            <View
              key={ticket.uuid}
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
                position: "relative",
                overflow: "hidden",
                paddingLeft: 15,
                paddingRight: 15,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: 10,
                  backgroundColor: ticket.status == 'in line'? "rgba(0,0,0,.3)" : ticket.status== 'cancelled'? 'red': 'green',
                }}
              ></View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    marginRight: 10,
                  }}
                  source={{
                    uri: "https://i.postimg.cc/nr7G2hzm/qr-code-bc94057f452f4806af70fd34540f72ad.png",
                  }}
                />
                <View>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Nombre:</Text> Fiesta
                    Partiaf
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Fecha:</Text> 2023-02-14
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Hora:</Text> 12:40
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(0, 0, 0,0.1)",
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
                
                onPress={() => {setCoverSelected(ticket); setModal(true)} }
              >
                <Text>Detalles</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      
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
              <Image
                source={{ uri: coverSelected?.image }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: 'stretch'
                }}
              />
            </View>
            
            <View style={{
              padding: 10,
              paddingHorizontal: 20
            }} >
              <View>
                <Text style={{fontSize: 18}}><Text style={{fontWeight: '600'}}>Nombre:</Text> {coverSelected?.name}</Text>
                <Text style={{fontSize: 18}} ><Text style={{fontWeight: '600'}}>Cupos:</Text> {coverSelected?.amount}</Text>
                <Text style={{fontSize: 18}} ><Text style={{fontWeight: '600'}}>Precio:</Text> {DivisaFormater(coverSelected?.cost)}</Text>
                <Text style={{fontSize: 18}} ><Text style={{fontWeight: '600'}}>Descripcion:</Text> {coverSelected?.description}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Tickets;
