import React from "react";
import { View } from "../../components/Layout/Theme";
import {
  ActivityIndicator,
  View as DefaultView,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries/user";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../contexts/ThemeContext";
import Input from "../../components/Shared/Input";
import colors from "../../components/Layout/Theme/colors";
import { GET_STORES } from "../../graphql/queries/stores";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const Search = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("users");
  const { data, loading } = useQuery(GET_USERS);
  const {
    data: stores,
    loading: loadingStores,
    refetch: refetchStores,
  } = useQuery(GET_STORES);

  const [loadingRecent, setLoadingRecent] = useState(false);

  const [recentUsers, setRecentUsers] = useState<any[]>([]);

  const loadUsers = async () => {
    // setLoadingRecent(true);
    // const data = await AsyncStorage.getItem("recentUsers");
    // const json = JSON.parse(data || "");
    // setRecentUsers(json);
    // setLoadingRecent(false);
  };

  console.log("RECENT_USER", recentUsers);
  const saveUser = async (user: any) => {
    // await AsyncStorage.removeItem('recentUsers')
    // const users = await AsyncStorage.getItem("recentUsers");

    // let data = JSON.parse(users || "[]") || [];
    // console.log({data})
    // const exist = data.filter((recent: any) => recent.uuid == user.uuid);
    // console.log(exist)
    // data.push(user);
    // await AsyncStorage.setItem("recentUsers", JSON.stringify(data));
  };

  useEffect(() => {
    // loadUsers();
  }, []);

  return (
    <View>
      <DefaultView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginTop: 5,
          width: "100%",
          height: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginRight: 5,
          }}
        >
          <Ionicons
            name="ios-arrow-back"
            color={colors[theme].text}
            style={{ fontWeight: "100", fontSize: 26 }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 40,
            backgroundColor: theme == "dark" ? "rgba(255,255,255,0.1)" : "",
            padding: 10,
            borderRadius: 10,
            width: "90%",
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
              fontSize: 14,
              width: "100%",
              color: colors[theme].text,
            }}
            value={search}
            placeholder="Buscar"
            placeholderTextColor="#909090"
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </DefaultView>

      <DefaultView
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          height: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            borderRadius: 10,
            // height: 45,
            backgroundColor: "rgba(255,255,255,.1)",
            marginTop: 15,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginHorizontal: 5,
            paddingHorizontal: 5
          }}
        >
          <TouchableOpacity
            onPress={() => setType("users")}
            style={{
              backgroundColor: type == "users" ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 10,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text
              style={{
                color: type == "users" ? "#333" : "#fff",
                textAlign: "center",
                paddingTop: 5,
                fontSize: 14,
              }}
            >
              Usuarios
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType("stores")}
            style={{
              backgroundColor: type == "stores" ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 10,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text
              style={{
                color: type == "stores" ? "#333" : "#fff",
                textAlign: "center",
                paddingTop: 5,
                fontSize: 14,
              }}
            >
              Establecimientos
            </Text>
          </TouchableOpacity>
        </View>
      </DefaultView>

      {loadingStores ||
        (loading && (
          <ActivityIndicator
            style={{
              marginTop: 50,
            }}
            size="large"
            color={colors[theme].text}
          />
        ))}

      {type == "users" && recentUsers?.length > 0 && search.length == 0 && (
        <DefaultView>
          <Text
            style={{
              marginTop: 15,
              paddingHorizontal: 20,
              fontWeight: "600",
              color: colors[theme].text,
            }}
          >
            Recientes
          </Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={{
              paddingBottom: 30,
              paddingTop: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}
          >
            {!loadingRecent &&
              recentUsers?.map((user: any) => {
                return (
                  <TouchableOpacity
                    key={user.uuid}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                    onPress={() => {
                      saveUser(user);
                      navigation.navigate("OtherProfile", { uuid: user.uuid });
                    }}
                  >
                    <DefaultView
                      style={{
                        height: 50,
                        width: 50,
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
                    </DefaultView>
                    <DefaultView
                      style={{
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 14,
                          color: colors[theme].text,
                        }}
                      >
                        {user.username}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors[theme].holderColor,
                        }}
                      >
                        {user.firstname} {user.lastname}
                      </Text>
                    </DefaultView>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </DefaultView>
      )}

      {recentUsers.length == 0 && search.length == 0 && type == "users" ? (
        <DefaultView
          style={{
            display: "flex",
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: colors[theme].text }}>
            No hay busquedas.
          </Text>
        </DefaultView>
      ) : null}

      {type == "users" ? (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{
            paddingBottom: 30,
            paddingTop: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
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
                    onPress={() => {
                      saveUser(user);
                      navigation.navigate("OtherProfile", { uuid: user.uuid });
                    }}
                  >
                    <View
                      style={{
                        height: 50,
                        width: 50,
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
                    <View
                      style={{
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 14,
                          color: colors[theme].text,
                        }}
                      >
                        {user.username}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors[theme].holderColor,
                        }}
                      >
                        {user.firstname} {user.lastname}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
        </ScrollView>
      ) : (
        <ScrollView
          style={{
            marginTop: 10,
            paddingBottom: 30,
            paddingTop: 10,
            paddingHorizontal: 20,
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
                    marginBottom: 5,
                    width: "100%",
                    height: 60,
                  }}
                  key={user.uuid}
                  onPress={() =>
                    navigation.navigate("Store", { store: user.uuid })
                  }
                >
                  <DefaultView
                    style={{
                      height: 50,
                      width: 50,
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
                  </DefaultView>
                  <DefaultView
                    style={{
                      height: 50,
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 14,
                        color: colors[theme].text,
                      }}
                    >
                      {user.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors[theme].holderColor,
                      }}
                    >
                      {user.type}
                    </Text>
                  </DefaultView>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      )}
    </View>
  );
};

export default Search;
