import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View as DefaultView,
  FlatList,
} from "react-native";
import Header from "../../components/Layout/Header";
import { View } from "../../components/Layout/Theme";
import Options from "../../components/Home/Options";
import colors from "../../components/Layout/Theme/colors";
import { useTheme } from "../../contexts/ThemeContext";
import { GET_STORES } from "../../graphql/queries/stores";
import { useQuery } from "@apollo/client";
import StoreCard from "../../components/Home/StoreCard";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Modal from "react-native-modal";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

const googleApi = "AIzaSyBnKEeH6uKbDgmXKEwg4ViFSQ9eRc_gVNs";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


const Home = ({ navigation }: Props) => {
  const { theme } = useTheme();
  const { data, loading, error } = useQuery(GET_STORES);
  
  const [type, setType] = useState("");
  const [modal, setModal] = useState(false);
  const [city, setCity] = useState("");
  
  return (
    <View>
      <Header openModal={setModal} navigation={navigation} />
      <Options type={type} setType={setType} />
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 200 }}
          size="large"
          color={colors[theme].text}
        />
      ) : (
        <DefaultView style={{
          height: '100%'
        }}>
          <FlatList
            data={data.getAllStores.filter((store:any) =>  store.type.toLowerCase().includes(type.toLocaleLowerCase()) )}
            renderItem={({ item }) => (
              <StoreCard navigation={navigation} {...item} />
            )}
            keyExtractor={(item) => item.uuid}
          />
        </DefaultView>
      )}

      <Modal
        onSwipeComplete={() => setModal(false)}
        animationIn="fadeIn"
        isVisible={modal}
        swipeDirection={["down"]}
      >
        <DefaultView
          style={{
            backgroundColor: colors[theme].modal,
            height: '100%',
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <DefaultView
            style={{
              width: "100%",
              height: '100%',
              paddingTop: 20,
              position: "relative",
            }}
          >
            <DefaultView
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => setModal(false)}>
                <Text>
                  <Ionicons
                    name="ios-arrow-back-outline"
                    style={{
                      fontSize: 30,
                      color: colors[theme].text
                    }}
                  />
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: colors[theme].text
                }}
              >
                Ingresar tu ciudad
              </Text>

              <TouchableOpacity onPress={() => setModal(false)}>
                <Text>
                  <Ionicons
                    name="ios-arrow-back-outline"
                    style={{
                      fontSize: 30,
                      color: colors[theme].modal
                    }}
                  />
                </Text>
              </TouchableOpacity>
            </DefaultView>
            <DefaultView
              style={{
                padding: 10,
                paddingHorizontal: 20,
                flex: 1,
              }}
            >
              <GooglePlacesAutocomplete
                query={{ key: googleApi }}
                onPress={(data, details = null) => {
                  setCity(data?.structured_formatting.main_text)
                  setModal(false)
                }}
                placeholder="Buscar ciudad"
                styles={{
                  textInput: {
                    borderWidth: 1,
                    color: colors[theme].text,
                    borderColor: "rgba(0,0,0,0.2)",
                    backgroundColor: colors[theme].holderColor,
                    zIndex: 10
                  },
                }}
              />
            </DefaultView>
          </DefaultView>
        </DefaultView>
      </Modal>
    </View>
  );
};

export default Home;
