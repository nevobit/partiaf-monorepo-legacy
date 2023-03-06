import React from "react";
import { Text, View, TouchableOpacity, Share, Image, FlatList } from 'react-native';
import { useTheme } from "../../../contexts/ThemeContext";
import colors from "../../Layout/Theme/colors";
import ButtonOptionsDots from "../../Shared/ButtonOptionsDots";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

import {useState} from 'react';
import ModalStore from "../../Shared/ModalStore";
import ImageSlide from "../../Shared/ImageSlide";

const StoreCard = ({ uuid, name, type, phone, photos, navigation }: any) => {
  const { theme } = useTheme();
  const [modal, setModal] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [star, setStar] = useState(false);

  const shareStore = async () => {
    try {
      await Share.share({
        message: `En partiaf ${name} https://partiaf.com`,
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  
  return (
    <View>
      <View style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Store', {store: uuid})} >
          
        <View style={{
          flexDirection:'row',
          alignItems: 'center'
        }}>
          
         <Text
        style={{
          color: colors[theme].text,
          fontWeight: '900',
          fontSize: 14
        }}
      > 
        {name} -{" "}
      </Text>
      <Text
        style={{
          color: colors[theme].holderColor,
          fontWeight: '500',
          fontSize: 12,
        }}
      >
        {type}
      </Text>
      </View>
      <Text
        style={{
          color: colors[theme].holderColor,
          fontWeight: '500',
          fontSize: 12,
        }}
      >
        Medellin, Colombia
      </Text>
      </TouchableOpacity>
      <ButtonOptionsDots onPress={() => setModal(true)} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Store', {store: uuid})} >
          <ImageSlide  data={photos} />
      </TouchableOpacity>
      
      <View
        style={{
          display: "flex",
          marginTop: 8,
          paddingHorizontal: 10,
          marginBottom: 10,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          {/* <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            onPress={() => setStar(!star)}
          >
            {star ? (
            <AntIcon name="star" style={{ fontSize: 24, color:'#FFE243' }} />
            ): 
            <AntIcon name="staro" style={{ fontSize: 24, color: colors[theme].text, }} />
            }
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
            
            onPress={() => navigation.navigate("Comments", { store: uuid })}
          >
            <Ionicons name="ios-chatbubbles-outline" style={{ fontSize: 24, color: colors[theme].text, }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
              marginBottom: 2
            }}
            onPress={shareStore}
          >
            <SimpleIcon name="share-alt" style={{ fontSize: 22, color: colors[theme].text, }} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => setBookmark(!bookmark)}
        >
          {bookmark ? (
          <Ionicons name="ios-bookmark" style={{ fontSize: 24, color: colors[theme].text, }} />
            
          ): (
          <Ionicons name="ios-bookmark-outline" style={{ fontSize: 24, color: colors[theme].text, }} />
          )}
        </TouchableOpacity> */}
      </View>
      <ModalStore  name={name} phone={phone} modal={modal} setModal={setModal} />
    </View>
  );
};

export default StoreCard;
