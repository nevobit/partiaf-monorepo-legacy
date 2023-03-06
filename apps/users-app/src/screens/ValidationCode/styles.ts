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
      paddingHorizontal: 20,
      justifyContent: "space-between",
      marginTop:10,
    },
  });
  
  export default styles;