import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { RootStackScreenProps } from '../types'

export default function OnboardingScreen({
  navigation,
}: RootStackScreenProps<'Onboarding'>) {
  const handleNavigateLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateLogin}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 20,
    color: '#2e78b7',
    fontWeight: 'bold',
  },
})
