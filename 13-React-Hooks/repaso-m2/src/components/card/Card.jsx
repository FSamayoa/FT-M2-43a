import { Link } from "react-router-dom";

const Card = ({ id, name, image }) => {
    return(
        
        <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            <img src={image} alt={name} style={{ borderRadius: '100%' }} />
        </Link>
    )
}

export default Card;