import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'

import DashboardScreen from '../screens/DashboardScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import { RootStackParamList } from '../types'
import LoginScreen from '../screens/LoginScreen'
import { AuthContext } from '../providers/AuthProvider'

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  const { token } = useContext(AuthContext)

  return (
    <Stack.Navigator>
      {!token ? (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      )}
    </Stack.Navigator>
  )
}
