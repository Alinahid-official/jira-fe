import axios from 'axios'
import config from '../config'
const baseUrl = `${config.getServerHost()}/issue`

const createIssue = async (dataObj,header) => {
    console.log(dataObj,header)
    const response = await axios.post(baseUrl, dataObj,header)
    return response.data
  }

const getIssueById = async (id,header) =>{
    console.log('dedo re',id)
    const url = `${baseUrl}/${id}`
    const response = await axios.get(url,header)
    return response.data
}

const getIssuesByProjectId = async ( projectId,headers)=>{
  const url = `${baseUrl}/issueByProject/${projectId}`
  const response = await axios.get(url,headers)
  return response.data
}
  
  export default { createIssue , getIssuesByProjectId, getIssueById }