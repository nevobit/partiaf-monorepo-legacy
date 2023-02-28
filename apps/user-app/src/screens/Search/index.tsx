import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { GET_STORES } from "../../graphql/queries/stores";
import { Ionicons } from "@expo/vector-icons";
import { GET_USERS } from "../../graphql/queries/user";
import { Dimensions } from 'react-native'

const Search = ({ navigation }: any) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("users");

  const { data, loading, refetch } = useQuery(GET_USERS);
  const {
    data: stores,
    loading: loadingStores,
    refetch: refetchStores,
  } = useQuery(GET_STORES);
  const halfWindowsHeight = Dimensions.get('window').height

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", marginTop: StatusBar.currentHeight, height: halfWindowsHeight }} >
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={{
          marginRight: 5
        }}>
          <Ionicons
            name="ios-arrow-back"
            style={{ fontWeight: "100", fontSize: 26 }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 40,
            backgroundColor: "#EBEBEB",
            padding: 10,
            borderRadius: 10,
            width: '90%'
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
            marginTop: 15,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => setType("users")}
            style={{
              backgroundColor: type == "users" ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 50,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text style={{ textAlign: "center", paddingTop: 5, fontSize: 16 }}>
              Usuarios
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType("stores")}
            style={{
              backgroundColor: type == "stores" ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 50,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text style={{ textAlign: "center", paddingTop: 5, fontSize: 16 }}>
              Establecimientos
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {search.length == 0 && type == "users" ? (
        <View
          style={{
            display: "flex",
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>No hay busquedas.</Text>
        </View>
      ) : null}

      {type == "users" ? (
        <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        >
          {search.length > 0 &&
            data?.allUsers
              ?.filter(
                (user: any) =>
                  user.username.toLowerCase().includes(search.toLowerCase()) ||
                  user?.firstname?.toLowerCase().includes(search.toLowerCase())
              )
              .map((user: any) => {
                return (
                  <TouchableOpacity
                    key={user.uuid}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                    onPress={() =>
                      navigation.navigate("OtherProfile", { uuid: user.uuid })
                    }
                  >
                    <View
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 50,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 50,
                          resizeMode: "cover",
                        }}
                        source={{
                          uri: user.photo[0]
                            ? user.photo[0]
                            : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 16,
                      }}
                    >
                      {user.username}
                    </Text>
                  </TouchableOpacity>
                );
              })}
        </ScrollView>
      ) : (
        <ScrollView
        style={{
          paddingBottom: 30,
          paddingTop: 10,
          paddingHorizontal: 20
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        >
          {stores?.getAllStores
            ?.filter((user: any) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((user: any) => {
              return (
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                  key={user.uuid}
                  onPress={() =>
                    navigation.navigate("Store", { store: user.uuid })
                  }
                >
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 50,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                        resizeMode: "cover",
                      }}
                      source={{
                        uri: user.photos[0]
                          ? user.photos[0]
                          : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 16,
                      }}
                    >
                      {user.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                      }}
                    >
                      {user.type}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Search;
