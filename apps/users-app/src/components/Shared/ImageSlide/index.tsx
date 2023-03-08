import React from "react";
import {
  View,
  Image,
} from "react-native";

const noImage = "https://i.postimg.cc/KvqHch4Q/No-Store-300-Icon.png";

const ImageSlide = (data: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 400,
        overflow: "hidden",
        width: "100%",
        backgroundColor: 'black',
      }}
    >
       <Image
            source={{ uri: data.data[0]? data.data[0] : noImage }}
            style={{
              width: "100%",
              height: 400,
            }}
            resizeMode="cover"
          />
      
    </View>
  );
};

export default ImageSlide;
