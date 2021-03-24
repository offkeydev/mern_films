import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {endpoints, key} from "../../api/config";

import {setMoviesGenre} from "../../store/reducers/movies"
import {setLoader} from "../../store/reducers/loader";

export const useSelected = () => {

    const category = useSelector(state => state.filter.selectedCategory)
    const dispatch = useDispatch()
    const [genres, setGenres] = useState([])

    useEffect(() => {
        axios.get(`${endpoints.getGenres}`)
            .then(response => setGenres(response.data.genres))
            .catch(err => console.assert(err))
    }, [])



    switch (category.id){
        case 0: {
            const uploadPopular = () => {
                axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`)
                    .then(response => dispatch(setMoviesGenre(response.data.results)) )
                    .catch(err => console.log(err))
            }
            return(
                <>
                    <p>Selected <span>{category.name}</span></p>
                    {uploadPopular()}
                </>
            )
        }
        case 1: {
            const uploadUpcoming = () => {
                axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`)
                    .then(response => dispatch(setMoviesGenre(response.data.results)) )
                    .catch(err => console.log(err))
            }
            return(
                <>
                    <p>Selected <span>{category.name}</span></p>
                    {uploadUpcoming()}
                </>
            )
        }
        case 2: {
            return (
                <p>Selected <span>{category.name}</span></p>
            )
        }
        case 3: {

            const uploadByGenre = (id) => {
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}`)
                    .then(response =>   dispatch(setMoviesGenre(response.data.results)) )
                    .catch(err => console.log(err))
            }

            return (
                <>
                    <p>Selected <span>{category.name}</span></p>
                    <ul>
                        {genres.map(item => {
                            return(
                                <li key={item.id} onClick={ () => uploadByGenre(item.id) }>{item.name}</li>
                            )
                        })}
                    </ul>
                </>

            )
        }
    }

}