import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail, cleanDetail } from "../../redux/actions/actions";

const Detail = () => {
    const params = useParams(); // { id: 1 }
    const dispatch = useDispatch();
    const { characterDetail } = useSelector(state => state);

    React.useEffect(() => {
        dispatch(getCharacterDetail(params?.id));

        return () => dispatch(cleanDetail());
    }, [params?.id]);

    return(
        <div>
            <h2>{characterDetail?.name}</h2>
            <p>Status: {characterDetail?.status}</p>
            <p>Specie: {characterDetail?.species}</p>
            <p>Gender: {characterDetail?.gender}</p>
            <p>Origin: {characterDetail?.origin?.name}</p>
            <img src={characterDetail?.image} alt={characterDetail?.name} style={{ borderRadius: '100%' }} />
        </div>
    )
}

export default Detail;