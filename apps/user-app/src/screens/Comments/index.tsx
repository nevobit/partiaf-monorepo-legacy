import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
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
import TimeAgo from "react-native-timeago";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

const Comments = ({ route, navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const [comment, setComment] = useState("");

  const { data, loading, error, refetch, startPolling, stopPolling } = useQuery(
    GET_COMMENTS,
    {
      variables: { uuid: route.params.store },
    }
  );

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
          photo: user.photo[0],
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
    <SafeAreaView

      style={{ backgroundColor: "#fff", position: "relative", height: "100%" }}
    >
      <HeaderComments navigation={navigation} />
      <ScrollView
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginBottom: 70
        }}
      >
        {data?.getCommentsByStore.map((comment: any) => {
          return (
            <View
              key={comment.uuid}
              style={{
                flexDirection: "row",
                marginBottom: 15,
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
            </View>
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
        <KeyboardAvoidingView contentContainerStyle={{flexGrow: 1}}
      behavior='padding'
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}>
        
        <TextInput
          style={{
            height: 50,
            fontSize: 16,
            width: "63%",
          }}
          value={comment}
          placeholder="Escribe un comentario para Jenilao club"
          onChangeText={(text) => setComment(text)}
        />
      </KeyboardAvoidingView>
        
        <TouchableOpacity
          style={{
            marginLeft: 45,
          }}
          onPress={() => createCommentHandler()}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Publicar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Comments;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
  openModal?: any;
};

const HeaderComments = ({ navigation, openModal }: Props) => {
  return (
    <View style={styles.header}>
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
          style={{ fontWeight: "100", fontSize: 26 }}
        />

        <Text
          style={{
            fontSize: 22,
            marginLeft: 10,
            fontWeight: "500",
          }}
        >
          Comentarios
        </Text>
      </TouchableOpacity>
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
