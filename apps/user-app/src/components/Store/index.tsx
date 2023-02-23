import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Share,
  TouchableOpacity,
} from "react-native";
import { IStore } from "../../types";

const Store = ({ name, type, photos }: IStore) => {
  const shareStore = async () => {
    try {
      await Share.share({
        message: `En partiaf ${name}`,
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontWeight: "900", fontSize: 18 }}>
            {name} -{" "}
            <Text
              style={{
                fontWeight: "500",
                color: "rgba(0,0,0, 0.5)",
                fontSize: 14,
              }}
            >
              {type}
            </Text>
          </Text>
          <Text style={{ fontWeight: "500", color: "rgba(0,0,0,.3)" }}>
            Santa Marta, Colombia
          </Text>
        </View>

        <View style={styles.dots}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          source={{ uri: photos[0] }}
          style={{
            marginTop: 10,
            width: "100%",
            resizeMode: "cover",
            height: 500,
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          marginTop: 8,
          marginLeft: 20,
          marginRight: 20,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-star-outline" style={{ fontSize: 23 }} />
          <Text style={{ marginLeft: 5, fontWeight: "500" }}>0</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-chatbubbles-outline" style={{ fontSize: 23 }} />
          <Text style={{ marginLeft: 5, fontWeight: "500" }}>0</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-heart-outline" style={{ fontSize: 23 }} />
          <Text style={{ marginLeft: 5, fontWeight: "500" }}>Save</Text>
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={shareStore}
        >
          <Ionicons name="ios-share-outline" style={{ fontSize: 23 }} />
          <Text style={{ marginLeft: 5, fontWeight: "500" }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tabItem: {
    width: 60,
  },
  tabBarText: {
    fonstSize: 10,
    fontWeight: "700",
  },
  actionsButton: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 21,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    display: "flex",
    flexDirection: "row",
  },
  dot: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 5,
    width: 5,
    borderRadius: 50,
    marginLeft: 4,
  },
});

export default Store;
