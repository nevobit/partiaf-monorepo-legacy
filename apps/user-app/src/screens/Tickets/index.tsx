import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, TextInput, StatusBar, Platform } from "react-native";
import Header from "../../components/Layout/Header";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { GET_MY_TICKETS } from "../../graphql/queries/goers";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import Modal from 'react-native-modal';
import { DivisaFormater } from "../../utilities/divisaFormater";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native'
import { GET_MY_BOOKINGS } from "../../graphql/queries/bookings";
import QRCode from 'react-native-qrcode-svg';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Tickets = ({ navigation }: Props) => {
  const { user } = useSelector((state: any) => state.auth);

  const { data, loading, refetch } = useQuery(GET_MY_TICKETS, {
    variables: { uuid: user.uuid },
  });
  
  const {data: bookings, loading: loadingBookings, refetch: refetchBookings} = useQuery(GET_MY_BOOKINGS, {
    variables: { uuid: user.uuid },
  });
  
  const [coverSelected, setCoverSelected] = useState<any>();
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("tickets");

const halfWindowsHeight = Dimensions.get('window').height
  
const [openModalQr, setOpenModalQr] = useState(false);
  
let logo = require('../../assets/favicon.png')

useEffect(() => {
    refetch();
    refetchBookings();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: "#fff", marginTop: StatusBar.currentHeight, height: halfWindowsHeight }} >
      {Platform.OS == 'web' && <StatusBar hidden={false} backgroundColor={'#000'} /> }
      {Platform.OS == 'ios' && <StatusBar hidden={false} backgroundColor={'#000'} /> }
      <Header navigation={navigation} back={true} ticket={true} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginTop: 5,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 40,
            backgroundColor: "#EBEBEB",
            padding: 10,
            borderRadius: 10,
            width: '100%'
          }}
        >
          <Ionicons
            name="ios-search-outline"
            style={{
              fontSize: 18,
              opacity: 0.7,
              zIndex: 1,
              marginRight: 5,
            }}
          />

          <TextInput
            style={{
              borderRadius: 5,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              width: '100%'
            }}
            value={search}
            placeholder="Buscar"
            placeholderTextColor="#909090"
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            borderRadius: 50,
            height: 45,
            backgroundColor: "rgba(0,0,0,.05)",
            marginTop: 10,
            marginBottom: 10,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => setType("tickets")}
            style={{
              backgroundColor: type == "tickets" ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 50,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text style={{ textAlign: "center", paddingTop: 5, fontSize: 16 }}>
              Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType("bookings")}
            style={{
              backgroundColor: type == "bookings" ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 50,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text style={{ textAlign: "center", paddingTop: 5, fontSize: 16 }}>
              Reservas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
          Codigos activos ({type == 'tickets' && data?.getMyTikets?.filter((ticket:any) => ticket.name.toLowerCase().includes(search.toLowerCase())).length}{type == 'bookings' && 0})
        </Text>
        <ScrollView
          style={{
            marginTop: 15,
            marginBottom: 50,
            height: '100%'
          }}
        >
          {type == 'tickets' && data?.getMyTikets?.filter((ticket:any) => ticket.name.toLowerCase().includes(search.toLowerCase()) ).map((ticket: any) => (
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
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10
                }}
                onPress={() => {setCoverSelected(ticket); setOpenModalQr(true)}}
              >
                {/* <Image
                  style={{
                    width: 80,
                    height: 80,
                    marginRight: 10,
                  }}
                  source={{
                    uri: "https://i.postimg.cc/nr7G2hzm/qr-code-bc94057f452f4806af70fd34540f72ad.png",
                  }}
                /> */}
                 <QRCode
                 size={80}
                 logo={logo}
                 logoSize={25}
                 logoBackgroundColor="#000"
                 logoBorderRadius={50}
      value={JSON.stringify(ticket)}
    />
                <View style={{
                  marginLeft: 10
                }}>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Nombre:</Text> {ticket.name}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Fecha:</Text> {ticket.date}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Hora:</Text> {ticket.time}
                  </Text>
                </View>
              </TouchableOpacity>
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
          
          {type == 'bookings' && bookings?.getMyBookings?.filter((ticket:any) => ticket.name.toLowerCase().includes(search.toLowerCase()) ).map((ticket: any) => (
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
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => {setCoverSelected(ticket); setModal(true)} }
              >
                
                <QRCode
                 size={80}
                 logo={logo}
                 logoSize={25}
                 logoBackgroundColor="#000"
                 logoBorderRadius={50}
      value={JSON.stringify(ticket)}
    />
                <View>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Mesa:</Text> {ticket.table}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Fecha:</Text> {ticket.date.substring(0,10)}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "600" }}>Hora:</Text> {ticket.time}
                  </Text>
                </View>
              </TouchableOpacity>
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
      
      <Modal
        onSwipeComplete={() => setOpenModalQr(false)}
        animationIn="fadeIn"
        style={{
        }}
        isVisible={openModalQr}
        swipeDirection={["down"]}
        onBackdropPress={() => setOpenModalQr(false)}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 350,
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
           
           <View style={{
            padding: 15,
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
           }}>
            <TouchableOpacity onPress={() => setOpenModalQr(false)}>
                <Text><Ionicons name="ios-arrow-back-outline" style={{
                    fontSize: 40
                }} /></Text>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: '600'
            }}>Codigo QR</Text>
            
            <TouchableOpacity onPress={() => setModal(false)}>
                <Text><Ionicons name="ios-arrow-back-outline" style={{
                    fontSize: 40,
                    color: "white"
                }} /></Text>
            </TouchableOpacity>
           </View>
            <View style={{
              padding: 10,
              paddingHorizontal: 20
            }} >  
               <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width:'100%',
                  height:'100%'
                }}
                
              >
                 <QRCode
                  size={250}
                  logo={logo}
                  logoSize={150}
                  logoBackgroundColor="#000"
                  logoBorderRadius={50}
                  value={JSON.stringify(coverSelected)}
                  />
                <View>
                </View>
                  
                </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Tickets;
