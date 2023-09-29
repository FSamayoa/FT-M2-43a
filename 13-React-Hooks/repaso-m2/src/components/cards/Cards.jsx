import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../../redux/actions/actions";
import Card from "../card/Card";

const Cards = () => {
    const dispatch = useDispatch();
    const { allCharacters } = useSelector((state) => state);

    React.useEffect(() => {
        dispatch(getAllCharacters());
    }, [])

    return(
        <div>
            {
                allCharacters?.map((character) => {
                    return(
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;