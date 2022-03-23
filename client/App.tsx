import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import { AuthProvider } from './providers/AuthProvider'

export default function App() {
  const isLoadingComplete = true

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>

        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
