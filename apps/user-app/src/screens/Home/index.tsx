import React from "react";
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import Store from "../../components/Store";
import { useQuery } from "@apollo/client";
import { GET_STORES } from "../../graphql/queries/stores";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Layout/Header";
import { TouchableOpacity, SafeAreaViewBase } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import Modal from "react-native-modal";
import {useState} from 'react';
import { Dimensions } from 'react-native'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const { data, loading } = useQuery(GET_STORES);
  const [modal, setModal] = useState(false)
  const [type, setType] = useState('')

  const [location, setLocation] = useState("");
  
  const [store, setStore] = useState({})

const halfWindowsHeight = Dimensions.get('window').height
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", marginTop: StatusBar.currentHeight, height: halfWindowsHeight }}>
        
      <Header openModal={setModal} navigation={navigation} />
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        marginTop: 5,
      }} >
        <TouchableOpacity style={{
          display: 'flex',
          alignItems: 'center',
        }}
        onPress={() => setType('')}
        >
          
        <Ionicons style={{
          fontSize: 25
        }} name="ios-grid-outline" />
        <Text style={{
          fontSize:16
        }}>Todo</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{
          display: 'flex',
          alignItems: 'center',
        }}
        onPress={() => setType('bar')}
        >
          
        <Ionicons style={{
          fontSize: 25
        }} name="ios-wine-outline" />
        <Text style={{
          fontSize:16
        }}>Bares</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          display: 'flex',
          alignItems: 'center',
        }}
        onPress={() => setType('Discoteca')}
        >
          
        <Ionicons style={{
          fontSize: 25
        }} name="ios-disc-outline" />
        <Text style={{
          fontSize:16
        }}>Disoctecas</Text>
        </TouchableOpacity>
<TouchableOpacity style={{
          display: 'flex',
          alignItems: 'center',
        }}
        onPress={() => setType('Gastrobar')}
        >
  
        <Ionicons style={{
          fontSize: 25
        }} name="ios-beer-outline" />
        <Text style={{
          fontSize:16
        }}>Gastrobares</Text>
</TouchableOpacity>

      </View>
      {data?.getAllStores?.filter((store: IStore) => store.type.toLowerCase().includes(type.toLowerCase())).length < 1 && (
      <Text style={{
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        height: '100%',
        marginTop: 50
      }}> No hay resultados </Text>  
      )}
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ marginBottom: 50 }}>
        {data?.getAllStores?.filter((store: IStore) => store.type.toLowerCase().includes(type.toLowerCase())).map((store: IStore) => {
          return (
            <View   key={store.uuid}>
            <TouchableOpacity
            
              onPress={() =>
                navigation.navigate("Store", { store: store.uuid })
              }
              activeOpacity={1}
            >
              <Store
                uuid={store.uuid}
                photos={store.photos}
                name={store.name}
                type={store.type}
                phone={store.phone}
                navigation={navigation}
              />
              
            </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="fadeIn"
        style={{
        }}
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 500,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
              position: "relative",
            }}
          >
           
           <View style={{
            padding: 15,
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
           }}>
            <TouchableOpacity onPress={() => setModal(false)}>
                <Text><Ionicons name="ios-arrow-back-outline" style={{
                    fontSize: 40
                }} /></Text>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: '600'
            }}>Ingresar tu ubicacion</Text>
            
            <TouchableOpacity onPress={() => setModal(false)}>
                <Text><Ionicons name="ios-arrow-back-outline" style={{
                    fontSize: 40,
                    color: "white"
                }} /></Text>
            </TouchableOpacity>
           </View>
            <View style={{
              padding: 10,
              paddingHorizontal: 20
            }} >  
            
            <GooglePlacesAutocomplete 
          query={{ key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'}}
          onPress={(data, details = null) => {
            console.log(data.description)
          }}
          placeholder="Buscar direccion"
          styles={
            {
              textInput: {
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)'
              }
            }
          }
        />
            </View>
          </View>
        </View>
      </Modal>
      
    </SafeAreaView>
  );
};

export default Home;

