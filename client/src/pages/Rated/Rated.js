import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {SingleMovie} from "../../components/SingleMovie/SingleMovie";
import axios from "axios";
import {endpoints} from "../../api/config";
import {setMoviesGenre} from "../../store/reducers/movies";
import {Settings} from "../../components/Settings/Settings";

export const Rated = () => {

    const stateMovies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(endpoints.rated)
            .then(response => {
                console.log(response.data.results)
                dispatch(setMoviesGenre(response.data.results))
            } )
            .catch(err => console.log(err))
    }, [])


    const renderMovies = () => {
        if(stateMovies.length !== 0) {
            return stateMovies.map((item, index) => {
                return(
                    <SingleMovie item={item} key={index}/>
                )
            })
        }
    }


    return(

        <>
            <Settings category={"Top rated"} url={endpoints.rated}/>

            <section className="page-rated">
                <div className="inn">

                    <div className="render-movies">
                        {renderMovies()}
                    </div>

                </div>
            </section>
        </>
    )
}