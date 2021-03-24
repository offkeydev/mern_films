import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import "./style.sass"
import {setLoader} from "../../store/reducers/loader";
import {setUser} from "../../store/reducers/user";
import axios from "axios";
import {serverLog} from "../../api/config";

export const Login = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState({
        email: "", password: "",
    })

    const handleLogin = (e) => {
        setLogin({...login, [e.target.name] : e.target.value})
    }

    const loginUser = () => {
        dispatch(setLoader(true))
        axios.post(serverLog, login)
            .then(resp => {
                dispatch(setUser(resp.data))
                dispatch(setLoader(false))
            })
            .catch(err => {
                dispatch(setLoader(false))
                console.log(err)
            })
    }

    return(
        <section className="component-login">
            <div className="inn">
                <div className="form">
                    <input type="email" name="email" placeholder="Email" onChange={e => handleLogin(e)}/>
                    <input type="password" name="password" placeholder="Password" onChange={e => handleLogin(e)}/>
                </div>
                <button onClick={() => dispatch(loginUser)}>SignIn</button>
                <NavLink to="/register">Register</NavLink>
            </div>
        </section>
    )
}