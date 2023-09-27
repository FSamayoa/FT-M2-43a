import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((dataApi) => {
            setData(dataApi);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return { data }
}