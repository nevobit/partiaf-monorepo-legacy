import React, { useEffect, useState } from "react";
import { View, Text,SafeAreaView } from "react-native";
import axios from "axios";
import Card from "../../components/Card";
import SelectDropdown from "react-native-select-dropdown";
import { useSelector } from "react-redux";
import { useQuery } from '@apollo/client';
import { GET_COVERS_BY_ID } from "../../graphql/queries/covers";
import { StatusBar } from "expo-status-bar";

const List = () => {
  
  const {waiter} = useSelector((state:any) => state.authWaiter)
  
  const [coverSelected, setCoverSelected] = useState<any>([]);
  const [covers, setCovers] = useState<any>([]);
  
  const {data, loading} =  useQuery(GET_COVERS_BY_ID,  {
    variables: { uuid: waiter.store },
  })
  console.log(coverSelected)
  const loadCovers = async (uuid:string) => {
    const { data } = await axios.get(
      `https://partiaf-api.xyz/api/v3/goers/${uuid}`
    );
    console.log(data);
    setCovers(data);
  };

  
  const coversHandler = (cover:any) => {
    setCoverSelected(cover);
    loadCovers(cover.uuid);
  }
  // useEffect(() => {
  //   loadCovers();
  // }, []);
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        width: '100%',
      }}
    >
      <StatusBar hidden={true} />
      <SelectDropdown
      buttonStyle={{
        width: '100%',
        borderRadius: 5
      }}
      dropdownStyle={{
        width: '95%',
      }}
      rowTextStyle={{
        height: 40,
        paddingTop: 10,
        fontWeight: '500'
      }}
        data={data?.getCoversById}
        onSelect={(selectedItem, index) => {
          coversHandler(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.name;
        }}
        rowTextForSelection={(item, index) => {
          return item.name;
        }}
        defaultButtonText="Selecciona un cover"
      />
      {covers?.map((cover: any) => {
        return (
          <Card
            key={cover.uuid}
            name={cover.name}
            date={cover.date}
            type={cover.amount}
          />
          // <Text>Cantidad: {cover.amount}</Text>
        );
      })}
    </SafeAreaView>
  );
};

export default List;
