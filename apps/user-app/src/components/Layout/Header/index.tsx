import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/AppNavigator";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Header = ({ navigation }: Props) => {
  
    return (

<View style={styles.header}>
        <Ionicons
          name="ios-options-outline"
          style={{ fontWeight: "100", fontSize: 26 }}
        />
        <Image
          source={{ uri: "https://i.postimg.cc/DZL8VnL4/partiaf-single.png" }}
          style={{
            marginLeft: 23,
            marginTop: 4,
            width: 120,
            height: 20,
            resizeMode: "contain",
          }}
        />
        <View style={styles.header_left}>
          <Ionicons
            name={"ios-wallet-outline"}
            style={{ fontWeight: "100", fontSize: 23, marginRight: 10 }}
          />
          <TouchableOpacity onPress={() =>
              navigation.navigate("Tickets", { user: "" })
            }>
            <Ionicons
              name={"ios-qr-code-outline"}
              style={{ fontWeight: "100", fontSize: 23 }}
            />
          </TouchableOpacity>
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
    

      