import React from 'react'
import QRCode from "react-native-qrcode-svg";
import { View as DefaultView, TouchableOpacity, Text } from 'react-native';
import colors from '../../Layout/Theme/colors';
import { useTheme } from '../../../contexts/ThemeContext';

const Card = ({logo, setOpenModalQr, setModal, item, setCoverSelected}:any) => {
  const {theme} = useTheme();
    return (
      <DefaultView>
        
    <DefaultView
    key={item.uuid}
    style={{
      borderWidth: 1,
      borderColor: colors[theme].border,
      height: 100,
      borderRadius: 5,
      marginBottom: 10,
      position: "relative",
      paddingLeft: 15,
      paddingRight: 15,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <DefaultView
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: 10,
        backgroundColor:
          item.status == "in line"
            ? theme == "dark"
              ? "rgba(255,255,255,0.2)"
              : "rgba(0,0,0,0.1)"
            : item?.status == "cancelled"
            ? "red"
            : "green",
      }}
    ></DefaultView>
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      }}
      onPress={() => {
        setCoverSelected(item);
        setOpenModalQr(true);
      }}
    >
      <QRCode
        size={80}
        logo={logo}
        logoSize={25}
        logoBackgroundColor="#000"
        logoBorderRadius={50}
        value={JSON.stringify({cost:item.cost,amount:item.amount, date: item.date, time: item.time, name: item.name, status: item.status})}
      />
      <DefaultView
        style={{
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            color: colors[theme].text,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 12,
              color: colors[theme].text,
            }}
          >
            Nombre:
          </Text>{" "}
          {item?.name}
        </Text>
        <Text
          style={{
            color: colors[theme].text,
          }}
        >
          <Text
            style={{ fontWeight: "600", color: colors[theme].text }}
          >
            Fecha:
          </Text>{" "}
          {item?.date?.substring(0,10)}
        </Text>
        <Text
          style={{
            color: colors[theme].text,
          }}
        >
          <Text
            style={{ fontWeight: "600", color: colors[theme].text }}
          >
            Hora:
          </Text>{" "}
          {item?.time}
        </Text>
      </DefaultView>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        backgroundColor: colors[theme].holderColor,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
      }}
      onPress={() => {
        setCoverSelected(item);
        setModal(true);
      }}
    >
      <Text>Detalles</Text>
    </TouchableOpacity>
  </DefaultView>
  </DefaultView>
  
  )
}

export const BookingCard = ({logo, setOpenModalQr, setModal, item, setCoverSelected}:any) => {
  const {theme} = useTheme();
    return (
    <DefaultView
    key={item.uuid}
    style={{
      borderWidth: 1,
      borderColor: colors[theme].border,
      height: 100,
      borderRadius: 5,
      marginBottom: 10,
      position: "relative",
      overflow: "hidden",
      paddingLeft: 15,
      paddingRight: 15,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <DefaultView
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: 10,
        backgroundColor:
          item.status == "in line"
            ? theme == "dark"
              ? "rgba(255,255,255,0.2)"
              : "rgba(0,0,0,0.1)"
            : item?.status == "cancelled"
            ? "red"
            : "green",
      }}
    ></DefaultView>
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      }}
      onPress={() => {
        setCoverSelected(item);
        setOpenModalQr(true);
      }}
    >
      <QRCode
        size={80}
        logo={logo}
        logoSize={25}
        logoBackgroundColor="#000"
        logoBorderRadius={50}
        value={JSON.stringify({cost:item.cost,amount:item.amount, date: item.date, time: item.time, name: item.name, status: item.status})}
      />
      <DefaultView
        style={{
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            color: colors[theme].text,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 12,
              color: colors[theme].text,
            }}
          >
            Nombre:
          </Text>{" "}
          Reserva
        </Text>
        <Text
          style={{
            color: colors[theme].text,
          }}
        >
          <Text
            style={{ fontWeight: "600", color: colors[theme].text }}
          >
            Fecha:
          </Text>{" "}
          {item?.date?.substring(0,10)}
        </Text>
        <Text
          style={{
            color: colors[theme].text,
          }}
        >
          <Text
            style={{ fontWeight: "600", color: colors[theme].text }}
          >
            Hora:
          </Text>{" "}
          {item?.time}
        </Text>
      </DefaultView>
    </TouchableOpacity>
  </DefaultView>
  )
}

export default Card
