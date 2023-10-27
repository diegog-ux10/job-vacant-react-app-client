export const mapToRowsTableVacant = (responseArr) => {
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