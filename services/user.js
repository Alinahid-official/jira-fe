import axios from 'axios'
const baseUrl = 'http://localhost:4000/user'
  
const getUsers = async headers =>{
  const res = await axios.get(baseUrl,headers)
  return res.data
}

export default { getUsers }