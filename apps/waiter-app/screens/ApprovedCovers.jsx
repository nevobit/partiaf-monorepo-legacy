import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import useHideHeader from '../hooks/useHideHeader'

import CoverCount from '../components/CoverCount'
import Dropdown from '../components/Dropdown'
import CoverItem from '../components/CoverItem'

import ChevronLeftIcon from '../assets/chevronLeft.svg'
import CheckCircleIcon from '../assets/checkCircle.svg'
import ScanIcon from '../assets/scan.svg'
import SearchIcon from '../assets/search.svg'

import { theme, variables } from '../theme'
import data from '../data/covers'

const ApprovedCovers = ({ navigation }) => {
  const [selected, setSelected] = useState(null)
  useHideHeader()

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('home')}
          >
            <View  style={styles.back}>
              <ChevronLeftIcon width={20} height={20} color={variables.textSecondary} />
              <Text style={styles.backText}>Atras</Text>
            </View>
          </TouchableNativeFeedback>

          <Text style={styles.title}>Odisea</Text>

          <View style={styles.headerIcon}>
            <CheckCircleIcon width={30} height={30} color={variables.iconSecondary}  />
          </View>
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Covers Aprovados</Text>

          <CoverCount selected={selected} data={data} />
        </View>

        <Dropdown setSelected={setSelected} data={Object.values(data)} defaultOption />

        <View style={styles.listContainer}>
          { selected && data[selected].data.map((data) => (
            <CoverItem {...data} key={data.cc} />
          ))}
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

        <TouchableNativeFeedback>
          <View style={styles.button}>
            <SearchIcon
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  back: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 17,
    color: variables.textSecondary
  },
  title: [
    theme.title,
    {
      width: '30%',
      textAlign: 'center',
    }
  ],
  headerIcon: {
    width: '30%',
    alignItems: 'flex-end'
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  subtitle: theme.subtitle,
  listContainer: {
    marginTop: 20,
    marginBottom: 25
  },
  gradient: theme.gradientPrimary,
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '30%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  button: theme.roundButton
})

export default ApprovedCovers