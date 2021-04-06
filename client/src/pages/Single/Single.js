import React, {useEffect} from "react"
import {useLocation} from "react-router-dom"

export const Single = () => {
    const { state } = useLocation();

    useEffect(() => {

    }, [])
    return(
        <section className="page-single">
            <div className="inn">
                <figure><img src={`https://image.tmdb.org/t/p/original/`+state.movie.poster_path} alt={state.movie.title}/></figure>
                <div className="content">
                    <h3>{state.movie.title}</h3>
                </div>
            </div>
        </section>
    )
}