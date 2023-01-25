import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../theme'

const CoverCount = ({selected, data}) => {
  const getTotalChecked = () => {
    const checked = data[selected].data.filter((cover) => cover.checked)

    return checked.length
  }

  return (
    <>
      {selected
        ? <Text style={styles.text}>{getTotalChecked()}/{data[selected].data.length}</Text>
        : <Text style={styles.text}>0/0</Text>
      }
    </>
  )
}
const styles = StyleSheet.create({
  text: theme.subtitle,
})

export default CoverCount