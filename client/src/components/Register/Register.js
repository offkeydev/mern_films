import React, {useState} from "react";
import "./style.sass"
import axios from "axios";
import {serverReg} from "../../api/config";

export const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        registerDate: new Date().getTime(),
        movies: [],
    })

    const handleRegister = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const registerUser = () => {
        // axios.post(serverReg, user)
        //     .then(resp => {
        //         console.log("register",resp)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        axios.post('http://localhost:8089/api/users/register', user)
            .then(resp => {
                console.log("register",resp)
            })
            .catch(err => {
                console.log(err)
            })


    }

    return(
        <section className="component-register">
            <div className="inn">
                <div className="form">
                    <input type="text" name="name" placeholder="Name" onChange={e => handleRegister(e)}/>
                    <input type="email" name="email" placeholder="Email" onChange={e => handleRegister(e)}/>
                    <input type="password" name="password" placeholder="Password" onChange={e => handleRegister(e)}/>
                </div>
                <button onClick={registerUser}>Register</button>
            </div>
        </section>
    )
}