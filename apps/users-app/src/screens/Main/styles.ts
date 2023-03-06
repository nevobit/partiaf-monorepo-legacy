import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,1)",
        zIndex: 1
        
      },
      imageContainer: {
        height: "100%",
        width: '100%',
        position: "absolute",
        top: -40,
        zIndex: 1
        
      },
    image: {
      width: '100%',
        height: "100%",
        resizeMode: "cover",
        zIndex: 1
      },
      footer: {
        position: "absolute",
        bottom: 25,
        display: "flex",
        width: "100%",
        paddingHorizontal: 20,
        zIndex:2
      },
      textBig:{
        color: "#fff",
        fontSize: 50,
        fontWeight: "700",
        textAlign: "left",
      },
      textMedium:{
        color: "gray",
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
        marginBottom: 20,
        textAlign: "left",
      },
      registerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
      },
      textRegister: {
        color: "gray",
        fontSize: 16,
        marginRight: 10,
        marginVertical: 20,
      }
})

export default styles;