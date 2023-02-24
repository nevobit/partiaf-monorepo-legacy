import React from "react";
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
import { GET_STORE } from "../../graphql/queries/stores";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import Header from "../../components/Layout/Header";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  route: any;
  navigation: HomeScreenNavigationProp;
};

const Store = ({ route, navigation }: Props) => {
  const { data, loading, error } = useQuery(GET_STORE, {
    variables: { uuid: route.params.store },
  });

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />
      
      
      <Image
        source={{ uri: data?.getStoreById?.photos[0] }}
        style={{
          width: "100%",
          height: 250,
        }}
      />

      <View
        style={{
          width: "100%",
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            {data?.getStoreById?.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            {data?.getStoreById?.type}
          </Text>
          <Text>
            {" "}
            <Ionicons
              name="ios-star-outline"
              style={{ fontWeight: "100", fontSize: 16 }}
            />
            4.24
          </Text>
        </View>
        <TouchableOpacity>
          <View style={{ display: "flex" }}>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.7)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "rgba(0, 0, 0,.03)",
            borderBottomWidth: 1,
            padding: 10,
            paddingHorizontal: 20,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Covers", { store: route.params.store })
            }
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://i.postimg.cc/SN7Jyd4b/covers-disco.png" }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://i.postimg.cc/xjP284X5/menu-disco.png" }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Reservas
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://i.postimg.cc/mrcLFNvD/reserva-disco.png",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Menu
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
  },
});
