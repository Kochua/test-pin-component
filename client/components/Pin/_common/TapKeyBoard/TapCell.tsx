import React, { FC } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

interface TapCellProps {
  cellSymbol: string
  onTapPress: (symbol: string) => void
}

const TapCell: FC<TapCellProps> = ({ cellSymbol, onTapPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onTapPress(cellSymbol)}
        style={styles.btn}
        activeOpacity={0.8}
      >
        <Text>{cellSymbol}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 11,
    paddingVertical: 15,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 70,
    height: 100,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
  },
})

export default TapCell
