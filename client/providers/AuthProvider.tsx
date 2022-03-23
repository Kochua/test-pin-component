import { AxiosResponse } from 'axios'
import { off } from 'process'
import React, { createContext, useMemo, useState, FC } from 'react'
import { Alert } from 'react-native'

import api from '../settings/api'
import storage from '../settings/storage'
import { useEffect } from 'react'

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

interface IContext {
  token: string | null
  isLoading: boolean
  handleLogin: (pin: string) => Promise<void>
  handleLogout: () => Promise<void>
}

export const AuthContext = createContext<IContext>({} as IContext)
export const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      let storageToken = await storage.getData('token')
      if (storageToken) setToken(storageToken)
    })()
  }, [])

  const handleLogin = async (pin: string) => {
    setIsLoading(true)

    try {
      await delay(1000)
      const res = await api.login(pin)

      setToken(res.token)
      await storage.storeData(res.token, 'token')
    } catch (e: any) {
      Alert.alert(e)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await api.logout()

      setToken(null)
      await storage.removeData('token')
    } catch (e: any) {
      Alert.alert(e)
    } finally {
      setIsLoading(false)
    }
  }

  const value = useMemo(
    () => ({
      token,
      isLoading,
      handleLogin,
      handleLogout,
    }),
    [token, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
