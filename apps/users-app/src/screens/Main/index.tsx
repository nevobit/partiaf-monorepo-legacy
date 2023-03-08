import React from "react";
import {
  Image,
  Text,
  View as DefaultView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { View } from "../../components/Layout/Theme";
import colors from "../../components/Layout/Theme/colors";
import Button from "../../components/Shared/Button";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";

const image = require("../../assets/onboarding.jpg");

const Main = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <DefaultView style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </DefaultView>
      <DefaultView style={styles.footer}>
        <Text style={styles.textBig}>
          Uniendo a la gente, una fiesta a la vez.
        </Text>
        <Text style={styles.textMedium}>
          Inicia sesión con tu cuenta para continuar
        </Text>
        <Button
          text="Únete a la fiesta"
          onPress={() => navigation.navigate('Signin')}
          style={{
            zIndex: 5,
          }}
        />
        <DefaultView style={styles.registerContainer}>
          <Text
            style={styles.textRegister}
          >
            ¿No tienes una cuenta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: colors.dark.primary,
                fontSize: 16,
              }}
            >
              Regístrate ahora
            </Text>
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
    </View>
  );
};

export default Main;
