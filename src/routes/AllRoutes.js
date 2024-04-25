import { Routes, Route } from 'react-router-dom';
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
    return (
        <div className='h-auto min-h-screen "bg-white dark:bg-slate-800'>
            <Routes>
                <Route path='/' element={<MovieList api="movie/now_playing" />} />
                <Route path='movies/:id' element={<MovieDetail />} />
                <Route path='search' element={<Search />} />
                <Route path='movies/top' element={<MovieList api="movie/top_rated" />} />
                <Route path='movies/popular' element={<MovieList api="movie/popular" />} />
                <Route path='movies/upcoming' element={<MovieList api="movie/upcoming" />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}
