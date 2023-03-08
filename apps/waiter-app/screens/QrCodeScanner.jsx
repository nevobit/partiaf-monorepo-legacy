import React, { useState, useEffect } from 'react'
import { Text, View, Alert, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BarCodeScanner } from 'expo-barcode-scanner'

import ScannerBorderIcon from '../assets/scannerBorder.svg'
import XIcon from '../assets/x.svg'
import { variables } from '../theme'
import { DivisaFormater } from '../utils/divisaFormater'


const QrCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null)
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

  const handleBarCodeScanned = ({ type, data }) => {
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
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => navigation.goBack()}
      >
        <View style={styles.xIcon} >
          <XIcon width={20} height={20} color={variables.iconPrimary} />
        </View>
      </TouchableNativeFeedback>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      >
        <View style={styles.border}>
          <ScannerBorderIcon width={300} height={300} />
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
    backgroundColor: variables.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default QrCodeScanner