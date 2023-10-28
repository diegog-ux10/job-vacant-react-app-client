export const mapToRowsTableVacant = (responseArr) => {
    if (!Array.isArray(responseArr)) {
      // Manejar el caso en el que responseArr no sea un array
      console.error('responseArr no es un array válido:', responseArr);
      return [];
    }
  
    const mappedArr = responseArr.map((vacancy) => {
      return {
        id: vacancy.id,
        title: vacancy.title,
        description: vacancy.description,
        salary: vacancy.salary
      };
    });
  
    return mappedArr;
  };
  