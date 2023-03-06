import { SafeAreaView, StatusBar, StyleProp, useColorScheme, useWindowDimensions, View as DefaultView, ViewStyle } from "react-native";
import  Colors  from "./colors";
import { ReactNode } from 'react';
import { useTheme } from "../../../contexts/ThemeContext";

interface Props {
    style?: StyleProp<ViewStyle>
    children: ReactNode
}

export const View = ({style, children}: Props) => {
    const {theme} = useTheme();
    
    return (
            
        <SafeAreaView style={[{width:'100%', height: '100%', backgroundColor: Colors[theme].background}, style]}>           
            {/* <StatusBar barStyle={theme == 'dark'? 'light-content' : 'dark-content'} /> */}
            {children}
        </SafeAreaView>
        
    )
}