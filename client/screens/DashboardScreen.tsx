import { useContext } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import { RootStackScreenProps } from '../types'
import { AuthContext } from '../providers/AuthProvider'

export default function DashboardScreen(
  props: RootStackScreenProps<'Dashboard'>,
) {
  const { handleLogout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.linkText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  linkText: {
    fontSize: 20,
    color: '#2e78b7',
  },
})
