const filterByStatus= (status, issues)=>{
    return issues.filter(issue=>{
        return issue.status == status
    })
}

export default {filterByStatus}