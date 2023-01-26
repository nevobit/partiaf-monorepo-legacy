import React, { useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, TextInput, TouchableNativeFeedback, View } from 'react-native'

import SearchIcon from '../assets/search.svg'
import ScanIcon from '../assets/scan.svg'
import XIcon from '../assets/x.svg'


import { theme, variables } from '../theme'

const SearchBar = ({ navigation, unfolded, setUnfolded }) => {
  const [searchIconAnimation, setSearchIconAnimation] = useState(new Animated.Value(0));
  const [pixelsToMove, setPixelsToMove] = useState(0)
  
  const buttonRef = useRef(null);

  // GET PIXELS TO MOVE //

  const windowWidth = Dimensions.get('window').width;

  const getPixelsToMove = (width, pageX) => {
    setPixelsToMove(windowWidth - (windowWidth * 0.1) - width - pageX)
  }


  // ANIMATION START //

  const unFoldSearchBar = () => {
    Animated.timing(searchIconAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      setUnfolded(true);
    })
  }

  // Search Icon start animation -> //
  const rotateStartSearchButton = searchIconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  const translateStartSearchButton = searchIconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, pixelsToMove],
  })

  const searchButtonAnimationStart = {
    transform: [
      {
        translateX: translateStartSearchButton
      },
      {
        rotate: rotateStartSearchButton
      }
    ]
  }

  // Search Bar start animation <--> //
  const toggleStartSearchBar = searchIconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  const searchBarAnimationStart = {
    transform: [
      {
        scaleX: toggleStartSearchBar
      }
    ],
  }

  // Scan Button start <- //
  const translateStartScanButton = searchIconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -pixelsToMove],
  })

  const ScanButtonAnimationStart = {
    transform: [
      {
        translateX: translateStartScanButton
      },
    ]
  }

  // END ANIMATION //

  const foldSearchBar = () => {
    Animated.timing(searchIconAnimation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      setUnfolded(false);
      searchIconAnimation.setValue(0);
    });
  }

  // Search Icon end animation <- //
  const rotateEndSearchButton = searchIconAnimation.interpolate({
    inputRange: [1, 2],
    outputRange: ['0deg', '-360deg'],
  })

  const translateEndSearchButton = searchIconAnimation.interpolate({
    inputRange: [1, 2],
    outputRange: [pixelsToMove, 0],
  })

  const searchButtonAnimationEnd = {
    transform: [
      {
        translateX: translateEndSearchButton
      },
      {
        rotate: rotateEndSearchButton
      }
    ]
  }

  // Search Bar start animation -><- //
  const toggleEndSearchBar = searchIconAnimation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 0],
  })

  const searchBarAnimationEnd = {
    transform: [
      {
        scaleX: toggleEndSearchBar
      }
    ],
  }

  // Scan Button end -> //
  const translateEndScanButton = searchIconAnimation.interpolate({
    inputRange: [1, 2],
    outputRange: [-pixelsToMove, 0],
  })

  const ScanButtonAnimationEnd = {
    transform: [
      {
        translateX: translateEndScanButton
      },
    ]
  }

  return (
    <View 
      style={styles.buttonsContainer}
    >
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('qr-code-scanner')}
      >
        <Animated.View
          style={ unfolded ? [styles.button, ScanButtonAnimationEnd] : [styles.button, ScanButtonAnimationStart] }
        >
          <ScanIcon
            width={30}
            height={30}
            color={variables.backgroundPrimary}
          />
        </Animated.View>
      </TouchableNativeFeedback>

      <Animated.View
        style={ unfolded ? [styles.searchBar, searchBarAnimationEnd] : [styles.searchBar, searchBarAnimationStart] }
      >
        <TouchableNativeFeedback
          onPress={foldSearchBar}
        >
          <XIcon
            width={25}
            height={25}
            color='#fff'
            style={styles.xIcon}
          />
        </TouchableNativeFeedback>
        <TextInput
        placeholder='Buscar...'
        style={styles.input}
        placeholderTextColor={variables.backgroundSecondary}
        />
      </Animated.View>

      <TouchableNativeFeedback
        onPress={unFoldSearchBar}
      >
        <Animated.View
          style={ unfolded ? [styles.button, searchButtonAnimationEnd] : [styles.button, searchButtonAnimationStart] }
        >
          <View
          ref={buttonRef} 
          onLayout={() => {
            buttonRef.current?.measure((x, y, width, height, pageX, pageY) => {
              getPixelsToMove(width, pageX)
            } )
          }}
          >
            <SearchIcon
              width={30}
              height={30}
              color={variables.backgroundPrimary}
            />
          </View>
        </Animated.View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    right: '14%',
    width: '58%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
    backgroundColor: 'rgba(50, 51, 50, 0.7)',
    padding: 10
  },
  input: {
    color: variables.backgroundPrimary,
    fontSize: 16,
    marginLeft: 5
  },
  button: theme.roundButton,
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchBar