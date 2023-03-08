import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View as DefaultView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { IStore } from "../../types";
import { Text, TextInput, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useMutation, useQuery } from "@apollo/client";
import { GET_COVERS } from "../../graphql/queries/covers";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_STORE } from "../../graphql/queries/stores/index";
import Header from "../../components/Layout/Header";
import Modal from "react-native-modal";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { CREATE_COMMENT, GET_COMMENTS } from "../../graphql/queries/comments";
import { useSelector } from "react-redux";
// import TimeAgo from "react-native-timeago";
// import moment from "moment";
// import "moment/locale/es";
import { GET_USER_BALANCE } from "../../graphql/queries/user";
import { View } from "../../components/Layout/Theme";
import colors from "../../components/Layout/Theme/colors";
import { useTheme } from "../../contexts/ThemeContext";

// moment.locale("es");

const Comments = ({ route, navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const {theme} = useTheme();
  const [comment, setComment] = useState("");

  const { data, loading, error, refetch, startPolling, stopPolling } = useQuery(
    GET_COMMENTS,
    {
      variables: { uuid: route.params.store },
    }
  );
  
  const { data: userData, loading: loadingUser, error: erroUser } = useQuery(GET_USER_BALANCE, {
    variables: { uuid: user.uuid },
  });

  const [createComment] = useMutation(CREATE_COMMENT);
  const [info, setInfo] = useState<any>();
  const createCommentHandler = async () => {
    try {
      if(comment.trim().length <= 0){return;}
      const { data } = await createComment({
        variables: {
          user: user.username,
          store: route.params.store,
          text: comment,
          photo: userData?.userById?.photo[userData?.userById?.photo.length - 1],
        },
      });

      setComment("");
    } catch (err) {
      setInfo(err);
    }
    refetch();
  };

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  return (
    <View
    >
      <HeaderComments navigation={navigation} theme={theme} />
      <ScrollView
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,        }}
      >
        {data?.getCommentsByStore.map((comment: any) => {
          return (
            <DefaultView
              key={comment.uuid}
              style={{
                flexDirection: "row",
                marginBottom: 15,
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
                <Text style={{ fontSize: 14 }}>
                  <Text style={{ fontWeight: "600", color: colors[theme].text }}>{comment.user}</Text>{" "}
                  {/* <TimeAgo time={parseInt(comment.createdAt)} />{" "} */}
                </Text>
                <Text style={{ fontSize: 12, color: colors[theme].text }}>{comment.text}</Text>
              </DefaultView>
            </DefaultView>
          );
        })}
      </ScrollView>
      <DefaultView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingRight:60,
          position: "absolute",
          backgroundColor: colors[theme].modal,
          bottom: 0,
          left: 0,
          width: "100%",
          height: 50,
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
        <DefaultView style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          
        <KeyboardAvoidingView style={{
          flex: 1
        }}
        keyboardVerticalOffset={50}
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          style={{
            height: '100%',
            fontSize: 16,
            color: colors[theme].text
          }}
          placeholderTextColor={colors[theme].holderColor}
          value={comment}
          placeholder="Escribe un comentario"
          onChangeText={(text) => setComment(text)}
        />
      </KeyboardAvoidingView>
        
        <TouchableOpacity
          style={{
          }}
          onPress={() => createCommentHandler()}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: colors[theme].text
            }}
          >
            Publicar
          </Text>
        </TouchableOpacity>
        </DefaultView>
        
      </DefaultView>
    </View>
  );
};

export default Comments;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
  openModal?: any;
  theme: 'dark' | 'light';
};

const HeaderComments = ({ navigation, openModal, theme }: Props) => {
  return (
    <DefaultView style={styles.header}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="ios-arrow-back-outline"
          color={ colors[theme].text}
          style={{ fontWeight: "100", fontSize: 24 }}
        />

        <Text
          style={{
            fontSize: 18,
            marginLeft: 5,
            fontWeight: "500",
            color: colors[theme].text
          }}
        >
          Comentarios
        </Text>
      </TouchableOpacity>
    </DefaultView>
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
