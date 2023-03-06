import React, { useState } from "react";
import {
  Text,
  View as DefaultView,
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
import { SafeAreaView } from 'react-native';
import { useQuery } from "@apollo/client";
import { GET_USER_BALANCE } from "../../graphql/queries/user";
import {Dimensions} from 'react-native';
import { View } from "../../components/Layout/Theme";
import { useTheme } from "../../contexts/ThemeContext";
import colors from "../../components/Layout/Theme/colors";

const OtherProfile = ({route, navigation}: any) => {
  const {theme} = useTheme();
  const { user } = useSelector((state: any) => state.auth);
  
  const { data, loading, error } = useQuery(GET_USER_BALANCE, {
    variables: { uuid: route.params.uuid },
  });

  const [modal, setModal] = useState(false);
const halfWindowsHeight = Dimensions.get('window').height
  
  return (
    <View>
      <StatusBar animated={true} />
      <DefaultView style={styles.header}>
        <DefaultView style={{
          display: "flex",
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          
        <TouchableOpacity style={{
          marginRight: 10
        }} 
        onPress={() => navigation.navigate('Search')}
        >
          <Ionicons style={{
            fontSize: 25,
            color: colors[theme].text
          }} name="arrow-back" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "600", fontSize: 18, color: colors[theme].text }}>
          @{data?.userById.username}
        </Text>
        </DefaultView>
        
        <DefaultView style={styles.header_left}>
          <TouchableOpacity style={{
          }} onPress={() => setModal(true)}>
            <Ionicons
              name={"ios-menu-outline"}
              style={{
                fontSize: 38,
                color: colors[theme].text
              }}
            />
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
      <DefaultView
        style={{
          display: "flex",
          flexDirection: "row",
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DefaultView
          style={{
            marginRight: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18, color: colors[theme].text }}>0</Text>
          <Text style={{ fontSize: 14, color: colors[theme].text }}>Seguidores</Text>
        </DefaultView>
        <Image
          source={{
            uri:
            data?.userById?.photo[0]
                ? data?.userById?.photo[0]
                : "https://i.postimg.cc/0jMMGxbs/default.jpg",
          }}
          style={{
            height: 110,
            width: 110,
            borderRadius: 100,
            resizeMode: "cover",
          }}
        />
        <DefaultView
          style={{
            marginLeft: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18, color: colors[theme].text }}>0</Text>
          <Text style={{ fontSize: 14, color: colors[theme].text }}>Seguidos</Text>
        </DefaultView>
      </DefaultView>
      <DefaultView
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
            fontSize: 18,
            marginBottom: 5,
            color: colors[theme].text
          }}
        >
          {data?.userById?.firstname} {data?.userById?.lastname}
        </Text>
        <Text 
        style={{
          color: colors[theme].text
        }}
        >{data?.userById?.biography}</Text>
      </DefaultView>

      <DefaultView
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
            backgroundColor: colors[theme].background,
            borderColor: colors[theme].border,
            borderWidth: 1,
            width: 150,
            borderRadius: 5,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 14, color: colors[theme].text }}>Seguir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors[theme].background,
            borderColor: colors[theme].border,
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
            style={{ height: 25, width: 25, resizeMode: "cover", tintColor: colors[theme].text }}
          />
        </TouchableOpacity>
      </DefaultView>
      
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
        <DefaultView
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
          <DefaultView
            style={{
              position: "absolute",
              top: 15,
              left: "50%",
              width: 40,
              height: 8,
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: 50,
            }}
          ></DefaultView>
          <DefaultView
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
                
                Reportar
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
                
                Bloquear
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
                
                Restringir
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
              
                <Text style={{
                }}>
                Compartir este perfil            
                </Text>
              </Text>
            </TouchableOpacity>
          </DefaultView>
        </DefaultView>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  header_left: {
  
  },
});

export default OtherProfile;
