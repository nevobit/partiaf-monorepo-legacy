import React, { useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_COVERS } from "../../graphql/queries/covers";
import { DivisaFormater } from "../../utilities/divisaFormater";
import { GET_STORE } from '../../graphql/queries/stores/index';
import Header from "../../components/Layout/Header";

const Covers = ({ route, navigation }: any) => {
  const { data:store, loading:loadiingStore, error:errorStore } = useQuery(GET_STORE, {
    variables: { uuid: route.params.store },
  });
  
  const { data, loading, error } = useQuery(GET_COVERS, {
    variables: { uuid: route.params.store },
  });
  
  const [amount, setAmount] = useState(0);
  const [coverSelected, setCoverSelected] = useState<any>({});
  
  const setPeopleHandler = async (type: string, cover: any) => {
    setCoverSelected(cover)
    if (type == "+") {
      if (coverSelected.uuid != cover.uuid) {
        setAmount(1);
      } else {
        if (coverSelected.limit > amount) {
          setAmount(prev => prev + 1);
        }
      }
    } else {
      if (coverSelected.uuid != cover.uuid) {
        setAmount(0);
      } else {
        if (amount > 0) {
          setAmount(prev => prev - 1);
        }
      }
    }
    // persistLocalStorage("coverInfo", {
    //   store_name: data?.getStore.name,
    //   storeId: id,
    //   id: coverSelected._id,
    //   people: people + 1,
    //   price: coverSelected.price,
    // });
  };
  
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />
      <View
        style={{
          width: "100%",
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            {store?.getStoreById?.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(0,0,0,0.7)",
            }}
          >
            {store?.getStoreById?.type}
          </Text>
          <Text>
            {" "}
            <Ionicons
              name="ios-star-outline"
              style={{ fontWeight: "100", fontSize: 16 }}
            />
            4.24
          </Text>
        </View>
        <TouchableOpacity>
          <View style={{ display: "flex" }}>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.7)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "rgba(0,0,0,.8)",
                borderRadius: 50,
                margin: 3,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          height: '100%',
          borderBottomColor: "rgba(0, 0, 0,.03)",
          borderBottomWidth: 1,
          padding: 10,
          paddingHorizontal: 20,
          display: "flex",

          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {data?.getCoversById.length < 1 && <Text style={{
          fontSize: 20,
          fontWeight: '500',
          textAlign: "center",
          width: '100%',
          marginTop: 10
        }}>No hay tickets</Text>}
        {data?.getCoversById?.map((cover: any) => {
          return (
            <TouchableOpacity
              key={cover.uuid}
              style={{
                marginBottom: 10,
                borderBottomColor: "rgba(0,0,0,0.1)",
                borderBottomWidth: 1,
                width: "100%",
              }}
              onPress={() => setCoverSelected(cover)}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 22 }}>
                  Cover <Text style={{ fontWeight: "600" }}>{cover.type} </Text>
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                  {cover.price > 0 ? DivisaFormater(cover.price) : "GRATIS"}
                </Text>
              </View>
              <Text style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "600" }}>{cover.name}</Text>{" "}
                {cover.description}
              </Text>
              <View style={{ marginTop: 15, marginBottom: 10, display: 'flex',flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontWeight: "600" }}>Cupos:</Text>{" "}
                    {cover.limit}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontWeight: "600" }}>Fecha:</Text>{" "}
                    {cover.date}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontWeight: "600" }}>Hora:</Text>{" "}
                    {cover.hour}
                  </Text>
                </View>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <TouchableOpacity 
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderRadius: 5,
                    padding: 3
                  }}
                  onPress={() => setPeopleHandler('-', cover)}>
                    <Ionicons
                      name="ios-remove"
                      style={{ fontWeight: "100", fontSize: 26 }}
                    />
                  </TouchableOpacity>
                  <Text
                   style={{
                    padding: 15,
                    fontSize: 18
                  }}>{coverSelected.uuid == cover.uuid? amount : 0}</Text>
                  <TouchableOpacity 
                   style={{
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderRadius: 5,
                    padding: 3
                  }}
                  onPress={() => setPeopleHandler('+', cover)}>
                    <Ionicons
                      name="ios-add"
                      style={{ fontWeight: "100", fontSize: 26 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Covers;

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
