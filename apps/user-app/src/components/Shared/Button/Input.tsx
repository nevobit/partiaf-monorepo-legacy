import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface Props {
  text?: string | undefined;
  onPress?: any;
  color?: string | undefined;
  textColor?:string | "#333";
}
const Button = ({ text, textColor, color, onPress }: Props) => {
  return (
  
      <TouchableOpacity
        style={{
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 45,
          backgroundColor: color,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            width: "100%",
            fontSize: 16,
            fontWeight: "600",
            color: textColor,
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
  );
};

export default Button;
