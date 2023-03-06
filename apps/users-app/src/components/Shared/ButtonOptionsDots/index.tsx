import React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Ionic from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '../../../contexts/ThemeContext';
import colors from '../../Layout/Theme/colors';

const ButtonOptionsDots = ({...props}: TouchableOpacityProps) => {
  const {theme} = useTheme();
  
  return (
    <TouchableOpacity {...props} style={{
      width: 50,
      height: 40,
      marginRight: -5
    }}>
      <View>
        <Ionic style={{
          fontSize: 20,          
          textAlign: 'right',
        }} color={colors[theme].text} name='dots-vertical' />
      </View>
    </TouchableOpacity>
  )
}

export default ButtonOptionsDots
