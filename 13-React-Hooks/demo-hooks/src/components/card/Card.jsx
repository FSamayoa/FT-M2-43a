const Card = ({ id, username, city }) => {
    return(
        <div style={{ color:' black', backgroundColor:'pink', borderRadius: '20px', padding: '10px', margin: '8px' }}>
            <h2>{username}</h2>
            <p>{city}</p>
        </div>
    )
}

export default Card;