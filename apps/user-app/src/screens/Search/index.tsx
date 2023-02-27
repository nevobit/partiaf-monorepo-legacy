import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { GET_STORES } from '../../graphql/queries/stores';
import { Ionicons } from '@expo/vector-icons';
import { GET_USERS } from '../../graphql/queries/user';

const Search = ({navigation}: any) => {
    
    const [search, setSearch] = useState("");
    const [type, setType] = useState("users");
    
    const { data, loading, refetch } = useQuery(GET_USERS);
    const { data: stores, loading: loadingStores, refetch: refetchStores } = useQuery(GET_STORES);
    
    // allUsers
  return (
    <SafeAreaView>
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
                paddingLeft:40,
                
            }} value={search} placeholder='Buscar' placeholderTextColor="#909090" onChangeText={(text) => setSearch(text)} />

            </View>
            <View style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{display: 'flex', borderRadius: 50, height:45, backgroundColor: "rgba(0,0,0,.05)", marginTop: 15, width: '95%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setType('users')} style={{backgroundColor: type== 'users'? '#ffffff': 'transparent',  height: 35, borderRadius: 50, width: 210, paddingBottom:10}}>
                    <Text style={{textAlign: 'center',  paddingTop:5,fontSize:16}}>Usuarios</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('stores')} style={{ backgroundColor: type== 'stores'? '#ffffff': 'transparent', height: 35,  borderRadius: 50, width: 210, paddingBottom:10}}>
                    <Text style={{textAlign: 'center', paddingTop:5, fontSize:16}}>Establecimientos</Text>
                </TouchableOpacity>
            </View>
            </View>
            
            {search.length == 0? 
                
                (
                   
               <View style={{ display: 'flex', height:"30%", alignItems: 'center', justifyContent: 'center'}} >
                   <Text style={{fontSize: 18}} >No hay busquedas.</Text>
               </View>
               )   : null}
            
            {type == 'users'? (
                
            <ScrollView style={{
                height: '100%',
                padding: 20
            }}>
                {search.length > 0 && data?.allUsers.filter((user:any) => user.username.toLowerCase().includes(search.toLowerCase()) || user?.firstname?.toLowerCase().includes(search.toLowerCase()) ).map((user:any) => {
                    return (
                        
                    <TouchableOpacity 
                    key={user.uuid}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10
                    }}
                    onPress={() => navigation.navigate("OtherProfile", {uuid: user.uuid})}
                    >
                        <View 
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 10,
                          }}>
                        <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 50,
                    resizeMode: "cover",
                  }}
                  source={{
                    uri: user.photo[0]
                      ? user.photo[0]
                      : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                  }}
                />
                        </View>
                        <Text style={{
                                fontWeight: '600',
                                fontSize: 16
                            }}>
                        {user.username}
                            
                        </Text>
                    </TouchableOpacity>
                    )
                    
                })}
            </ScrollView>
            ): (
                <ScrollView style={{
                    height: '100%',
                    padding: 20
                }}>
                    {search.length > 0 && stores?.getAllStores.filter((user:any) => user.name.toLowerCase().includes(search.toLowerCase())).map((user:any) => {
                        return (
                            
                        <TouchableOpacity style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10
                        }}
                    key={user.uuid}
                         
                        onPress={() =>
                            navigation.navigate("Store", { store: user.uuid })
                          } >
                            <View 
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 50,
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: 10,
                              }}>
                            <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                        resizeMode: "cover",
                      }}
                      source={{
                        uri: user.photos[0]
                          ? user.photos[0]
                          : "https://i.postimg.cc/0jMMGxbs/default.jpg",
                      }}
                    />
                            </View>
                            <View>
                                
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16
                            }}>
                            {user.name}
                                
                            </Text>
                            <Text style={{
                                fontSize: 16
                            }}>
                            {user.type}
                                
                            </Text>
                            </View>
                            
                        </TouchableOpacity>
                        )
                        
                    })}
                </ScrollView>
            )}
          
            
    </SafeAreaView>
  )
}

export default Search
