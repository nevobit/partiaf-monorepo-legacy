import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View as DefaultView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, SafeAreaView } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import Modal from "react-native-modal";
import { GET_STORE } from "../../../graphql/queries/stores";
import Header from "../../../components/Layout/Header";
import { DivisaFormater } from "../../../utilities/divisaFormater";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CREATE_GOER } from "../../../graphql/queries/goers";
import {
  GET_USER_BALANCE,
  UPDATE_USER_PIN,
} from "../../../graphql/queries/user";
import { Dimensions } from "react-native";
import { View } from "../../../components/Layout/Theme";
import { useTheme } from "../../../contexts/ThemeContext";
import colors from "../../../components/Layout/Theme/colors";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";

const Payment = ({ route, navigation }: any) => {
  const { theme } = useTheme();
  const { user } = useSelector((state: any) => state.auth);

  const {
    data: userBalance,
    loading,
    error,
    refetch,
  } = useQuery(GET_USER_BALANCE, {
    variables: { uuid: user.uuid },
  });

  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");

  const [coverInfo, setCoverInfo] = useState<any>({});

  // userById
  const getInfo = async () => {
    const coverInfoHandler = await AsyncStorage.getItem("coverInfo");
    setCoverInfo(JSON.parse(coverInfoHandler || ""));
  };
  
  // const saveCover = async() => {
  //   await AsyncStorage.setItem("coverNotification", JSON.stringify(coverInfo.cover));
  // }

   const saveCover = async() => {
     const cover =await AsyncStorage.getItem("coverNotification")
     let data = JSON.parse(cover || "[]") || []
     data.push(coverInfo.cover)
     await AsyncStorage.setItem("coverNotification", JSON.stringify(data));
   }
  const [createComment] = useMutation(CREATE_GOER);
  const [updateUser] = useMutation(UPDATE_USER_PIN);

  const [info, setInfo] = useState<any>();
  const createGoerHandler = async () => {
    try {
      // if (code != userBalance?.userById.pin) {
      //   Alert.alert("Pin incorrecto", "Porfavor intentalo nuevamente");
      //   alert(
      //     "Pin incorrecto, Porfavor intentalo nuevamente"
      //   );
      //   return;
      // }
      // setModal(false);
      // setLoader(true);
      
      setLoader(true);
      

      const { data } = await createComment({
        variables: {
          data: {
            amount: coverInfo.amount,
            cost: coverInfo.cost,
            cover: coverInfo.cover,
            status: coverInfo.status,
            time: coverInfo.time,
            date: coverInfo.date,
            user: coverInfo.user,
            // phone: coverInfo.phone,
            name: coverInfo.name,
            description: coverInfo.description,
            image: coverInfo.image,
          },
        },
      });
      
      
      saveCover();
      setTimeout(() => {
        setLoader(false);
        Alert.alert(
          "Ticket comprado exitosamente",
          "Disfruta de la fiesta 😁, recuerda que al comprar un ticket estas aceptando nuestros terminos y afirmando que eres mayor de edad. 😍"
        );
        navigation.navigate("Tickets");
      }, 5000);
    } catch (err) {
      setInfo(err);
    }
  };

  const createGoerFunc = async () => {
    const { data } = await createComment({
      variables: {
        data: {
          amount: coverInfo.amount,
          cost: coverInfo.cost,
          cover: coverInfo.cover,
          status: coverInfo.status,
          time: coverInfo.time,
          date: coverInfo.date,
          user: coverInfo.user,
          name: coverInfo.name,
          // phone: coverInfo.phone,
          description: coverInfo.description,
          image: coverInfo.image,
        },
      },
    });
  };

  const updateUserHandler = async () => {
    setLoader(true);

    try {
      const { data } = await updateUser({
        variables: {
          data: {
            pin: pin,
            uuid: user.uuid,
          },
        },
      });

      if (data.updateUser.uuid) {
        createGoerFunc();
        setTimeout(() => {
          // setModal(false);
          setLoader(false);
          Alert.alert(
            "Ticket comprado exitosamente",
            "Disfruta de la fiesta 😁, recuerda que al comprarlo exastas aceptando nuestros terminos y afirmando que eres mayor de edad. 😍"
          );
          alert(
            "Ticket comprado exitosamente, Disfruta de la fiesta 😁, recuerda que al comprarlo exastas aceptando nuestros terminos y afirmando que eres mayor de edad. 😍"
          );
          navigation.navigate("Tickets");
        }, 15000);
      }
    } catch (err) {
      setInfo(err);
    }
  };

  const halfWindowsHeight = Dimensions.get("window").height;

  console.log(loader)
  useEffect(() => {
    refetch();
    getInfo();
  }, []);

  return (
    <View>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} />

      {loader ? (
        <DefaultView
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50
          }}
        >
          <DefaultView
            style={{
              height: 200,
              width: 200,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,.3)",
            }}
          >
            <ActivityIndicator size="large" color={colors[theme].text} />
            <Text
              style={{
                textAlign: "center",
                color: colors[theme].text,
                fontSize: 18,
              }}
            >
              Verificando tu Ticket...
            </Text>
          </DefaultView>
        </DefaultView>
      ): null}

      <DefaultView
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <DefaultView
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors[theme].border,
          }}
        >
          <Text style={{ fontSize: 18, color: colors[theme].text }}>
            {" "}
            <Ionicons style={{ fontSize: 20 }} name="ios-wallet-outline" />{" "}
            Saldo disponible{" "}
          </Text>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: colors[theme].text,
            }}
          >
            {" "}
            {DivisaFormater(userBalance?.userById?.balance)}
          </Text>
        </DefaultView>
        <DefaultView
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors[theme].border,
          }}
        >
          <Text style={{ fontSize: 18, color: colors[theme].text }}>
            {" "}
            Total a pagar{" "}
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "600",
              color: colors[theme].text,
            }}
          >
            {" "}
            {DivisaFormater(coverInfo.cost)}
          </Text>
        </DefaultView>
        <DefaultView
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors[theme].border,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              display: "flex",
              color: colors[theme].text,
            }}
          >
            {" "}
            <Ionicons
              name="ios-clipboard-outline"
              style={{
                fontSize: 22,
              }}
            />{" "}
            Detalles de la compra{" "}
          </Text>
        </DefaultView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            paddingHorizontal: 20,
            paddingTop: 10,
            marginBottom: 8,
            color: colors[theme].text,
          }}
        >
          {coverInfo.storeName}
        </Text>
        <DefaultView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: colors[theme].text,
            }}
          >
            {coverInfo.amount} Tickets
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colors[theme].text,
            }}
          >
            {DivisaFormater(coverInfo.cost)}
          </Text>
        </DefaultView>

        {/* {!loader && ( */}

        <DefaultView
          style={{
            position: "absolute",
            bottom: 80,
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
              backgroundColor:
                userBalance?.userById?.balance >= coverInfo.cost
                  ? "#FFE243"
                  : "#CA0B00",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              userBalance?.userById?.balance >= coverInfo.cost
                ? createGoerHandler()
                : navigation.navigate("Wallet")
            }
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                color:
                  userBalance?.userById?.balance >= coverInfo.cost
                    ? "rgba(0,0,0,0.8)"
                    : "#fff",
                textTransform: "uppercase",
              }}
            >
                    
              {userBalance?.userById?.balance >= coverInfo.cost
                ? loader? <ActivityIndicator color="#333" />  : 'PAGAR' 
                : "RECARGAR"}
            </Text>
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>

      {userBalance?.userById?.pin ? (
        <Modal
          onSwipeComplete={() => setModal(false)}
          animationIn="fadeIn"
          style={{}}
          isVisible={modal}
          swipeDirection={["down"]}
        >
          <DefaultView
            style={{
              backgroundColor: colors[theme].background,
              height: 250,
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
              <DefaultView
                style={{
                  padding: 15,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      style={{
                        fontSize: 40,
                        color: colors[theme].text,
                      }}
                    />
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: colors[theme].text,
                  }}
                >
                  Ingresar pin
                </Text>

                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      style={{
                        fontSize: 40,
                        color: colors[theme].background,
                      }}
                    />
                  </Text>
                </TouchableOpacity>
              </DefaultView>
              <DefaultView
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                }}
              >
                <TextInput
                  style={{
                    height: 60,
                    borderWidth: 1,
                    borderColor: colors[theme].border,
                    borderRadius: 5,
                    padding: 10,
                    marginBottom: 20,
                    fontSize: 25,
                    color: colors[theme].text,
                  }}
                  keyboardType="number-pad"
                  onChangeText={(text) => setCode(text)}
                  placeholderTextColor={colors[theme].holderColor}
                  value={code}
                />
                {/* <DefaultView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "30%",
                  }}
                  onPress={() => setCode((c) => c + "1")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    1
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "2")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    2
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "3")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    3
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "4")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    4
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "5")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    5
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "6")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    6
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "7")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    7
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "8")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    8
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "9")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    9
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  ></Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c + "0")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    0
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    marginBottom: 30,
                  }}
                  onPress={() => setCode((c) => c.slice(0, -1))}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      color: colors[theme].text
                    }}
                  >
                    Borrar
                  </Text>
                </TouchableOpacity>
              </DefaultView> */}
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#FFE243",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                  onPress={() => createGoerHandler()}
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
                    {loader? <ActivityIndicator color="#333" />  : 'PAGAR' }
                    
                  </Text>
                </TouchableOpacity>
              </DefaultView>
            </DefaultView>
          </DefaultView>
        </Modal>
      ) : (
        <Modal
          onSwipeComplete={() => setModal(false)}
          animationIn="fadeIn"
          style={{}}
          isVisible={modal}
          swipeDirection={["down"]}
        >
          <DefaultView
            style={{
              backgroundColor: "#fff",
              height: 500,
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
              <DefaultView
                style={{
                  padding: 15,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      style={{
                        fontSize: 40,
                      }}
                    />
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  Crear pin
                </Text>

                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      style={{
                        fontSize: 40,
                        color: "white",
                      }}
                    />
                  </Text>
                </TouchableOpacity>
              </DefaultView>
              <DefaultView
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                }}
              >
                <TextInput
                  style={{
                    height: 60,
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    borderRadius: 5,
                    padding: 10,
                    marginBottom: 20,
                    fontSize: 25,
                  }}
                  value={pin}
                />
                <DefaultView
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "30%",
                    }}
                    onPress={() => setPin((c) => c + "1")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      1
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "2")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      2
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "3")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      3
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "4")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      4
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "5")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      5
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "6")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      6
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "7")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      7
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "8")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      8
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "9")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      9
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    ></Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c + "0")}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      0
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "30%",
                      marginBottom: 30,
                    }}
                    onPress={() => setPin((c) => c.slice(0, -1))}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      Borrar
                    </Text>
                  </TouchableOpacity>
                </DefaultView>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#FFE243",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                  onPress={() => updateUserHandler()}
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
                    CREAR Y PAGAR
                  </Text>
                </TouchableOpacity>
              </DefaultView>
            </DefaultView>
          </DefaultView>
        </Modal>
      )}
    </View>
  );
};

export default Payment;
