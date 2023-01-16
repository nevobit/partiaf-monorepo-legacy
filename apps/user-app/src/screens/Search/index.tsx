import { useQuery } from '@apollo/client';
import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { GET_STORES } from '../../graphql/queries/stores';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View>
          <View style={{
                justifyContent: 'center',
                alignItems:'center',
                width:'100%',
                paddingVertical: 10,
                position: 'relative',
                marginTop: 12,
            }}>

                <Ionicons name="ios-search-outline" style={{fontSize: 18, opacity: 0.7, position: 'absolute', zIndex: 1, left: 25}} />
                
            <TextInput style={{
                width: '94%',
                backgroundColor: '#EBEBEB',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                padding: 4,
                paddingLeft:40
            }} placeholder='Buscar' placeholderTextColor="#909090" />

            </View>
            <View style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{display: 'flex', borderRadius: 50, height:45, backgroundColor: "rgba(0,0,0,.05)", marginTop: 15, width: '95%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: '#ffffff',  height: 35, borderRadius: 50, width: 210, paddingBottom:10}}>
                    <Text style={{textAlign: 'center',  paddingTop:5,fontSize:16}}>Usuarios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 35, borderRadius: 50, width: 210, paddingBottom:10}}>
                    <Text style={{textAlign: 'center', paddingTop:5, fontSize:16}}>Establecimientos</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={{display: 'flex', height:"70%", alignItems: 'center', justifyContent: 'center'}} >
                <Text style={{fontSize: 18}} >No hay busquedas.</Text>
            </View>
    </View>
  )
}

export default Search
