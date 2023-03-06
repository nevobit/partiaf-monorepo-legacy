import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Linking,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { IStore } from "../../types";
import { Text, View as DefaultView } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { GET_STORE } from "../../graphql/queries/stores";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_COMMENTS } from "../../graphql/queries/comments";
import { useSelector } from "react-redux";
// import TimeAgo from "react-native-timeago";
// import moment from "moment";
// import "moment/locale/es";
// import DateTimePicker from '@react-native-community/datetimepicker';
import { CREATE_BOOKING } from "../../graphql/queries/bookings";
import { View } from "../../components/Layout/Theme";
import ButtonOptionsDots from "../../components/Shared/ButtonOptionsDots";
import colors from "../../components/Layout/Theme/colors";
import { useTheme } from "../../contexts/ThemeContext";
// import ModalStore from "../../components/ModalStore";
import AntIcon from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import {DatePicker,  TimePicker } from "../../components/Shared/DatePicker";
import ModalStore from "../../components/Shared/ModalStore";

// moment.locale("es");

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  route: any;
  navigation: HomeScreenNavigationProp;
};

const Store = ({ route, navigation }: Props) => {
  const { theme } = useTheme();
  const { data, loading, error } = useQuery(GET_STORE, {
    variables: { uuid: route.params.store },
  });

  const [modal, setModal] = useState(false);
  const [timeText, setTimeText] = useState(false);
  const [dateText, setDateText] = useState(false);
  
  const [modalOptions, setModalOptions] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<any>(new Date());
  const [openTime, setOpenTime] = useState<any>(false);
  const [amount, setAmount] = useState<number>(1);
  const [consumption, setConsumption] = useState<number>(10000);

  const [open, setOpen] = useState(false);

  const { user } = useSelector((state: any) => state.auth);

  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);

  const [createBooking] = useMutation(CREATE_BOOKING);

  const setNewDate: any = (event: any, date: Date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;

    const theDate = new Date(timestamp);
    if (type == "set") {
      setDate(theDate);
      setOpenDate(false);
    }

    if (type == "dismissed") {
      setOpenDate(false);
    }
  };

  const setNewTime: any = (event: any, date: Date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;

    const theDate = new Date(timestamp);
    if (type == "set") {
      setTime(theDate.getTime());
      setOpenTime(false);
    }

    if (type == "dismissed") {
      setOpenTime(false);
    }
  };

  const [loader, setLoader] = useState(false);

  console.log({ openDate });
  const createBookingHandler = async () => {
    setLoader(true);
    try {
      const { data } = await createBooking({
        variables: {
          data: {
            chairs: amount.toString(),
            consumption: consumption.toString(),
            date: date,
            time: time,
            name: user.username,
            status: "in list",
            store: route.params.store,
            user: user.uuid,
          },
        },
      });


      setTimeout(() => {
        setLoader(false);
        Alert.alert(
          "Reserva realizada exitosamente!",
          "Esperamos que disfrutes 😁, recuerda que al reservar estas aceptando nuestros terminos y afirmando que eres mayor de edad. 😍"
        );
        navigation.navigate("Tickets", { user: user.uuid });
        setModal(false);
      
      }, 5000);
    } catch (err: any) {
      setInfo(err);
      console.log(err);
    }
    refetch();
  };

  // const bookingInfo = {
  //   chairs: amount,
  //   consumption: consumption,
  //   date: date,
  //   time: time,
  //   name: user.username,
  //   status: 'in list',
  //   store: route.params.store,
  //   user: user.uuid
  // }

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
    refetch();
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  return (
    <View>
      <StatusBar animated={true} />
      <Header navigation={navigation} back={true} />

      {loader && (
        <DefaultView
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              Realizando tu Reserva...
            </Text>
          </DefaultView>
        </DefaultView>
      )}
      <Image
        source={{ uri: data?.getStoreById?.photos[0] }}
        style={{
          width: "100%",
          height: 250,
        }}
      />

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
          justifyContent: "space-between",
        }}
      >
        <DefaultView>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: colors[theme].text,
            }}
          >
            {data?.getStoreById?.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
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
            {data?.getStoreById?.type}
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
            <Text
              style={{
                color: colors[theme].text,
              }}
            >
              4.24
            </Text>
          </Text>
        </DefaultView>
        <ButtonOptionsDots onPress={() => setModalOptions(true)} />
      </DefaultView>

      <DefaultView
        style={{
          height: "100%",
        }}
      >
        <DefaultView
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
                color: colors[theme].text,
              }}
              name="ios-barcode-outline"
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: colors[theme].text,
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
                color: colors[theme].text,
              }}
              name="person-add-outline"
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: colors[theme].text,
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
        </DefaultView>

        <DefaultView
          style={{
            backgroundColor: colors[theme].background,
            position: "relative",
            height: "100%",
          }}
        >
          <DefaultView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                paddingHorizontal: 20,
                fontSize: 16,
                marginBottom: 5,
                color: colors[theme].text,
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
              onPress={() =>
                navigation.navigate("Comments", { store: route.params.store })
              }
            >
              <Ionicons
                name="ios-chatbubbles-outline"
                style={{ fontSize: 24, color: colors[theme].text }}
              />
            </TouchableOpacity>
          </DefaultView>

          <DefaultView
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              height: "100%",
            }}
          >
            {comments?.getCommentsByStore.map((comment: any) => {
              return (
                <TouchableOpacity
                  key={comment.uuid}
                  style={{
                    flexDirection: "row",
                    marginBottom: 15,
                  }}
                  onPress={() =>
                    navigation.navigate("Comments", {
                      store: route.params.store,
                    })
                  }
                >
                  <DefaultView
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
                  </DefaultView>
                  <DefaultView
                    style={{
                      width: "85%",
                    }}
                  >
                    <Text style={{ fontSize: 16, color: colors[theme].text }}>
                      <Text
                        style={{ fontWeight: "600", color: colors[theme].text }}
                      >
                        {comment.user}
                      </Text>{" "}
                      {/* <TimeAgo time={parseInt(comment.createdAt)} />{" "} */}
                    </Text>
                    <Text style={{ fontSize: 14, color: colors[theme].text }}>
                      {comment.text}
                    </Text>
                  </DefaultView>
                </TouchableOpacity>
              );
            })}
          </DefaultView>
          <DefaultView
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              position: "absolute",
              backgroundColor: colors[theme].background,
              bottom: 0,
              height: 60,
            }}
          >
            <DefaultView
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
            </DefaultView>
          </DefaultView>
        </DefaultView>
      </DefaultView>

      <Modal
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
        <DefaultView
          style={{
            backgroundColor: colors[theme].modal,
            height: 430,
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
          <DefaultView
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
                color: colors[theme].text,
              }}
            >
              Haz una reserva
            </Text>
          </DefaultView>
          <DefaultView
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <DefaultView
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
                  color: colors[theme].text,
                }}
              >
                Seleccionar fecha y hora
              </Text>
              <DefaultView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  paddingVertical: 8,
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
                  onPress={() => setOpenDate(true)}
                >
                  {Platform.OS == "ios" && (
                    <DateTimePicker
                      onChange={(e) => setNewDate(e, date)}
                      minimumDate={new Date()}
                      value={date}
                    />
                  )}
                    {Platform.OS == "ios" && (
                    <DefaultView>
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 18,
                          color: colors[theme].text,
                        }}
                      >
                        {date.toLocaleDateString()}
                      </Text>
                    </DefaultView>
                  )}
                   {!dateText && (
                        <Text style={{
                          color:colors[theme].text
                        }}>Seleccionar fecha</Text>
                      )}
                                      {Platform.OS == 'web' && (
                          <DatePicker value={date} onChange={(e:any) => setDate(e.target.value)} />
)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.1)",
                    width: "50%",
                  }}
                >
                  {Platform.OS == "ios" && (
                    <DateTimePicker
                      mode="time"
                      onChange={(e) => setNewTime(e, date)}
                      minimumDate={new Date()}
                      value={date}
                    />
                  )}
                      <DefaultView>
                        
                      {/* <Text
                        style={{
                          color: colors[theme].text,
                          fontSize: 18,
                        }}
                      >
                        {time.getTime().toString()}
                      </Text> */}
                      {!timeText && (
                        <Text style={{
                          color:colors[theme].text
                        }}>Seleccionar hora</Text>
                      )}

                      {Platform.OS == 'web' && (
                          <TimePicker value={time} onChange={(e:any) => setTime(e.target.value)} />
)}
                    </DefaultView>
                  
                </TouchableOpacity>
                {/* {show && (
                  
                <DateTimePicker
                  value={date}
                  mode="date"
                  onChange={onChangeDate}
                />
                )} */}

                {/* {open && (
                  
                  <DateTimePicker
                    value={time}
                    mode="time"
                    onChange={onChangeTime}
                  />
                  )} */}
              </DefaultView>
            </DefaultView>
            <DefaultView
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
                  fontSize: 16,
                  color: colors[theme].text,
                }}
              >
                Numero de personas
              </Text>
              <DefaultView
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
                  onPress={() => amount > 1 && setAmount((prev) => prev - 1)}
                >
                  <Ionicons
                    name="ios-remove"
                    style={{
                      fontWeight: "100",
                      fontSize: 30,
                      color: colors[theme].text,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    padding: 15,
                    fontSize: 18,
                    color: colors[theme].text,
                  }}
                >
                  {amount}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                  onPress={() => setAmount((prev) => prev + 1)}
                >
                  <Ionicons
                    name="ios-add"
                    style={{
                      fontWeight: "100",
                      fontSize: 30,
                      color: colors[theme].text,
                    }}
                  />
                </TouchableOpacity>
              </DefaultView>
            </DefaultView>
            <DefaultView
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
                  fontSize: 16,
                  color: colors[theme].text,
                }}
              >
                Consumo minimo
              </Text>
              <DefaultView
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
                  onPress={() =>
                    consumption > 10000 &&
                    setConsumption((prev) => prev - 10000)
                  }
                >
                  <Ionicons
                    name="ios-remove"
                    style={{
                      fontWeight: "100",
                      fontSize: 30,
                      color: colors[theme].text,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    padding: 15,
                    fontSize: 18,
                    color: colors[theme].text,
                  }}
                >
                  {DivisaFormater(consumption)}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    padding: 3,
                  }}
                  onPress={() => setConsumption((prev) => prev + 10000)}
                >
                  <Ionicons
                    name="ios-add"
                    style={{
                      fontWeight: "100",
                      fontSize: 30,
                      color: colors[theme].text,
                    }}
                  />
                </TouchableOpacity>
              </DefaultView>
            </DefaultView>
          </DefaultView>
          <DefaultView
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
              onPress={() => createBookingHandler()}
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
                 {loader? <ActivityIndicator color="#333" />  : 'RESERVAR'}
                
              </Text>
            </TouchableOpacity>
          </DefaultView>
        </DefaultView>
      </Modal>
      <ModalStore  name={data?.getStoreById?.name} phone={data?.getStoreById?.phone} modal={modalOptions} setModal={setModalOptions} />

      {/* <ModalStore modal={modalOptions} setModal={setModalOptions} phone={data?.getStoreById.phone} /> */}
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
