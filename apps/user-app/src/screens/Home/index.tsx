import React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import Store from "../../components/Store";

const stores = [
  {
    uuid: "45g45-gr54g45-g4545",
    name: "Jenylao Club",
    type: "Disocteca",
    photos: [],
  },
  {
    uuid: "h5g45-nr54g45-o4545",
    name: "Mithnught Club",
    type: "Disocteca",
    photos: [],
  },
];

const Home = () => {
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

      <ScrollView>
        {stores.map((store: IStore) => {
          return (
            <View key={store.uuid}>
              <Store
                photos={store.photos}
                name={store.name}
                type={store.type}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

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
