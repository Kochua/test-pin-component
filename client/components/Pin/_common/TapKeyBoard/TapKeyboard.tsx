import React, { FC } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import TapCell from './TapCell'

const defaultInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
interface TapKeyboardProps {
  onTapPress: (cellSymbol: string) => void

  inputs?: string[]
}

const TapKeyboard: FC<TapKeyboardProps> = ({
  onTapPress,
  inputs = defaultInputs,
}) => {
  return (
    <View style={styles.container}>
      {inputs.map((input) => (
        <TapCell onTapPress={onTapPress} key={input} cellSymbol={input} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
})

export default TapKeyboard
