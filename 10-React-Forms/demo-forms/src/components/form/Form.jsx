import { useState } from "react";

const validate = (input) => {
    let errors = {};

    if(!/^[a-zA-Z]+$/.test(input.name)) {
        errors.name = 'Debe contener solo letras'
    }

    if(input.name.length < 3) {
        errors.name = 'Debe ser mayor que 3 caracteres'
    }

    if(!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'No es un email válido'
    }

    return errors;
    // { name: 'Debe contener solo letras' }
}

const Form = () => {
    const [input, setInput] = useState({
        name: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        console.log(event.target.name); // 'email'
        console.log(event.target.value); // 'SS'

        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        /*
        {
            name: 'ss',
            email: 'SS'
        }
        */

       setErrors(validate(input))
       // setErrors({ name: 'Debe contener solo letras' })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setInput({
            name:'',
            email: ''
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name: </label>
            <input 
                type="text" 
                name="name" 
                value={input.name} // value = estado
                // 'da' = 'da'
                onChange={handleChange}
            />
            {errors.name !== '' && <p style={{ color: 'red' }}>{errors.name}</p>}

            <hr style={{ borderStyle: "none"}} />
            
            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                name="email" 
                value={input.email}
                onChange={handleChange}
            />
            {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}

            <hr style={{ borderStyle: "none"}} />

            <button 
                type="submit"
                disabled={!input.name || !input.email || errors.name || errors.email}
            >Enviar</button>
        </form>
    )
}

export default Form;