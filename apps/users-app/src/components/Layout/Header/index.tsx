import React, { useEffect, useLayoutEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { RootStackParamList } from "../../../navigation/AppNavigator";
import { useTheme } from "../../../contexts/ThemeContext";
import colors from "../Theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
  openModal?: any;
  back?: boolean;
  wallet?: boolean;
  ticket?: boolean;
  load?: boolean;
};

const darkLogo = "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png";

const Header = ({
  navigation,
  openModal,
  back,
  wallet,
  ticket,
}: Props) => {
  const { theme } = useTheme();

  const [notification, setNotification] = useState([]);
  const loadCover = async () => {
    const data = await AsyncStorage.getItem("coverNotification");
    setNotification(JSON.parse(data || "[]"));
  };

  const removeCover = async () => {
    await AsyncStorage.removeItem("coverNotification");
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      loadCover();
    });
  }, [navigation, notification]);

  return (
    <View style={styles.header}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            style={{
              fontWeight: "100",
              fontSize: 23,
              color: colors[theme].text,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => openModal(true)}>
          <Ionicons
            name="ios-location-outline"
            style={{
              fontWeight: "100",
              fontSize: 23,
              color: colors[theme].text,
            }}
          />
        </TouchableOpacity>
      )}

      <Image
        source={{
          uri: darkLogo,
          cache: "only-if-cached",
        }}
        style={{
          marginLeft: back || wallet ? 0 : 28,
          marginTop: 4,
          width: 100,
          height: 20,
          resizeMode: "contain",
          tintColor: theme == "dark" ? "#f2f2f2" : "#333",
        }}
      />
      <View style={styles.header_left}>
        {!wallet ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("Wallet", { user: "" })}
          >
            <Ionicons
              name={"ios-wallet-outline"}
              style={{
                fontWeight: "100",
                fontSize: 23,
                color: colors[theme].text,
              }}
            />
          </TouchableOpacity>
        ) : null}

        {!ticket ? (
          <TouchableOpacity
            onPress={() => {
              removeCover();
              navigation.navigate("Tickets", { user: "", remove: true });
            }}
            style={{
              marginLeft: 10,
              position: "relative",
            }}
          >
            <Ionicons
              name={"ios-qr-code-outline"}
              style={{
                fontWeight: "100",
                fontSize: 23,
                color: colors[theme].text,
              }}
            />
            {notification.length > 0 ? (
              <View
                style={{
                  height: 18,
                  width: 18,
                  backgroundColor: "red",
                  borderRadius: 50,
                  position: "absolute",
                  top: -5,
                  right: -5,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  {notification.length}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Header;
