import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import usePin from './usePin'
import TapKeyboard from './_common/TapKeyBoard'
import BigProtectedInput from './_common/BigProtectedInput/BigProtectedInput'

interface PinProps {
  onFinish: (pin: string) => void
}

const Pin: FC<PinProps> = ({ onFinish }) => {
  const { handleTapPress, pin } = usePin(onFinish)

  return (
    <View style={styles.container}>
      <BigProtectedInput code={pin} />
      <TapKeyboard onTapPress={handleTapPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Pin
