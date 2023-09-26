import { useSelector } from "react-redux";
import Card from "../card/Card";

const Cards = () => {
    const users = useSelector((state) => state.users);

    return(
        <div>
            {
                users?.map((user) => {
                    return(
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;