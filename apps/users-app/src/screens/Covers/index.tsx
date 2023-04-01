import React, { useState } from "react";
import {
  StatusBar,
  View as DefaultView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, SafeAreaView } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_COVERS } from "../../graphql/queries/covers";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_STORE } from "../../graphql/queries/stores/index";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { View } from "../../components/Layout/Theme";
import { useTheme } from "../../contexts/ThemeContext";
import colors from "../../components/Layout/Theme/colors";
import AntIcon from "react-native-vector-icons/AntDesign";
import ButtonOptionsDots from "../../components/Shared/ButtonOptionsDots";
import ModalStore from "../../components/Shared/ModalStore";

const Covers = ({ route, navigation }: any) => {
  const { theme } = useTheme();
  const { user } = useSelector((state: any) => state.auth);

  const {
    data: store,
    loading: loadingStore,
    error: errorStore,
  } = useQuery(GET_STORE, {
    variables: { uuid: route.params.store },
  });

  const { data, loading, error, refetch } = useQuery(GET_COVERS, {
    variables: { uuid: route.params.store },
  });

  const [modal, setModal] = useState(false);
  const [modalOptions, setModalOptions] = useState(false);

  const [amount, setAmount] = useState(0);
  const [coverSelected, setCoverSelected] = useState<any>({});
  const [coverSelectedPrev, setCoverSelectedPrev] = useState<any>({});

  const setPeopleHandler = async (cover: any) => {
    setCoverSelectedPrev(cover);

    const coverInfo = {
      store: route.params.store,
      storeName: store?.getStoreById?.name,
      user: user.uuid,
      status: "in line",
      cost: amount * Number(coverSelected.price),
      amount: amount,
      time: coverSelected.hour,
      date: coverSelected.date,
      phone: user.phone,
      image: coverSelected.image,
      description: coverSelected.description,
      cover: coverSelected.uuid,
      name: coverSelected.name,
    };

    await AsyncStorage.setItem("coverInfo", JSON.stringify(coverInfo));
  };

  const halfWindowsHeight = Dimensions.get("window").height;

  const setCoverState = async (type: string, cover: any) => {
    setCoverSelected(cover);

    if (type == "+") {
      if (coverSelectedPrev.uuid != cover.uuid) {
        if (coverSelected.limit > 0) {
          setAmount(1);
        }
      } else {
        if (coverSelected.limit > amount) {
          if (coverSelected.limit > 0) {
            setAmount((prev) => prev + 1);
          }
        }
      }
    } else {
      if (coverSelected.uuid != cover.uuid) {
        setCoverSelected({});
        setCoverSelectedPrev({});
        setAmount(0);
      } else {
        if (amount > 0) {
          setAmount((prev) => prev - 1);
        }
      }
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <View>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} />
      <DefaultView
        style={{
          width: "100%",
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}
      >
        <DefaultView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: colors[theme].text,
            }}
          >
            {store?.getStoreById?.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors[theme].text,
            }}
          >
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors[theme].holderColor,
            }}
          >
            {store?.getStoreById?.type}
          </Text>
          <Text
            style={{
              color: colors[theme].text,
            }}
          >
            {" "}
            <AntIcon
              name="star"
              style={{
                fontWeight: "100",
                fontSize: 16,
                color: colors[theme].primary,
              }}
            />
            4.24
          </Text>
        </DefaultView>
        <ButtonOptionsDots onPress={() => setModalOptions(true)} />
      </DefaultView>
      {loading ? <ActivityIndicator color={colors[theme].text} /> : null}
      <DefaultView
        style={{
          width: "100%",
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          flex: 1,
          height: 50
        }}
      >
        {data?.getCoversById?.length < 1 && (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              textAlign: "center",
              width: "100%",
              marginTop: 10,
              color: colors[theme].text,
            }}
          >
            No hay tickets
          </Text>
        )}
        
        <FlatList 
          data={data?.getCoversById}
            renderItem={({item: cover}) => (
              <TouchableOpacity
              key={cover.uuid}
              style={{
                marginBottom: 10,
                borderBottomColor: colors[theme].border,
                borderBottomWidth: 1,
                width: "100%",
              }}
              onPress={() => {
                setCoverSelected(cover);
                setModal(true);
              }}
            >
              <DefaultView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, color: colors[theme].text }}>
                  Cover{" "}
                  <Text
                    style={{ fontWeight: "600", color: colors[theme].text }}
                  >
                    {cover.type}{" "}
                  </Text>
                </Text>
                <Text>
                  {/* <Text
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 16,
                      textDecorationLine: "line-through",
                      marginRight: 5,
                    }}
                  >
                    {cover.price > 0 ? DivisaFormater(cover.price) : "GRATIS"}
                  </Text>{" "} */}
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 18,
                      color: colors[theme].text,
                    }}
                  >
                    {DivisaFormater(
                      Number(cover.price)
                    )}
                  </Text>
                </Text>
              </DefaultView>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: colors[theme].text,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    color: colors[theme].text,
                  }}
                >
                  {cover.name}
                </Text>{" "}
                {cover.description}
              </Text>
              <DefaultView
                style={{
                  marginTop: 15,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <DefaultView>
                  <Text style={{ fontSize: 14, color: colors[theme].text }}>
                    <Text style={{ fontWeight: "600" }}>Cupos:</Text>{" "}
                    {cover.limit}
                  </Text>
                  <Text style={{ fontSize: 14, color: colors[theme].text }}>
                    <Text style={{ fontWeight: "600" }}>Fecha:</Text>{" "}
                    {cover.date}
                  </Text>
                  <Text style={{ fontSize: 14, color: colors[theme].text }}>
                    <Text style={{ fontWeight: "600" }}>Hora:</Text>{" "}
                    {cover.hour}
                  </Text>
                </DefaultView>
                {cover.limit > 0 ? (
                  <DefaultView
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors[theme].holderColor,
                        borderRadius: 5,
                        padding: 3,
                      }}
                      onPressIn={() => setCoverState("-", cover)}
                      onPress={() => setPeopleHandler(cover)}
                    >
                      <Ionicons
                        name="ios-remove"
                        style={{ fontWeight: "100", fontSize: 26 }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        padding: 15,
                        fontSize: 18,
                        color: colors[theme].text,
                      }}
                    >
                      {coverSelected.uuid == cover.uuid ? amount : 0}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors[theme].holderColor,
                        borderRadius: 5,
                        padding: 3,
                      }}
                      onPressIn={() => setCoverState("+", cover)}
                      onPress={() => setPeopleHandler(cover)}
                    >
                      <Ionicons
                        name="ios-add"
                        style={{ fontWeight: "100", fontSize: 26 }}
                      />
                    </TouchableOpacity>
                  </DefaultView>
                ) : (
                  <DefaultView>
                    <Text
                      style={{
                        color: colors[theme].text,
                        fontWeight: "600",
                        fontSize: 24,
                      }}
                    >
                      LLENO
                    </Text>
                  </DefaultView>
                )}
              </DefaultView>
            </TouchableOpacity>
            )}
            style={{
              paddingBottom: 60
            }}
            keyExtractor={(item) => item.uuid}
        />
       
       {/* <Image source={{uri: cover.image}} 
              style={{
                width: 80,
                height: '100%',
                resizeMode: "contain"
              }}
              /> */}
           
      </DefaultView>
      {amount > 0 && (
        <DefaultView
          style={{
            position: "absolute",
            bottom: 25,
            left: 0,
            height: "8%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "86%",
              height: "90%",
              backgroundColor: "#FFE243",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                color: "rgba(0,0,0,0.8)",
                textTransform: "uppercase",
              }}
            >
              PAGAR
            </Text>
          </TouchableOpacity>
        </DefaultView>
      )}

      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="slideInUp"
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <SafeAreaView
          style={{
            backgroundColor: colors[theme].background,
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
                    style={{
                      fontWeight: "100",
                      fontSize: 26,
                      color: colors[theme].text,
                    }}
                  />
                </TouchableOpacity>

                <Image
                  source={{
                    uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png",
                  }}
                  style={{
                    marginLeft: 23,
                    marginTop: 4,
                    width: 120,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: colors[theme].text,
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
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  source={{ uri: coverSelected.image }}
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
                <DefaultView
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors[theme].text,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Nombre:</Text>{" "}
                    {coverSelected.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors[theme].text,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Fecha:</Text>{" "}
                    {coverSelected.date}
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors[theme].text,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Hora:</Text>{" "}
                    {coverSelected.hour}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors[theme].text,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Cupos:</Text>{" "}
                    {coverSelected.limit}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors[theme].text,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Precio:</Text>{" "}
                    {DivisaFormater(coverSelected.price)}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors[theme].text,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Descripcion:</Text>{" "}
                    {coverSelected.description}
                  </Text>
                </DefaultView>
              </DefaultView>
            </DefaultView>
          </DefaultView>
        </SafeAreaView>
      </Modal>

      <ModalStore
        name={data?.getStoreById?.name}
        phone={data?.getStoreById?.phone}
        modal={modalOptions}
        setModal={setModalOptions}
      />

      {/* 
      <ModalStore
        modal={modalOptions}
        setModal={setModalOptions}
        phone={data?.getStoreById?.phone}
      /> */}
    </View>
  );
};

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

export default Covers;
