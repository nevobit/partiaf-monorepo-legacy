import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { useTheme } from '../../../contexts/ThemeContext'
import colors from '../../Layout/Theme/colors'

const ModalBottom = ({height, modal, setModal, children}: any) => {
    const {theme} = useTheme();
  
    return (
    <Modal
    onSwipeStart={() => setModal(false)}
    style={{
      justifyContent: "flex-end",
      margin: 0,
    }}
    animationOut="slideOutDown"
    isVisible={modal}
    swipeDirection={["down"]}
    onBackButtonPress={() => setModal(false)}
    onBackdropPress={() => setModal(false)}
    >
      <View style={{
        backgroundColor: colors[theme].modal,
        height: height,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderColor: "rgba(0,0,0,0.1)",
        position: "relative",
        padding: 20,
      }}>
         <View style={{
        position: 'absolute',
        top: 15,
        left: '47%',
        width: 35,
        height: 5,
        backgroundColor: colors[theme].holderColor,
        borderRadius: 50
      }}>
        
      </View>
      
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
        {children}
      </View>
      </View>
    </Modal>
  )
}

export default ModalBottom
