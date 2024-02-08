
export const getBooks = async () => {
    try{
        const response = await fetch("http://localhost:3001/books");
        const books = await response.json();
        return books;
    }catch(e){
        return {error: true, data: "No se ha podido cargar la lista de libros"}
    }
}


export const getCategories = async () => {
    try {
        const response = await fetch("http://localhost:3000/categories");
        return {error: false, data: await response.json()};
    } catch(e) {
        return {error: true, data: "No se ha podido cargar las categorias"}
    }
}


export const postBook= async (book) => {
    try{
        const response = await fetch("http://localhost:3001/books",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(book)
        });
        //console.log(response.status);//201 bien, otro mal
        if(response.status === 201){
            return {error: false, data: await response.json()}
            //return response.json();
        };
        return {error: true,data: "No se ha podido guradar el libro"}
    }catch(e){
        return {error: true,data: "No hay conectividad con el servidor"}
    }
}

export const deleteBook = async (book) => {
    const response = await fetch("http://localhost:3001/books" + book.id, {
        method: 'DELETE'
    });
    if(response.status === 200){
        return {error: false};
    }else{
        return {error: true, data: "No se ha podido borrar el libro"}
    }
}