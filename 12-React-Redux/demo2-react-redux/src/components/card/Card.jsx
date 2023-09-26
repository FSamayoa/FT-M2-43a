import { Link } from "react-router-dom";

const Card = ({ id, name, email }) => {
    return (
        <Link to={`/detail/${id}`}>
            <div style={{ backgroundColor: 'pink', borderRadius: '16px', padding: '8px', margin: '8px', color: 'black'}}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </Link>
    )
}

export default Card;