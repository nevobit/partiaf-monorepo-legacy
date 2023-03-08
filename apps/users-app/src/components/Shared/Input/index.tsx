import { useState, ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { useTheme } from '../../../contexts/ThemeContext';
import colors from "../../Layout/Theme/colors";

interface Props {
  icon?: ComponentProps<typeof Ionicons>["name"];
  isPassword?: boolean;
  label?: string
}

type InputProps = TextInputProps & Props;

const Input = ({ label, icon, isPassword, ...props }: InputProps) => {
  const {theme} = useTheme()
  
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={{
      marginVertical: 5
    }}>
      {label && (
        <Text style={{
          fontWeight: '600',
          fontSize: 16,
          marginBottom:10,
          color: colors[theme].text
        }}>{label}</Text>        
      )}
    <View style={[styles.container, {backgroundColor: colors[theme].tint, borderColor: colors[theme].border}]}>
       <Ionicons
          style={{
            fontSize: 25,
            marginLeft: 10,
            color: colors[theme].holderColor
          }}
            name={icon}
          />
      <TextInput 
      secureTextEntry={isPassword && hidePassword} placeholderTextColor={colors[theme].holderColor} style={{width: '100%',  fontSize: 16, padding: 10, height:'100%', color: colors[theme].text }} {...props} />
      {isPassword && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
          style={{
            fontSize: 25,
            color: colors[theme].holderColor
          }}
            name={hidePassword ? "ios-eye-off-outline" : "ios-eye-outline"}
          />
        </TouchableOpacity>
      )}
    </View>
    </View>
    
  );
};

export default Input;
