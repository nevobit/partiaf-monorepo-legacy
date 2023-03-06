import React, { useState } from "react";
import {
  Text,
  View as DefaultView,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { View } from "../../components/Layout/Theme";
import { ResizeMode, Video } from "expo-av";
import AntIcon from "react-native-vector-icons/AntDesign";

const posts = [
  {
    uuid: "1",
    uri: "https://player.vimeo.com/progressive_redirect/playback/804514002/rendition/720p/file.mp4?loc=external&signature=13e99d5bcdd12182086e8ef4d0319dda38fb0b8dc9a671b886c109d46b76351d",
  },
  {
    uuid: "2",
    uri: "https://player.vimeo.com/progressive_redirect/playback/804522931/rendition/720p/file.mp4?loc=external&signature=0eaec0eb39daa72f8223e1f868fd34f7e7739511a0d00aa1b13345ca9b2f4c1f",
  },
  {
    uuid: "3",
    uri: "https://player.vimeo.com/progressive_redirect/playback/804525393/rendition/720p/file.mp4?loc=external&signature=bba14aec29974d56c0b29961ece5d453cfc2dd67ae64658c629f2c756c4095b5",
  },
  {
    uuid: "5",
    uri: "https://player.vimeo.com/progressive_redirect/playback/804710628/rendition/360p/file.mp4?loc=external&signature=c0b56e639b8d5913b29b2c74a360945f899b99d7c679db51749e8f3234d132d1",
  },
  {
    uuid: "4",
    uri: "https://player.vimeo.com/progressive_redirect/playback/804526412/rendition/720p/file.mp4?loc=external&signature=3982018d4ad396c73243fca247a71e849a96fdacc0a3da26d93c8a12c6d879a6",
  },
];
const Moments = () => {
  return (
    <View >
      <Text
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 11,
          fontSize: 20,
          fontWeight: "700",
          color: "white",
        }}
      >
        Moments
      </Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.uuid}
        showsVerticalScrollIndicator={true}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export const Post = (post: any) => {
  const [paused, setPaused] = useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <DefaultView
      style={{
        flex: 1,
        height: '100%',
      }}
    >
      <DefaultView
        style={{
          width: "100%",
          zIndex: 1,
          position: "relative",
          height: Dimensions.get("window").height,
        }}
      >
        <TouchableWithoutFeedback onPress={onPlayPausePress} >
          <Video
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              zIndex: 10
            }}
            shouldPlay={paused}
            isLooping
            resizeMode={ResizeMode.COVER}
            source={{
              uri: post?.post?.uri,
            }}
          />
        </TouchableWithoutFeedback>
      </DefaultView>

      <DefaultView
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          zIndex: 10,
          bottom: 0
        }}
      >
        <DefaultView
          style={{
            alignSelf: "flex-end",
            paddingRight: 15,
          }}
        >
          <DefaultView
            style={{
              alignItems: "center",
            }}
          >
            <AntIcon
              name="star"
              style={{
                fontSize: 35,
                color: "#FFFFFF",
              }}
            />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              45k
            </Text>
          </DefaultView>
        </DefaultView>
        <DefaultView
          style={{
            padding: 10,
            paddingBottom: 80
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "white",
              marginBottom: 5,
            }}
          >
            @Partiaf
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#ccc",
              fontWeight: "400",
              marginBottom: 10,
            }}
          >
            Los mejores eventos, solo en Partiaf 😎
          </Text>
        </DefaultView>
      </DefaultView> 
    </DefaultView>
  );
};
export default Moments;
