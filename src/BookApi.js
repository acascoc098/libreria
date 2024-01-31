
export const getBooks = async () => {
    const response = await fetch("http://localhost:3001/books");
    const books = await response.json();
    return books;
}

export const postBook= async (book) => {
    const response = await fetch("http://localhost:3001/books",{
        method: 'POST',
        headers: {'Contente-type' : 'application/json'},
        body: JSON.stingify(book)
    });
    //console.log(response.status);//201 bien, otro mal
    if(response.status === 201){
        return {error: false, data: response.json()}
        //return response.json();
    };
    return {error: "No se ha podido guradar el libro"}
}