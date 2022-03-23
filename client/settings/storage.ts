import AsyncStorage from '@react-native-async-storage/async-storage'

type StorageKeys = 'token'

const getData = async (key: StorageKeys) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }

    console.log('No data')
    return
  } catch (e) {
    console.error(e)
  }
}
const storeData = async (value: string, key: StorageKeys) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

const removeData = async (key: StorageKeys) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.error(e)
  }
}

export default {
  storeData,
  getData,
  removeData,
}
