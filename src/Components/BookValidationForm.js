import { useState } from "react"
import { postBook } from "../Api/BookApi";


const BookValidationForm = ({onSaveBook}) => {
    const [error, setError] = useState(false);

    const [inputValue,setInputValues] = useState({
        title: "", 
        author : "", 
        description : "",  
        cover : ""
    })

    const resetForm = () => {
        setInputValues({
            title: "", 
            author : "", 
            description : "",  
            cover : ""
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        //console.log("Guardando libro");
        //const book = {title,author,description,cover};
        const response = await postBook(inputValue);
        if (response.error) {
            setError(true);
        } else {
            setError(false);
            onSaveBook(response.data);
            resetForm();
        }
    }

    const handleChange = (event) => {
        //event.target.name
        //event.target.value
        const {name,value} = event.target;
        setInputValues({
            ...inputValue,
            [name]: value
        })
    }

    return <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
            <span>Título:   </span>
            <input type="text" name="title" value={inputValue.title} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <span>Autor:    </span>
            <input type="text" name="author" value={inputValue.author} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <span>Descripción:  </span>
            <input type="text" name="description" value={inputValue.description} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <span>Portada:  </span>
            <input type="text" name="cover" value={inputValue.cover} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <button type="submit">Alta</button>
        </div>
        {/*<div className="error">
            {error ? "no se ha podido gradar el libro" : "Todo bien"}
</div>*/}
    </form>
}

export default BookValidationForm;