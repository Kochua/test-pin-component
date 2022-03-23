import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Onboarding: undefined
  Login: undefined
  Dashboard: undefined
}

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>
