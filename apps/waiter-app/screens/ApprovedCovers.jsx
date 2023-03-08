import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import useHideHeader from '../hooks/useHideHeader'

import CoverCount from '../components/CoverCount'
import Dropdown from '../components/Dropdown'
import CoverItem from '../components/CoverItem'

const ChevronLeftIcon =  require('../assets/chevronLeft.svg')
const CheckCircleIcon = require('../assets/checkCircle.svg')

import { theme, variables } from '../theme'
import data from '../data/covers'
import SearchBar from '../components/SearchBar'

const ApprovedCovers = ({ navigation }) => {
  const [selected, setSelected] = useState(null)
  const [unfolded, setUnfolded] = useState(false)
  const [searchValue, onChangeValue] = useState()
  const [filter, setFilter] = useState()

  useHideHeader()

  useEffect(() => {
    if(searchValue) {
      const newData = data[selected].data.filter((item) => (
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      ))
      setFilter(newData)
    }
    else if(selected) {
      setFilter(data[selected].data)
    }
  }, [searchValue])

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

        <Dropdown
          selected={selected}
          setSelected={setSelected}
          data={data}
          defaultSelected
        />

        <View style={styles.listContainer}>
          { filter
            ? filter.map((data) => (
                <CoverItem {...data} key={data.cc} />
              ))
            : selected && data[selected].data.map((data) => (
                <CoverItem {...data} key={data.cc} />
              ))
          }
        </View>
      </ScrollView>

      <LinearGradient
        colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,1)']}
        style={styles.gradient}
      />

      <SearchBar
        navigation={navigation}
        unfolded={unfolded}
        setUnfolded={setUnfolded}
        searchValue={searchValue}
        onChangeValue={onChangeValue}
      />
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
})

export default ApprovedCovers