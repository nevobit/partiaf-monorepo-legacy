import React, { useState, useEffect } from 'react'
import { Text, View, Alert, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BarCodeScanner } from 'expo-barcode-scanner'

// import ScannerBorderIcon from '../../assets/scannerBorder.svg'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScannerBorderIcon = require('../../assets/scannerBorder.svg')
const Camera = () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [info, setInfo] = useState({})

  const navigation = useNavigation()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    navigation.setOptions({
      headerShown: false
    })

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }:any) => {
    setScanned(true)
    setInfo(JSON.parse(data));
    console.log(JSON.parse(data))
    alert(`Evento: ${JSON.parse(data).name}\nValor pagado: ${JSON.parse(data)?.cost?.toLocaleString("en-US", {
      style: 'currency',
  currency: 'USD',
    })}\nCantidad de personas: ${JSON.parse(data).amount}\nHora: ${JSON.parse(data).time}\nFecha: ${JSON.parse(data).date}  `)
  }
  
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No tiene acceso a la camara</Text>
  }

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='ios-close' />
      </TouchableNativeFeedback>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      >
        <View style={styles.border}>
          {/* <ScannerBorderIcon width={300} height={300} /> */}
        </View>
      </BarCodeScanner>
      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000512'
  },
  scanner: {
    width: '100%',
    height: '100%',
  },
  border: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  xIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
    width: 30,
    height: 30,
    borderRadius: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Camera