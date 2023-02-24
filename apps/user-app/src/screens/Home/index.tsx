import React from "react";
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IStore } from "../../types";
import Store from "../../components/Store";
import { useQuery } from "@apollo/client";
import { GET_STORES } from "../../graphql/queries/stores";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Layout/Header";
import { TouchableOpacity } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import Modal from "react-native-modal";
import {useState} from 'react';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const { data, loading } = useQuery(GET_STORES);
  const [modal, setModal] = useState(true)
  const [location, setLocation] = useState("")
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar animated={true} />
      <Header navigation={navigation} />
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
        }}>
          
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
        }}>
          
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
        }}>
          
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
        }}>
  
        <Ionicons style={{
          fontSize: 25
        }} name="ios-beer-outline" />
        <Text style={{
          fontSize:16
        }}>Gastrobares</Text>
</TouchableOpacity>

      </View>
      <ScrollView style={{ marginBottom: 50 }}>
        {data?.getAllStores?.map((store: IStore) => {
          return (
            <View
              key={store.uuid}
              onTouchEndCapture={() =>
                navigation.navigate("Store", { store: store.uuid })
              }
            >
              <Store
                photos={store.photos}
                name={store.name}
                type={store.type}
              />
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
            height: "55%",
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
            }}>Ingresar pin</Text>
            
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
            {/* <TextInput style={{
                height: 60,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                borderRadius: 5,
                padding: 10,
                marginBottom: 20,
                fontSize: 25
            }} value={location} /> */}
            
            <GooglePlacesAutocomplete 
          query={{ key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'}}
          placeholder="Buscar direccion"
        />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

