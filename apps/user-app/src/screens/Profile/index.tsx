import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { signout } from "../../features/auth";
import { useDispatch } from "react-redux";
import Modal from 'react-native-modal'

const Profile = ({navigation}: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const [modal, setModal] = useState(true);
  
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(signout());
  };
  return (
    <View>
      <StatusBar animated={true} />
      <View style={styles.header}>
        <Text style={{ fontWeight: "600", fontSize: 23 }}>
          @{user.username}
        </Text>
        <View style={styles.header_left}>
        <TouchableOpacity onPress={() =>
              navigation.navigate("Tickets", { user: "" })
            }
            style={{
              marginRight: 10
            }}
            >
            <Ionicons
              name={"ios-qr-code-outline"}
              style={{ fontWeight: "100", fontSize: 26 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModal(true)}>
            <Ionicons
              name={"ios-menu-outline"}
              style={{
                fontWeight: "100",
                fontSize: 38,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginRight: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>0</Text>
          <Text style={{ fontSize: 15 }}>Seguidores</Text>
        </View>
        <Image
          source={{
            uri:
              user?.photo?.length <= 0
                ? "https://i.postimg.cc/0jMMGxbs/default.jpg"
                : user.photo,
          }}
          style={{
            height: 110,
            width: 110,
            borderRadius: 100,
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            marginLeft: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>0</Text>
          <Text style={{ fontSize: 15 }}>Seguidos</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            color: "#111111",
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          {user.firstname} {user.lastname}
        </Text>
        <Text>Click para anadir una biografia</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: "rgba(0,0,0,.005)",
            borderColor: "rgba(0,0,0,.1)",
            borderWidth: 1,
            width: 150,
            borderRadius: 5,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 }}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,.005)",
            borderColor: "rgba(0,0,0,.1)",
            borderWidth: 1,
            width: 50,
            borderRadius: 5,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.postimg.cc/Hn6R798t/instagram.png" }}
            style={{ height: 25, width: 25, resizeMode: "cover" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={exit}
          style={{
            marginLeft: 10,
            backgroundColor: "rgba(0,0,0,.005)",
            borderColor: "rgba(0,0,0,.1)",
            borderWidth: 1,
            width: 50,
            borderRadius: 5,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 }}>Salir</Text>
        </TouchableOpacity>
      </View>
      
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
            height: 200,
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
                  name="ios-bookmark-outline"
                />{" "}
                Guardados
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
                  name="ios-star-outline"
                />{" "}
                Favoritos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
              }}
              
              onPress={() => navigation.navigate('Settings')}
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
                  name="ios-cog-outline"
                />
                <Text style={{
                }}>
                Configuracion & privacidad                  
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Profile;
