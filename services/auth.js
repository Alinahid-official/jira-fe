import axios from 'axios'
import config from '../config'
const baseUrl = `${config.getServerHost()}/auth`

const login = async credentials => {
    const response = await axios.post(`${baseUrl}/login`, credentials)
    return response.data
  }
  
export default { login }