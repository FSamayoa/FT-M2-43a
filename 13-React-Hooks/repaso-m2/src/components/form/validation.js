const validation = (input) => {
    const errors = {};

    if(!input.email.includes('@')) {
        errors.email = 'Debería contener un @'
    }
    if(!input.email.includes('.')){
        errors.email = 'No es un email válido'
    }
    if(!input.password.includes('7')){
        errors.password = 'Debería contener un 7'
    }
    if(input.password.length < 6) {
        errors.password = 'Debe ser mayor a 6 caracteres'
    }

    return errors;
}

export default validation;