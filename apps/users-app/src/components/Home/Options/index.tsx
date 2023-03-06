import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../Layout/Theme/colors";
import { useTheme } from "../../../contexts/ThemeContext";
import options from "./options";

const Options = ({type, setType}:any) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomColor: "rgba(0,0,0,0.1)",
        borderBottomWidth: 1,
      }}
    >
      {options.map((option) => {
        return (
          <TouchableOpacity
          key={option.type}
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onPress={() => setType(option.type)}
          >
            <Ionicons
              style={{
                fontSize: 23,
                color:
                  type == option.type
                    ? colors.dark.primary
                    : colors[theme].text,
              }}
              name={option.icon}
            />
            <Text
              style={{
                fontSize: 14,
                color:
                  type == option.type
                    ? colors.dark.primary
                    : colors[theme].text,
              }}
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Options;
