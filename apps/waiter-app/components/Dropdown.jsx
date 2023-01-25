import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SelectList } from 'react-native-dropdown-select-list'

import ChevronDown from '../assets/chevronDown.svg'
import ChevronUp from '../assets/ChevronUp.svg'
import FilterIcon from '../assets/filter.svg'

import { theme, variables } from '../theme'

const Dropdown = ({setSelected, data, defaultOption}) => {
  return (
    <View style={styles.select}>
      <SelectList
        setSelected={setSelected}
        data={data}
        save="key"
        boxStyles={styles.box}
        inputStyles={styles.input}
        dropdownStyles={styles.dropdown}
        arrowicon={<ChevronDown color={variables.iconPrimary} />}
        closeicon={<ChevronUp color={variables.iconPrimary} />}
        searchicon={<></>}
        defaultOption={ defaultOption ? data[0] : null }
      />
      <FilterIcon width={30} height={30} style={styles.filterIcon} color={variables.textSecondary} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: variables.backgroundSecondary,
    borderWidth: 0,
    borderRadius: 2,
  },
  input: {
    paddingLeft: 35,
    color: variables.textPrimary
  },
  dropdown: {
    marginTop: 1,
    backgroundColor: '#e2e3e2',
    borderWidth: 0,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9, 
    zIndex: 1
  },
  filterIcon: {
    position: 'absolute',
    left: 15, 
    top: 6
  },
})

export default Dropdown