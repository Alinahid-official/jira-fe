import axios from 'axios'
const baseUrl = 'http://localhost:4000/issue'

const createIssue = async (dataObj,header) => {
    console.log(dataObj,header)
    const response = await axios.post(baseUrl, dataObj,header)
    return response.data
  }
const getIssuesByProjectId = async ( projectId,headers)=>{
  console.log('dedo re',projectId)
  const url = `${baseUrl}/issueByProject/${projectId}`
  console.log(url)
  const response = await axios.get(url,headers)
  console.log(response)
  return response.data
}
  
  export default { createIssue , getIssuesByProjectId }