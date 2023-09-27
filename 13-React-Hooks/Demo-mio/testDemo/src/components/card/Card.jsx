const Card = ({id,name,email})=>{
return(
    <div>
        <h2>name {name}</h2>
        <p>email: {email}</p>
        <p>id: {id}</p>
    </div>
)
}

export default Card