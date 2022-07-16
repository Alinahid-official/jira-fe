import axios from 'axios'
const baseUrl = 'http://localhost:4000/issue'

const createIssue = async (dataObj,header) => {
    console.log(dataObj,header)
    const response = await axios.post(baseUrl, dataObj,header)
    return response.data
  }
  
  export default { createIssue }