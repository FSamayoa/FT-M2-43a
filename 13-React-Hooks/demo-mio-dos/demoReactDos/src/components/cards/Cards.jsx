import { useEffect } from "react"
import { increment, decrement, getUsers} from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import Card from "../card/Card"


const Cards = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state)=>state.counter)


    const handleClick = () => {
        dispatch(increment());
    }

    const handleClick2 = () => {
        dispatch(decrement())
    }

    const users = useSelector((state)=>state.users)


useEffect(()=>{
    dispatch(getUsers())
},[])


    return(
        <div>

            <h1>{counter}</h1>
            <br />
            <h2>Hola mundo desde Cards</h2>
            <br />
            <button onClick={handleClick2}>reducir</button>
            <button onClick={handleClick}>agregar</button>
            <br />
            {users?.map((user)=>{
                return(
                <Card
                key={user.id}
                id={user.id}
                name={user.name}
                phone={user.phone}
                email={user.email}
                />
                )
            })
            }
        </div>
    )   
}


export default Cards