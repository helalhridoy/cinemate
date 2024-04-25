import { useState, useEffect } from "react";

export const useFetch = (api) => {

    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results);
        }
        fetchMovies();
    }, [url])

    return { data }

}