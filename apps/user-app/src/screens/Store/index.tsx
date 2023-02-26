import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_STORE } from "../../graphql/queries/stores";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { DivisaFormater } from "../../utilities/divisaFormater";
import DatePicker from "react-native-date-picker";
import { GET_COMMENTS } from "../../graphql/queries/comments";
import { useSelector } from "react-redux";
import TimeAgo from "react-native-timeago";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  route: any;
  navigation: HomeScreenNavigationProp;
};

const Store = ({ route, navigation }: Props) => {
  const { data, loading, error } = useQuery(GET_STORE, {
    variables: { uuid: route.params.store },
  });

  const [modal, setModal] = useState(false);
  const [modalOptions, setModalOptions] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state: any) => state.auth);

  const [comment, setComment] = useState("");

  const {
    data: comments,
    loading: loadginComments,
    refetch,
    startPolling,
    stopPolling,
  } = useQuery(GET_COMMENTS, {
    variables: { uuid: route.params.store },
  });

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />

      <Image
        source={{ uri: data?.getStoreById?.photos[0] }}
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
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            {data?.getStoreById?.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            {data?.getStoreById?.type}
          </Text>
          <Text>
            {" "}
            <Ionicons
              name="ios-star-outline"
              style={{ fontWeight: "100", fontSize: 16 }}
            />
            4.24
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalOptions(true)}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "column",
              width: 100,
              height: 70,
              marginTop: -19,
              marginRight: -19,
              paddingRight: 20,
            }}
          >
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.7)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={{
        height: '100%', 
      }}>
        <View
          style={{
            width: "100%",
            borderBottomColor: "rgba(0, 0, 0,.03)",
            borderBottomWidth: 1,
            padding: 10,
            paddingHorizontal: 20,
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Covers", { store: route.params.store })
            }
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <Image
              source={{ uri: "https://i.postimg.cc/SN7Jyd4b/covers-disco.png" }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            /> */}
            <Ionicons
              style={{
                fontSize: 30,
                color: "rgba(0, 0, 0,0.8)",
              }}
              name="ios-barcode-outline"
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onPress={() => setModal(true)}
          >
            {/* <Image
              source={{ uri: "https://i.postimg.cc/xjP284X5/menu-disco.png" }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            /> */}
            <Ionicons
              style={{
                fontSize: 30,
                color: "rgba(0, 0, 0,0.8)",
              }}
              name="person-add-outline"
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Reservas
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://i.postimg.cc/mrcLFNvD/reserva-disco.png",
              }}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Menu
            </Text>
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            position: "relative",
            height: "100%",
          }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:8
          }}>
            
          <Text
            style={{
              fontWeight: "600",
              paddingHorizontal: 20,
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            Comentarios
          </Text>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            
            onPress={() => navigation.navigate("Comments", { store: route.params.store })}
          >
            <Ionicons name="ios-chatbubbles-outline" style={{ fontSize: 27 }} />
          </TouchableOpacity>
          </View>
          
          <ScrollView
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              height: "100%",
            }}
          >
            {comments?.getCommentsByStore.map((comment: any) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    marginBottom: 15,
                  }}
                onPress={() => navigation.navigate("Comments", { store: route.params.store })}
                  
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
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
                        uri: comment.photo
                          ? comment.photo
                          : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "85%",
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>
                      <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
                      <TimeAgo time={parseInt(comment.createdAt)} />{" "}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{comment.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              position: "absolute",
              backgroundColor: "#FFFFFF",
              bottom: 0,
              height: 60,
            }}
          >
            <View
              style={{
                height: 40,
                width: 40,
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
          </View>
        </View>
      </ScrollView>

      <Modal
        onSwipeStart={() => setModal(false)}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
        animationOut="slideOutDown"
        isVisible={modal}
        swipeDirection={["down"]}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 400,
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
            // padding: 20,
            paddingBottom: 0,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 15,
              width: "100%",
              height: 40,
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Haz una reserva
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                borderTopWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Seleccionar fecha y hora
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginVertical: 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.1)",
                    marginRight: 20,
                    width: "50%",
                  }}
                  onPress={() => setOpen(true)}
                >
                  <Text>Fecha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.1)",
                    width: "50%",
                  }}
                  onPress={() => setOpen(true)}
                >
                  <Text>Fecha</Text>
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderTopWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                Numero de personas
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
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
                  }}
                >
                  0
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                >
                  <Ionicons
                    name="ios-add"
                    style={{ fontWeight: "100", fontSize: 26 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                Consumo minimo
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
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
                  }}
                >
                  {DivisaFormater(50000)}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                >
                  <Ionicons
                    name="ios-add"
                    style={{ fontWeight: "100", fontSize: 26 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "#FFE243",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
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
                RESERVAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        onSwipeStart={() => setModalOptions(false)}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
        animationOut="slideOutDown"
        isVisible={modalOptions}
        swipeDirection={["down"]}
        onBackButtonPress={() => setModalOptions(false)}
        onBackdropPress={() => setModalOptions(false)}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 240,
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
            padding: 20,
            paddingBottom: 0,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 15,
              left: "50%",
              width: 40,
              height: 8,
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 30,
                  }}
                  name="ios-star-outline"
                />{" "}
                Agregar a favoritos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 30,
                  }}
                  name="ios-information-circle-outline"
                />{" "}
                Porque estoy viendo este negocio
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 30,
                  }}
                  name="eye-off-outline"
                />{" "}
                Ocultar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 30,
                  }}
                  name="warning-outline"
                />{" "}
                Reportar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
