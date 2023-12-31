//? currentPage = la pag actual
//? residents = Arreglo total de residentes en la dimension actual 
const paginationLogic = (currentPage, residents) => {
    //Excepcion para el primer render
    if(residents.length === 0) {
        return{
            pages: [1],
            residentsInPage: []
        }
    }


    // la camtidad de residentes por pagina
const RESIDENTS_PER_PAGE = 8;

// cantidad total de paginas 
const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

//residentes que se van a mostrar en la pag actual
const sliceEnd = RESIDENTS_PER_PAGE * currentPage;
const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
const residentsInPage = residents.slice(sliceStart, sliceEnd);

// generacion de arreglo de las paginas que se van a mostrar
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

return {
    residentsInPage,
    pages,
}

};

export {
    paginationLogic
};