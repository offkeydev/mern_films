import React from "react";
import "./style.sass"
import loader from "../../../img/loader.svg"
import {useSelector} from "react-redux";
export const Loader = () => {
    const load = useSelector(state => state.loader.loader)
    return(
        <div className={load  ? "loader open" : "loader"}>
            <div className="load-image">
                <img src={loader} alt=""/>
            </div>
        </div>
    )
}