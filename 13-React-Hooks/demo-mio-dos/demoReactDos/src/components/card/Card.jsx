import { Link } from "react-router-dom"

const Card = ({ name, email, id }) => {
    return (
        <Link to={`/detail/${id}`}>
            <div>
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h3>Id: {id}</h3>

            </div>

        </Link>
    )
}

export default Card