import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import { RootStackScreenProps } from '../types'
import Pin from '../components/Pin'
import { AuthContext } from '../providers/AuthProvider'
import LoaderWrapper from '../components/LoaderWrapper'

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>) {
  const { handleLogin, isLoading } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <LoaderWrapper loading={isLoading}>
        <Pin onFinish={handleLogin} />
      </LoaderWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
