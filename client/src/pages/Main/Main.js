import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {SingleMovie} from "../../components/SingleMovie/SingleMovie";

import bg from "../../img/bg1.svg"
import "./style.sass"
import axios from "axios";
import {endpoints} from "../../api/config";
import {setMoviesGenre} from "../../store/reducers/movies";




export const Main = () =>{
    const stateMovies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://videocdn.tv/api/short?api_token=erYN5XVwHqJVxumOHtq0BNByXDMZBrQL')
            .then(response => {
                console.log(response)
                dispatch(setMoviesGenre(response.data.data))
            })
            .catch(err => console.log(err))
    },[])

    const renderMovies = () => {
        return stateMovies.map((item, index) => {
            return(
                <SingleMovie item={item} key={index}/>
            )
        })
    }

    return(
        <section className="page-main">
            <div className="inn">

                <div className="render-movies">
                    {renderMovies()}
                </div>
            </div>
        </section>
    )
}