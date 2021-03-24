import React, {useEffect, useState} from "react"
import "./style.sass"

import popular from "../../img/icons/popular.svg"
import upcoming from "../../img/icons/upcoming.svg"
import byname from "../../img/icons/byname.svg"
import bygenre from "../../img/icons/bygenre.svg"

import {useDispatch, useSelector} from "react-redux";
import {selectCategory} from "../../store/reducers/filter";
import {useSelected} from "./useSelected";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.filter)

    const [options, setOptions] = useState([
        {id: 0, name: "Popular", url: "", icon: popular, selected: false},
        {id: 1, name: "Upcoming", url: "", icon: upcoming, selected: false},
        {id: 2, name: "Search by name", url: "", icon: byname, selected: false},
        {id: 3, name: "By Genre", url: "", icon: bygenre, selected: false},
    ])


    const selectFilter = (id) => {
        options.map(item => item.selected = false)
        const updArr = [...options]
        updArr[id].selected = !updArr[id].selected
        dispatch(selectCategory(options.find(item => item.selected === true)))
        setOptions(updArr)
    }

    return(
        <div className={filter ? "component-filter open" : "component-filter"}>
            <div className="inn">
                <h3>Search settings</h3>
                <ul className="select-list">
                    {options.map( (item, index) => {
                        return(
                            <li key={index} className={item.selected ? "option selected" : "option"} onClick={() => selectFilter(item.id)}>
                                <img src={item.icon} alt=""/>
                            </li>
                        )
                    } )}
                </ul>

                <div className="select-output">
                    {useSelected()}
                </div>
            </div>
        </div>
    )
}