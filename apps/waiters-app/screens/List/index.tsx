import React, { useEffect, useState } from 'react'
import {View, Text} from 'react-native'
import axios from 'axios';
import Card from '../../components/Card';
const List = () => {
  
  const [covers, setCovers] = useState([]);
  const loadCovers = async() => {
    const {data} = await axios.get('https://partiaf-api.xyz/api/v3/goers/8824a9c3-8f34-40e7-8c29-32c2c243c9e5')
    console.log(data)
    setCovers(data)
  }
  
  useEffect(() => {
    loadCovers();
  }, [])
  return (
    <View style={{
      padding: 10,
      backgroundColor: '#fff',
      height: '100%',
    }}>
      {covers?.map((cover:any) => {
        return(
          <Card key={cover.uuid} name={cover.name} date={cover.date} type={cover.amount}  />
          // <Text>Cantidad: {cover.amount}</Text>  
        )
      })}
    </View>
  )
}

export default List
