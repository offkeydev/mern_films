import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {endpoints} from "../../api/config";
import {Settings} from "../../components/Settings/Settings";

export const Upcoming = () => {
    const stateMovies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()


    return(
        <>
            <Settings category={"Upcoming"} url={endpoints.rated}/>

            <section className="page-upcoming">
                <div className="inn">

                </div>
            </section>
        </>
    )
}