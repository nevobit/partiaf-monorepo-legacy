import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Input = () => {

  return (     
      <View style={{
        width: '100%',
      }}>
        <View
          style={{
            height: 50,
            width: "100%",
            padding: 10,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons
            name="ios-person-outline"
            style={{ fontSize: 25, color: "#000", marginRight: 10 }}
          />
          <TextInput
            style={{ width: "100%", height: 40, fontSize: 18}}            
          />
        </View>
      </View>
      
  );
};

export default Input;
