import React from "react"
import {useSelector} from "react-redux";
import {SingleMovie} from "../../components/SingleMovie/SingleMovie";

import bg from "../../img/bg1.svg"
import "./style.sass"




export const Main = () =>{
    const stateMovies = useSelector(state => state.movies.movies)


    const renderMovies = () => {
        if(stateMovies.length !== 0) {
            return stateMovies.map((item, index) => {
                return(
                  <SingleMovie item={item} key={index}/>
                )
            })
        } else {
            return (
                <div className="background">
                    <div className="inn">
                        <figure><img src={bg} alt="background"/></figure>
                        <h4>Please select search type in filter</h4>
                    </div>
                </div>
            )
        }
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