import { useQuery } from '@apollo/client';
import React from 'react'
import { Text, View } from 'react-native'
import { GET_STORES } from '../../graphql/queries/stores';

const Search = () => {
  const {data, loading} = useQuery(GET_STORES);
  console.log({data})
  console.log({loading})
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default Search
