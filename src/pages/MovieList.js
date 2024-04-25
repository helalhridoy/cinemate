import React from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'


export const MovieList = ({ api }) => {

    const { data: movies } = useFetch(api);
    return (
        <section className='max-w-7xl mx-auto py-7 dark:text-white'>
            <div className="flex  flex-wrap">
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} ></Card>
                ))}

            </div>


        </section >
    )
}