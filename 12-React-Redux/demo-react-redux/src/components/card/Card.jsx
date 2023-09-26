const Card = ({ name, email, phone, city }) => {
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default Card;