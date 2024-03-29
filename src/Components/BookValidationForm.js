import { useState } from "react"
import { postBook } from "../Api/BookApi";
import './BookValidationForm.css';


const BookValidationForm = ({categories,onSaveBook}) => {
    const [serverError, setServerError] = useState({error: false, message: ""});
    const [errors,setErrors] = useState({
        title: {error: false, message: ""}, 
        author : {error: false, message: ""}, 
        description : {error: false, message: ""},  
        cover : {error: false, message: ""}
        //category: {error: false, message: ""}
    });

    const [inputValue,setInputValues] = useState({
        title: "", 
        author : "", 
        description : "",  
        cover : "",
        category : 0
    })

    const resetForm = () => {
        setInputValues({
            title: "", 
            author : "", 
            description : "",  
            cover : "",
            category : ""
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        //console.log("Guardando libro");
        //const book = {title,author,description,cover};
        const response = await postBook(inputValue);
        if (response.error) {
            setServerError({error: true, message: "No se ha podido guardar el libro"});
        } else {
            onSaveBook(response.data);
            resetForm();
        }
    }

    const handleChange = (event) => {
        //event.target.name
        //event.target.value
        let {name,value} = event.target;

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
                if (value.length > 0 && !isNaN(value)) {//El autor no es obligatorio
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
            case "description":
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        description: {error: true, message: "La descripción es obligatoria"}
                    })
                } else {
                    setErrors({
                        ...errors,
                        description: {error: false, message: ""}
                    })
                }
                break;
            case "cover":
                /*if (value.length === 0) {
                    setErrors({
                        ...errors,
                        title: {error: true, message: "El título es obligatorio"}
                    })
                } else {
                    setErrors({
                        ...errors,
                        title: {error: false, message: ""}
                    })
                }*/
                break;
            case "category":
                value = parseInt(value);
                break;
            default:
                break;
        }

        setInputValues({
            ...inputValue,
            [name]: value
        });
        setServerError({error: false, message: ""});
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
            {errors.description.error ? 
                <div className="error">{errors.description.message}</div>
            :
                ""
            }
        </div>
        <div className="form-group">
            <span>Portada:  </span>
            <input type="text" name="cover" value={inputValue.cover} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <span>Categoria:  </span>
            <select type="text" name="category" value={inputValue.category} onChange={handleChange}>
                {
                    categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)
                }
            </select>
        </div>
        <div className="error">
            {serverError.error ? serverError.message : ""}
        </div>
        <div className="form-group">
            <button type="submit">Alta</button>
        </div>
    </form>
}

export default BookValidationForm;