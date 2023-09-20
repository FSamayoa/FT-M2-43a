const Person = ({ id, name, email, city }) => {
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default Person;