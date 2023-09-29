import { useSelector, useDispatch } from "react-redux"
import { userDetail,cleanDetail } from "../../redux/actions"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const  user  = useSelector(state => state.user)

    useEffect(() => {
        dispatch(userDetail(params?.id))
        return () => dispatch(cleanDetail())
    }, [params?.id])


    return (
        <div>
            <h1>Detail</h1>
            <h2>name: {user?.name}</h2>
            <p>email: {user?.email}</p>
            <p>username: {user?.username}</p>
            <p>city: {user?.address?.city}</p>

        </div>
    )
}

export default Detail