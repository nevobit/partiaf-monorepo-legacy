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

const Store = ({ route }: any) => {
  const { data, loading, error } = useQuery(GET_STORE, {
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
      <Image
        source={{ uri: data?.getStoreById.photos[0] }}
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
          flexDirection: 'row',
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{fontSize: 20, fontWeight: '700'}}>{data?.getStoreById.name}</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}} >Santa Marta, Colombia</Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'rgba(0,0,0,0.7)'}}>{data?.getStoreById.type}</Text>
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
                margin: 3
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>

      <View>

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
