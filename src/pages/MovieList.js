import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'


export const MovieList = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=dda22779b80f2b188215fd6da881c818");
            const data = await response.json();
            setMovies(data.results);
        }
        fetchMovies();
    }, [])

    return (
        <section className='max-w-7xl mx-auto py-7 dark:text-white'>
            <div className="flex  flex-wrap">
                {movies.map((movie) => (
                    <Card Card ></Card>

                ))}

            </div>


        </section >
    )
}