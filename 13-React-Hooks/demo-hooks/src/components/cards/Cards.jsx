import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions";
import { useEffect } from "react";
import Card from "../card/Card";

const Cards = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return(
        <div>
            {
                users?.map(({ id, username, address: { city } }) => {
                    return(
                        <Card
                            key={id}
                            id={id}
                            username={username}
                            city={city}
                        />
                    )
                })
            }
        </div>
    )
}


export default Cards;