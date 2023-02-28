import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        marginTop: 4,
        width: 200,
        height: 40,
        resizeMode: "contain",
      },
    header_left: {
      display: "flex",
      flexDirection: "row",
    },
    header: {
      flexDirection: "row",
      height: 50,
      justifyContent: "space-between",
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
  });
  
  export default styles;