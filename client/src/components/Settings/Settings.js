import React, {useEffect, useState} from 'react';
import "./style.sass"
import axios from "axios";
import {setMoviesGenre, unsetMovieCompare} from "../../store/reducers/movies";
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../../store/reducers/modal";

export const Settings = ({category, url}) => {
    const [page, setPage] = useState(1)
    const isCompare = useSelector(state => state.movies.compareMovies)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${url}&page=${page}`)
            .then(response =>  dispatch(setMoviesGenre(response.data.results)))
            .catch(err => console.log(err))
    }, [page])


    return(
        <div className="settings-component">
            <div className="inn">
                <h3>{category}</h3>

                <ul className="pager">
                    <span onClick={() => setPage(prevState => prevState >= 1 ? prevState-1 : 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z" fill="#3E3E3E"></path></svg>
                    </span>
                    <p>{page}</p>
                    <span onClick={() => setPage(prevState => prevState+1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z" fill="#3E3E3E"></path></svg>
                    </span>
                </ul>

                <ul className={isCompare.length >= 1 ? "compare-list open" : "compare-list"}>
                    <li>{isCompare.length}</li>
                    <li
                        className={isCompare.length >= 2 ? "compare-btn open" : "compare-btn"}
                        onClick={() => dispatch(setModal(true, "compare"))}
                    >compare</li>
                    <li onClick={() => dispatch(unsetMovieCompare())}>reset</li>
                </ul>
            </div>
        </div>
    )
}