import Card from "../card/Card"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllUsers } from "../../redux/actions"

const Cards = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
           {users?.map((user)=>{
            return <Card
            key = {user.id}
            name = {user.name}
            email = {user.email}
            id = {user.id}
            />
           })}
        </div>
    )
}


export default Cards