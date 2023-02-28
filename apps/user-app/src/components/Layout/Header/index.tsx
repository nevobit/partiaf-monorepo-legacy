import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/AppNavigator";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
  openModal?: any
  back?: boolean;
  wallet?: boolean;
  ticket?: boolean;
};

const Header = ({ navigation, openModal, back, wallet, ticket }: Props) => {
  
    return (

<View style={styles.header}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-arrow-back"
          style={{ fontWeight: "100", fontSize: 26 }}
        />
  </TouchableOpacity>
      ): (
        <TouchableOpacity onPress={() => openModal(true)}>
        <Ionicons
          name="ios-location-outline"
          style={{ fontWeight: "100", fontSize: 26 }}
        />
  </TouchableOpacity>
      )}
      
  
        
        <Image
          source={{ uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png" }}
          style={{
            marginLeft: 23,
            marginTop: 4,
            width: 120,
            height: 20,
            resizeMode: "contain",
          }}
        />
        <View style={styles.header_left}>
          {!wallet ? (
              <TouchableOpacity onPress={
                () => navigation.navigate("Wallet", { user: "" })
            }>
            <Ionicons
              name={"ios-wallet-outline"}
              style={{ fontWeight: "100", fontSize: 26 }}
            />
            </TouchableOpacity>
          ): null}
        
          {!ticket ? (
              <TouchableOpacity onPress={() =>
                navigation.navigate("Tickets", { user: "" })
                
              }
              style={{
                marginLeft: 10
              }}>
              <Ionicons
                name={"ios-qr-code-outline"}
                style={{ fontWeight: "100", fontSize: 26 }}
              />
            </TouchableOpacity>
          ): null}
        
        </View>
      </View>
      
    )
        }
        
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
    
    export default Header;
    

      