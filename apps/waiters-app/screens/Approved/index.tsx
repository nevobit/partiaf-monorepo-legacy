import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import Card from "../../components/Card";
import SelectDropdown from "react-native-select-dropdown";
import { useSelector } from "react-redux";
import { useQuery } from '@apollo/client';
import { GET_COVERS_BY_ID } from "../../graphql/queries/covers";

const Approved = () => {
  
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
    <View
      style={{
        padding: 10,
        backgroundColor: "#fff",
        height: "100%",
        width: '100%',
      }}
    >
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
      {covers.filter((cover:any) => cover.status == 'into')?.map((cover: any) => {
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
    </View>
  );
};

export default Approved;
