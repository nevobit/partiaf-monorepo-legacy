import { useEffect, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import FilterIcon from '../assets/filter.svg'
import ChevronDownIcon from '../assets/chevronDown.svg'
import ChevronUpIcon from '../assets/ChevronUp.svg'

const DropdownItem = ({ item, selected, setSelected, handleAnimationEnd }) => {
  return(
    <TouchableNativeFeedback
      onPress={() => {
        setSelected(item.id)
        handleAnimationEnd()
      }}
    >
      <Text 
        style={ item.id === selected
          ? styles.dropdownItemSelected
          : styles.dropdownItem
        }
      >
        {item.name}
      </Text>
    </TouchableNativeFeedback>
  )
}

const Dropdown = ({ selected, setSelected, data ,defaultSelected }) => {
  useEffect(() => {
    if (defaultSelected) {
      setSelected(Object.values(data)[0].id)
    }
  }, [])
  

  const [toggle, setToggle] = useState(false)

  const [dropdownAnimation] = useState(new Animated.Value(0))

  const handleAnimationStart = () => {
    Animated.timing(dropdownAnimation, {
      toValue: 160,
      timing: 500,
      useNativeDriver: false
    }).start()
  }

  const handleAnimationEnd = () => {
    Animated.timing(dropdownAnimation, {
      toValue: 0,
      timing: 500,
      useNativeDriver: false
    }).start()
  }

  const animationStyles = {
    height: dropdownAnimation
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          if(toggle) {
            handleAnimationEnd()
            setToggle(false)
          } else {
            handleAnimationStart()
            setToggle(true)
          }
        }}
      >
        <View style={styles.box}>
          <View style={styles.iconContainer}>
            <FilterIcon width={25} height={25} color='#bcbccb' />
          </View>

          <Text style={styles.text}>
            { selected
              ? data[selected].name
              : 'Select your options'
            }
          </Text>

          <View style={styles.iconContainer}>
            {toggle
              ? <ChevronUpIcon width={25} height={25} color='#bcbccb' />
              : <ChevronDownIcon width={25} height={25} color='#bcbccb' />
            }
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.dropdown, animationStyles]}>
        <ScrollView>
          {Object.values(data).map((item) => (
            <DropdownItem
              item={item}
              selected={selected}
              setSelected={setSelected}
              handleAnimationEnd={handleAnimationEnd}
              key={item.id}
            />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f2f0',
  },
  box: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    width: '10%'
  },
  text: {
    width: '75%'
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    width: '100%',
    zIndex: 1
  },
  dropdownItem: {
    backgroundColor: '#e2e2e3',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  dropdownItemSelected: {
    backgroundColor: '#333232',
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#fffe'
  }
})

export default Dropdown