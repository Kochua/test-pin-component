import React, { FC } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

interface LoaderWrapperProps {
  loading: boolean
}
const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children, loading }) => {
  return (
    <View style={styles.container}>
      {children}
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
})

export default LoaderWrapper
