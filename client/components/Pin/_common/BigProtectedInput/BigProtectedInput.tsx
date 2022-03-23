import React, { FC } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CODE_LENGTH = 4

interface BigProtectedInputProps {
  code: string
}
const BigProtectedInput: FC<BigProtectedInputProps> = ({ code }) => {
  return (
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        {Array.from({ length: CODE_LENGTH }, (_, i) => {
          return (
            <Text key={i} style={styles.codeCell}>
              {code[i] ? '*' : '_'}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  codeContainer: {
    flexDirection: 'row',
  },
  codeCell: {
    fontSize: 35,
    marginRight: 5,
  },
})

export default BigProtectedInput
