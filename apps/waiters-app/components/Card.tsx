import React from 'react'
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({name, type, date}:any) => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    }}>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>Cantidad: {type}</Text>
        <Text>{date}</Text>
      </View>
      <View>
        <Ionicons style={{
            fontSize: 24
        }} name="ios-checkmark" />
      </View>
    </View>
  )
}

export default Card
