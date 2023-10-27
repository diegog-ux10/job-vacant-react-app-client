export const mapToRowsTableApplises = (responseArr) => {
    const mappedArr = responseArr.map((apply)=>{
        return {
            id: apply.id,
            name: apply.name,
            email: apply.email,
            job_vacancy: apply.job_vacancy.description
        }
    })

    return mappedArr
} 

// { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },