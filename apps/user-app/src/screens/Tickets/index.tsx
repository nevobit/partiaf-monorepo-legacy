import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from "../../components/Layout/Header";
import { RootStackParamList } from "../../navigation/AppNavigator";
import QRCode from "react-native-qrcode-svg";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Tickets = ({ navigation }: Props) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View
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
          Codigos activos
        </Text>
        <ScrollView
          style={{
            marginTop: 15,
          }}
        >
          <View
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
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: 10,
                backgroundColor: "green",
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
            <TouchableOpacity style={{
              backgroundColor: 'rgba(0, 0, 0,0.1)',
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 5
            }}>
              <Text>Detalles</Text>
            </TouchableOpacity>
          </View>
          <View
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
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: 10,
                backgroundColor: "green",
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
            <TouchableOpacity style={{
              backgroundColor: 'rgba(0, 0, 0,0.1)',
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 5
            }}>
              <Text>Detalles</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>
    </View>
  );
};

export default Tickets;
