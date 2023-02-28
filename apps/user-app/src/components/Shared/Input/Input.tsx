import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon?: any;
  placeholder?: string | undefined;
  secureTextEntry?: boolean | undefined;
  value?: string | undefined;
  onChangeText?: (text: string) => void;
}
const Input = ({value, icon, placeholder, onChangeText, secureTextEntry}: Props) => {

  return (     
      <View style={{
        width: '100%',
      }}>
        <View
          style={{
            height: 50,
            width: "100%",
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#fff",
            borderWidth:1, borderColor: 'rgba(0,0,0,.1)'
          }}
        >
          {icon? (
          <Ionicons
          name={icon}
          style={{ fontSize: 25, color: "#000", marginRight: 10 }}
        />  
          ): null}
          
          <TextInput
          placeholderTextColor={'rgba(0,0,0,0.4)'}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
            style={{  width: "100%", padding: 10, height: 35, fontSize: 14}}            
          />
        </View>
      </View>
      
  );
};

export default Input;
