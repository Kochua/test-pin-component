import { AxiosResponse } from 'axios'
import axios from './axios'

const login = (pin: string): Promise<{ token: string }> =>
  axios.post('/login', { pin })

const logout = () => axios.post('/logout')

export default { login, logout }
