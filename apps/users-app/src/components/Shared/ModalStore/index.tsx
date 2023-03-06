import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Linking, TextInput, SafeAreaView } from 'react-native';
import { useTheme } from "../../../contexts/ThemeContext";
import colors from "../../Layout/Theme/colors";
import { useMutation } from "@apollo/client";
import { CREATE_REPORTED } from "../../../graphql/queries/reporteds";
import { useSelector } from "react-redux";
import { useState } from "react";

const ModalStore = ({ name, phone, store, modal, setModal }: any) => {
  const { theme } = useTheme();
  const { user } = useSelector((state: any) => state.auth);

  const [modalReport, setModalReport] = useState(false);
  const [reason, setReason] = useState("");

  const [createReported] = useMutation(CREATE_REPORTED);

  const createReportedHandler = async () => {
    try {
      const { data } = await createReported({
        variables: {
          user: user.uuid,
          store,
          reason,
        },
      });
      alert(
        "Negocio reportado exitosamente, lamentamos que tengas problemas con el establecimiento, haremos todo lo posible que no vuelva a ocurrir."
      );
      Alert.alert(
        "Reportado",
        "Negocio reportado exitosamente, lamentamos que tengas problemas con el establecimiento, haremos todo lo posible que no vuelva a ocurrir."
      );
      setModalReport(false);
    } catch (err) {
      console.log(err);
    }
  };

  const reportStore = () => {
    setModalReport(true);
    setModal(false);
  };
  
  return (
    <View>
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
            backgroundColor: colors[theme].modal,
            height: 250,
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
            padding: 20,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 15,
              left: "47%",
              width: 35,
              height: 5,
              backgroundColor: colors[theme].holderColor,
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => Linking.openURL(`https://wa.me/57${phone}`)}
              style={{
                height: 50,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: colors[theme].text,
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                    color: colors[theme].text,
                  }}
                  name="logo-whatsapp"
                />{" "}
                Whatsapp
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://goo.gl/maps/gtko7vCmR1dBhLWNA`)
              }
              style={{
                height: 50,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: colors[theme].text,
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                  }}
                  name="ios-location-outline"
                />{" "}
                Ubicación
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                height: 50,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: colors[theme].text,
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 10,
                  }}
                  name="ios-star-outline"
                />{" "}
                <Text>Agregar a favoritos</Text>
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              style={{
                height: 50,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: colors[theme].text,
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                  }}
                  name="ios-information-circle-outline"
                />{" "}
                Porque estoy viendo este negocio
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              style={{
                height: 50,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: colors[theme].text,
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                  }}
                  name="eye-off-outline"
                />{" "}
                Ocultar
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                height: 50,
                width: "100%",
              }}
              onPress={reportStore}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                  }}
                  name="warning-outline"
                />{" "}
                Reportar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: "100%",
              }}
              onPress={() => setModal(false)}
            >
              <Text
                style={{
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: colors[theme].text,
                }}
              >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                  }}
                  name="ios-exit-outline"
                />{" "}
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <Modal
        onSwipeComplete={() => setModalReport(false)}
        animationIn="fadeIn"
        isVisible={modalReport}
        swipeDirection={["down"]}
        onBackButtonPress={() => setModalReport(false)}
        onBackdropPress={() => setModalReport(false)}
      >
        <SafeAreaView
          style={{
            backgroundColor: colors[theme].modal,
            height: 250,
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
              <TouchableOpacity onPress={() => setModalReport(false)}>
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
                Reporte
              </Text>

              <TouchableOpacity onPress={() => setModalReport(false)}>
                <Text>
                  <Ionicons
                    name="ios-arrow-back-outline"
                    style={{
                      fontSize: 40,
                      color: colors[theme].modal,
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
                  borderColor: colors[theme].border,
                  borderRadius: 5,
                  padding: 10,
                  marginBottom: 20,
                  fontSize: 16,
                  color: colors[theme].text,
                }}
                onChangeText={(text) => setReason(text)}
                placeholderTextColor={colors[theme].holderColor}
                value={reason}
              />
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
                onPress={createReportedHandler}
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
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      
      
    </View>
  );
};

export default ModalStore;
