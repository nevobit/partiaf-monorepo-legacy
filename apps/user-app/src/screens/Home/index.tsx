import React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import Store from "../../components/Store";
import { useQuery } from "@apollo/client";
import { GET_STORES } from "../../graphql/queries/stores";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Layout/Header";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const { data, loading } = useQuery(GET_STORES);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />
      <ScrollView style={{ marginBottom: 50 }}>
        {data?.getAllStores?.map((store: IStore) => {
          return (
            <TouchableOpacity
              key={store.uuid}
              onPress={() =>
                navigation.navigate("Store", { store: store.uuid })
              }
            >
              <Store
                photos={store.photos}
                name={store.name}
                type={store.type}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

