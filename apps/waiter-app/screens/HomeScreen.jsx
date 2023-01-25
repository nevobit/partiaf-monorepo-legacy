import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';

import useHideHeader from '../hooks/useHideHeader';

import CoverItem from '../components/CoverItem'
import Dropdown from '../components/Dropdown'
import CoverCount from '../components/CoverCount'

import LogoIcon from '../assets/logo-partiaf-neg.svg'
import CheckIcon from '../assets/checkCircle.svg'
import ScanIcon from '../assets/scan.svg'

import { theme, variables } from '../theme';
import data from '../data/covers';

const HomeScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined)

  useHideHeader();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <LogoIcon width={180} height={40} color={variables.iconPrimary} />
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('aproved-covers')}
          >
            <CheckIcon width={30} height={30} color={variables.iconPrimary} />
          </TouchableNativeFeedback>
        </View>

        <Dropdown setSelected={setSelected} data={Object.values(data)} defaultOption />
        
        <View style={styles.body}>
          <View style={styles.head}>
            <Text style={styles.title}>Odisea</Text>
            <Text style={styles.subtitle}>Covers</Text>
            <CoverCount selected={selected} data={data} />
          </View>

          <View>
            { selected && data[selected].data.map((data) => (
              <CoverItem {...data} key={data.cc} />
            ))}
          </View>
        </View>
      </ScrollView>

      <LinearGradient
        colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,1)']}
        style={styles.gradient}
      />

      <View style={styles.buttonsContainer}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('qr-code-scanner')}
        >
          <View style={styles.button}>
            <ScanIcon
              width={30}
              height={30}
              color={variables.backgroundPrimary}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: theme.screenPrimary,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  logo: {
    height: 40,
    width: 185
  },
  select: {
    position: 'relative',
  },
  body: {
    marginTop: 10,
    marginBottom: 25
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  title: theme.title,
  subtitle: theme.subtitle,
  gradient: theme.gradientPrimary,
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: theme.roundButton
})

export default HomeScreen