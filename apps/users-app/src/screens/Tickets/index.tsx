import { StackNavigationProp } from "@react-navigation/stack";
import React, { useMemo, useEffect, useState } from "react";
import {
  View as DefaultView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Header from "../../components/Layout/Header";
import { RootStackParamList } from "../../navigation/AppNavigator";
import Modal from "react-native-modal";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from 'react-native';
import QRCode from "react-native-qrcode-svg";
import { View } from "../../components/Layout/Theme";
import { useTheme } from "../../contexts/ThemeContext";
import colors from "../../components/Layout/Theme/colors";
import Select from "../../components/Tickets/Select";
import TicketsSection from './Tickets'
import Bookings from "./Bookings";

const logo = require("../../assets/favicon.png");
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route?: any;
};


const Tickets = ({ navigation }: Props) => {
  const { theme } = useTheme();

  const [coverSelected, setCoverSelected] = useState<any>();
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [type, setType] = useState(true);

  console.log({coverSelected})
  const halfWindowsHeight = Dimensions.get("window").height;

  const [openModalQr, setOpenModalQr] = useState(false);

  const ticket = useMemo(() => <TicketsSection search={search} setOpenModalQr={setOpenModalQr} setModal={setModal} setCoverSelected={setCoverSelected} />, [] )
  const booking = useMemo(() => <Bookings search={search} setOpenModalQr={setOpenModalQr} setModal={setModal} setCoverSelected={setCoverSelected} />, [] )
  
  return (
    <View>
      <Header navigation={navigation} back={true} ticket={true} />
      <DefaultView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginTop: 5,
          width: "100%",
        }}
      >
        <DefaultView
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 40,
            backgroundColor: theme == "dark" ? "rgba(255,255,255,0.1)" : "",
            padding: 10,
            borderRadius: 10,
            width: "100%",
          }}
        >
          <Ionicons
            name="ios-search-outline"
            style={{
              fontSize: 18,
              opacity: 0.7,
              zIndex: 1,
              marginRight: 5,
              color: colors[theme].text,
            }}
          />

          <TextInput
            style={{
              borderRadius: 5,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              width: "100%",
              color: colors[theme].text,
            }}
            value={search}
            placeholder="Buscar"
            placeholderTextColor="#909090"
            onChangeText={(text) => setSearch(text)}
          />
        </DefaultView>
      </DefaultView>

      <Select theme={theme} type={type} setType={setType} />
      {type ? (
        <DefaultView>
          {ticket}
        </DefaultView>
      ): (
        <DefaultView>
          {booking}
        </DefaultView>
        
      )}
      {/* <Text
        style={{
          fontWeight: "600",
          fontSize: 16,
          paddingHorizontal: 15,
          marginTop: 10,
          color: colors[theme].text,
        }}
      >
        Codigos activos (
          {loading || loadingBookings ? <ActivityIndicator /> : (
           <Text>
           {type == "tickets" && tickets?.length } {type == "bookings" && filteredBookings().length}            
           </Text> 
          )}
           
           )
      </Text> */}
      
      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="slideInUp"
        style={{
          margin: 0,
        }}
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <SafeAreaView
          style={{
            backgroundColor: colors[theme].modal,
            position: "relative",
            height: halfWindowsHeight,
          }}
        >
          <DefaultView
            style={{
              backgroundColor: colors[theme].background,
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderColor: "rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <DefaultView
              style={{
                width: "100%",
                height: "100%",
                padding: 0,
                position: "relative",
              }}
            >
              <DefaultView style={styles.header}>
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Ionicons
                    name="ios-arrow-back"
                    style={{ fontWeight: "100", fontSize: 26, color: colors[theme].text }}
                  />
                </TouchableOpacity>

                <Image
                  source={{
                    uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png",
                  }}
                  style={{
                    marginTop: 4,
                    width: 100,
                    marginRight: 10,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: colors[theme].text
                  }}
                />
                <DefaultView style={styles.header_left}>
                  <TouchableOpacity></TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      marginLeft: 10,
                    }}
                  ></TouchableOpacity>
                </DefaultView>
              </DefaultView>
              <DefaultView
                style={{
                  width: "100%",
                  height: 300,
                  padding: 0,
                  backgroundColor: "#000",
                  display: "flex",
                  overflow: "hidden",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  source={{ uri: coverSelected?.image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </DefaultView>

              <DefaultView
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                }}
              >
                <DefaultView>
                  <Text style={{ fontSize: 16, color: colors[theme].text, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "600", color: colors[theme].text }}>Nombre:</Text>{" "}
                    {coverSelected?.name}
                  </Text>
                  <Text style={{ fontSize: 16, color: colors[theme].text, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "600", color: colors[theme].text }}>Fecha:</Text>{" "}
                    {coverSelected?.date}
                  </Text>
                  <Text style={{ fontSize: 16, color: colors[theme].text, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "600", color: colors[theme].text }}>Hora:</Text>{" "}
                    {coverSelected?.time}
                  </Text>
                  <Text style={{ fontSize: 16, color: colors[theme].text, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "600", color: colors[theme].text }}>Cupos:</Text>{" "}
                    {coverSelected?.amount}
                  </Text>
                  <Text style={{ fontSize: 16, color: colors[theme].text, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "600", color: colors[theme].text }}>Precio:</Text>{" "}
                    {DivisaFormater(coverSelected?.cost)}
                  </Text>
                  <Text style={{ fontSize: 16, color: colors[theme].text, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "600", color: colors[theme].text }}>Descripcion:</Text>{" "}
                    {coverSelected?.description}
                  </Text>
                </DefaultView>
              </DefaultView>
            </DefaultView>
          </DefaultView>
        </SafeAreaView>
      </Modal>

      <Modal
        onSwipeComplete={() => setOpenModalQr(false)}
        animationIn="fadeIn"
        style={{}}
        isVisible={openModalQr}
        swipeDirection={["down"]}
        onBackdropPress={() => setOpenModalQr(false)}
      >
        <DefaultView
          style={{
            backgroundColor: colors[theme].modal,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <DefaultView
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
              position: "relative",
            }}
          >
            <DefaultView
              style={{
                padding: 15,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => setOpenModalQr(false)}>
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
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: colors[theme].text,
                }}
              >
                Codigo QR
              </Text>

              <TouchableOpacity onPress={() => setModal(false)}>
                <Text>
                  <Ionicons
                    name="ios-arrow-back-outline"
                    style={{
                      fontSize: 40,
                      color: colors[theme].modal,
                    }}
                  />
                </Text>
              </TouchableOpacity>
            </DefaultView>
            <DefaultView
              style={{
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <DefaultView
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 200,
                  marginTop: 50
                }}
              >
                <QRCode
                  size={220}
                  // backgroundColor={colors[theme].modal}

                  value={JSON.stringify(coverSelected)}
                />
              </DefaultView>
              
              <DefaultView>
                  <Text style={{
                    color: colors[theme].text,
                    fontWeight: '600',
                    fontSize: 20,
                    marginTop: 30,
                    textAlign: "left"
                  }}>{coverSelected?.name}</Text>
                </DefaultView>
                <DefaultView style={{
                flexDirection: 'row',
                alignItems: "center",
                marginTop: 20
              }}>
                <Ionicons name="calendar-outline" style={{
                  color: colors[theme].text,
                  fontSize: 24
                }} />
                <Text style={{
                    color: colors[theme].text,
                    marginLeft: 10
                }}>{coverSelected?.date}</Text>
              </DefaultView>
              <DefaultView style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'flex-start',
                marginTop: 10
                
              }}>
                <Ionicons name="time-outline" style={{
                  color: colors[theme].text,
                  fontSize: 24,
                }} />
                <Text style={{
                    color: colors[theme].text,
                    marginLeft: 10
                }}>{coverSelected?.time}</Text>
              </DefaultView>
              {coverSelected?.cost && (
                
              <DefaultView style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'flex-start',
                marginTop: 10
                
              }}>
                <Ionicons name="cash-outline" style={{
                  color: colors[theme].text,
                  fontSize: 24,
                }} />
                <Text style={{
                    color: colors[theme].text,
                    marginLeft: 10
                }}>{DivisaFormater(coverSelected?.cost)}</Text>
              </DefaultView>
              )}
              {coverSelected?.chairs && (
                
                <DefaultView style={{
                  flexDirection: 'row',
                  alignItems: "center",
                  justifyContent: 'flex-start',
                  marginTop: 10
                  
                }}>
                  <Ionicons name="people-outline" style={{
                    color: colors[theme].text,
                    fontSize: 24,
                  }} />
                  <Text style={{
                      color: colors[theme].text,
                      marginLeft: 10
                  }}>{coverSelected.chairs}</Text>
                </DefaultView>
                )}
                 {coverSelected?.table && (
                
                <DefaultView style={{
                  flexDirection: 'row',
                  alignItems: "center",
                  justifyContent: 'flex-start',
                  marginTop: 10
                  
                }}>
                  <Ionicons name="tablet-landscape-outline" style={{
                    color: colors[theme].text,
                    fontSize: 24,
                  }} />
                  <Text style={{
                      color: colors[theme].text,
                      marginLeft: 10
                  }}>Mesa #{coverSelected.table}</Text>
                </DefaultView>
                )}
              
              
            </DefaultView>
          </DefaultView>
        </DefaultView>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 10
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Tickets;
