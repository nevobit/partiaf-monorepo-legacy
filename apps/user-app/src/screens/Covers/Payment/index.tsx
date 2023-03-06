import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, SafeAreaView } from 'react-native';
import { useMutation, useQuery } from "@apollo/client";
import Modal from "react-native-modal";
import { GET_STORE } from "../../../graphql/queries/stores";
import Header from "../../../components/Layout/Header";
import { DivisaFormater } from "../../../utilities/divisaFormater";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CREATE_GOER } from "../../../graphql/queries/goers";
import { GET_USER_BALANCE, UPDATE_USER_PIN } from "../../../graphql/queries/user";
import { Dimensions } from 'react-native'

const Payment = ({ route, navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const { data: userBalance, loading, error, refetch } = useQuery(GET_USER_BALANCE, {
    variables: { uuid: user.uuid },
  });
  
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  
  const [coverInfo, setCoverInfo] = useState<any>({});

  // userById
  const getInfo = async () => {
    const coverInfoHandler = await AsyncStorage.getItem("coverInfo");
    setCoverInfo(JSON.parse(coverInfoHandler || ""));
  };
  
  const [createComment] = useMutation(CREATE_GOER);
  const [updateUser] = useMutation(UPDATE_USER_PIN);

  const [info, setInfo] = useState<any>();
  const createGoerHandler = async () => {
    try {
      if(code != userBalance?.userById.pin){
        alert("Pin incorrecto, reintentalo");
        return;
      }
      
      const { data } = await createComment({
        variables:  {
          data: {
            amount: coverInfo.amount,
            cost: coverInfo.cost,
            cover: coverInfo.cover,
            status: coverInfo.status,
            time: coverInfo.time,
            user: coverInfo.user,
            name: coverInfo.name,
            description: coverInfo.description,
            image: coverInfo.image,            
          }
        }
      });
      setModal(false)
      navigation.navigate("Tickets")
      alert("Ticket comprado exitosamente");

    } catch (err) {
      setInfo(err);
    }
  };
  
  const createGoerFunc = async() => {
    const { data } = await createComment({
      variables:  {
        data: {
          amount: coverInfo.amount,
          cost: coverInfo.cost,
          cover: coverInfo.cover,
          status: coverInfo.status,
          time: coverInfo.time,
          user: coverInfo.user,
          name: coverInfo.name,
          description: coverInfo.description,
          image: coverInfo.image,            
        }
      }
    });
  }
  
  const updateUserHandler = async () => {
    try {
      const { data } = await updateUser({
        variables:  {
          data: {
            pin: pin,
            uuid: user.uuid,
          }
        }
      });
      
      
       if(data.updateUser.uuid){
      createGoerFunc();
           setModal(false)
      navigation.navigate("Tickets")
      alert("Ticket comprado exitosamente");       
       }
      

    } catch (err) {
      setInfo(err);
    }
  };

  

  
  const halfWindowsHeight = Dimensions.get('window').height

  useEffect(() => {
    refetch();
    getInfo();
  }, []);
  
 
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", position: "relative", height: halfWindowsHeight }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} />
      <View
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <View
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {" "}
            <Ionicons style={{ fontSize: 22 }} name="ios-wallet-outline" />{" "}
            Saldo disponible{" "}
          </Text>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>
            {" "}
            {DivisaFormater(userBalance?.userById?.balance)}
          </Text>
        </View>
        <View
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ fontSize: 20 }}> Total a pagar </Text>
          <Text style={{ fontSize: 26, fontWeight: "600" }}>
            {" "}
            {DivisaFormater(coverInfo.cost)}
          </Text>
        </View>
        <View
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", display: "flex" }}>
            {" "}
            <Ionicons
              name="ios-clipboard-outline"
              style={{
                fontSize: 22,
              }}
            />{" "}
            Detalles de la compra{" "}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "600",
            paddingHorizontal: 20,
            paddingTop: 10,
            marginBottom: 8,
          }}
        >
          {coverInfo.storeName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{
            fontSize: 20,
          }}>{coverInfo.amount} Tickets</Text>
          <Text style={{
            fontSize: 22,
            fontWeight: '600'
          }}>{DivisaFormater(coverInfo.cost)}</Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 120,
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
              backgroundColor: userBalance?.userById?.balance >= coverInfo.cost?  "#FFE243" : '#CA0B00',
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => userBalance?.userById?.balance >= coverInfo.cost ? setModal(true) : navigation.navigate("Wallet")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                color: userBalance?.userById?.balance >= coverInfo.cost?   "rgba(0,0,0,0.8)" : "#fff",
                
                textTransform: "uppercase",
              }}
            >
              {userBalance?.userById?.balance >= coverInfo.cost ? "PAGAR": 'RECARGAR'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

        {userBalance?.userById?.pin ? (
          
      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="fadeIn"
        style={{}}
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <View
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
          <View
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
              position: "relative",
            }}
          >
            <View
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
                Ingresar pin
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
            </View>
            <View
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
                value={code}
              />
              <View
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
                  onPress={() => setCode((c) => c + "0")}
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
                  onPress={() => setCode((c) => c.slice(0, -1))}
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
              </View>
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
                  PAGAR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        ): (
          
      
      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="fadeIn"
        style={{}}
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <View
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
          <View
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
              position: "relative",
            }}
          >
            <View
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
            </View>
            <View
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
              <View
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
              </View>
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
            </View>
          </View>
        </View>
      </Modal>
        )}
      
    </SafeAreaView>
  );
};

export default Payment;
