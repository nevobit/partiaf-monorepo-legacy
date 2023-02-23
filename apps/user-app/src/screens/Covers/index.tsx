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
import { GET_COVERS } from "../../graphql/queries/covers";

const Covers = ({ route }: any) => {
  const { data, loading, error } = useQuery(GET_COVERS, {
    variables: { uuid: route.params.store },
  });

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <View style={styles.header}>
        <Ionicons
          name="ios-options-outline"
          style={{ fontWeight: "100", fontSize: 26 }}
        />
        <Image
          source={{ uri: "https://i.postimg.cc/DZL8VnL4/partiaf-single.png" }}
          style={{
            marginLeft: 23,
            marginTop: 4,
            width: 120,
            height: 20,
            resizeMode: "contain",
          }}
        />
        <View style={styles.header_left}>
          <Ionicons
            name={"ios-wallet-outline"}
            style={{ fontWeight: "100", fontSize: 23, marginRight: 10 }}
          />
          <TouchableOpacity>
            <Ionicons
              name={"ios-qr-code-outline"}
              style={{ fontWeight: "100", fontSize: 23 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          display: "flex",

          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {data?.getCoversById?.map((cover: any) => {
          return (
            <TouchableOpacity
              key={cover.uuid}
              style={{
                marginBottom: 30,
                borderBottomColor: "rgba(0,0,0,0.1)",
                borderBottomWidth: 1,
                width: "100%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 22 }}>
                  Cover <Text style={{ fontWeight: "600" }}>{cover.type} </Text>
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                  {cover.price > 0 ? cover.price : "GRATIS"}
                </Text>
              </View>
              <Text style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "600" }}>{cover.name}</Text>{" "}
                {cover.description}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Covers;

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
