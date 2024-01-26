const Book = ({book}) => {
    return <div>
        <h1>{book.tittle}</h1>
        <p><strong>{book.author}</strong></p>
        <p>{book.description}</p>
        <img src={book.cover} alt="portada"></img>
    </div>
}

export default Book;