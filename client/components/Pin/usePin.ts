import { useState, useEffect } from 'react'

const MAX_PIN_NUMBER = 4

export default function usePin(onFinish: (pin: string) => void) {
  const [pin, setPin] = useState('')

  useEffect(() => {
    if (pin.length === MAX_PIN_NUMBER) {
      handleFinish()
    }
  }, [pin])

  const handleFinish = async () => {
    if (onFinish) await onFinish(pin)

    setPin('')
  }

  const handleTapPress = (cellSymbol: string) => {
    if (pin.length >= MAX_PIN_NUMBER) return

    setPin((oldState) => oldState.concat(cellSymbol))
  }

  return { pin, handleTapPress }
}
