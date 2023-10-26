export const mapToRowsTable = (responseArr) => {
    const mappedArr = responseArr.map((vacancy)=>{
        return {
            id: vacancy.id,
            title: vacancy.title,
            description: vacancy.description,
            salary: vacancy.salary
        }
    })

    return mappedArr
} 

// { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },