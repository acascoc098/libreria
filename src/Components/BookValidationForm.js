import { useState } from "react"
import { postBook } from "../Api/BookApi";
import './BookValidationForm.css';


const BookValidationForm = ({onSaveBook}) => {
    const [error, setError] = useState(false);
    const [errors,setErrors] = useState({
        title: {error: false, message: ""}, 
        author : {error: false, message: ""}, 
        description : {error: false, message: ""},  
        cover : {error: false, message: ""}
    });

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

        //Validación
        switch(name){
            case "title":
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        title: {error: true, message: "El título es obligatorio"}
                    })
                } else {
                    setErrors({
                        ...errors,
                        title: {error: false, message: ""}
                    })
                }
                break;
            case "author":
                if (value.length > 0 && !isNaN(value)) {
                    setErrors({
                        ...errors,
                        author: {error: true, message: "El autor no puede ser un número"}
                    })
                } else {
                    setErrors({
                        ...errors,
                        author: {error: false, message: ""}
                    })
                }
                break;
            case "":
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        title: {error: true, message: "El título es obligatorio"}
                    })
                } else {
                    setErrors({
                        ...errors,
                        title: {error: false, message: ""}
                    })
                }
                break;
            case "":
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        title: {error: true, message: "El título es obligatorio"}
                    })
                } else {
                    setErrors({
                        ...errors,
                        title: {error: false, message: ""}
                    })
                }
                break;
            default:
                break;
        }

        setInputValues({
            ...inputValue,
            [name]: value
        });
    }

    return <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
            <span>Título:   </span>
            <input type="text" name="title" value={inputValue.title} onChange={handleChange}/>
            {errors.title.error ? 
                <div className="error">{errors.title.message}</div>
            :
                ""
            }
        </div>
        <div className="form-group">
            <span>Autor:    </span>
            <input type="text" name="author" value={inputValue.author} onChange={handleChange}/>
            {errors.author.error ? 
                <div className="error">{errors.author.message}</div>
            :
                ""
            }
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