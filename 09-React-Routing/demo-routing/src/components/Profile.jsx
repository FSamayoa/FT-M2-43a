import { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

import { useParams, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
            setUsers([...users, ...data])// [{}, {}...]
        })
        .catch(() => {
            console.log('se rompió');
        })

        return () => {
            setUsers([])
            console.log(users);
            console.log('se desmontó el componente');
        }
    }, [])

    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
// console.log(navigate('/'));
    const usersFiltered = users.find((user) => {
        return user.id == id
    })

    return(
        <div>
            <h2>Este es el perfil</h2>
            <p>Acá pondríamos mucha data</p>
            <Person 
                id={id}
                name={usersFiltered?.name}
                email={usersFiltered?.email}
                city={usersFiltered?.address.city}    
            />
        </div>
    )
}

export default Profile;