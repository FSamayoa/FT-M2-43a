import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, incrementCounter } from "../../redux/actions";

const Cards = () => {
    const dispatch = useDispatch();
    const { users, counter } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return(
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch(incrementCounter())} >Increment</button>
            {
                users?.map((user) => {
                    return <Card
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        city={user.address?.city}
                    />
                })
            }
        </div>
    )
}

export default Cards;