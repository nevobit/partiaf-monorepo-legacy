import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import colors from "../../Layout/Theme/colors";

interface Props extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
}


const Button = ({ text, style, textStyle, ...props }: Props) => {
  return (
      <TouchableOpacity {...props} style={[style, {
        width: "100%",
        padding: 15,
        borderRadius: 5,
        backgroundColor: colors.dark.primary
      }]}>
        <Text style={[{textAlign: 'center', color: '#333', fontSize: 20, fontWeight: '500'}, textStyle]}>{text}</Text>
      </TouchableOpacity>
  );
};

export default Button;
