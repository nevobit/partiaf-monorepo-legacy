import React from 'react'
import { View as DefaultView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../../contexts/ThemeContext';
import colors from '../../Layout/Theme/colors';

const Select = ( {type, setType}:any) => {
  const { theme } = useTheme();
  return (
    
      <DefaultView
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <DefaultView
          style={{
            display: "flex",
            borderRadius: 10,
            height: 45,
            backgroundColor:
              theme == "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.05)",
            marginTop: 10,
            marginBottom: 10,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => setType(true)}
            style={{
              backgroundColor: type ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 10,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingTop: 5,
                fontSize: 16,
                color:
                  type
                    ? colors[theme].background
                    : colors[theme].text,
              }}
            >
              Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType(false)}
            style={{
              backgroundColor: !type ? "#ffffff" : "transparent",
              height: 35,
              borderRadius: 10,
              paddingBottom: 10,
              width: "50%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingTop: 5,
                fontSize: 16,
                color:
                  !type
                    ? colors[theme].background
                    : colors[theme].text,
              }}
            >
              Reservas
            </Text>
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
    
  )
}

export default Select
