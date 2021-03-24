import React from "react"
import {Switch, Route,} from "react-router-dom"

//Not auth
import {Register} from "./components/Register/Register";
import {Login} from "./components/Login/Login";


//Auth
import {Main} from "./pages/Main/Main";
import {Collection} from "./pages/Collection/Collection";
import {About} from "./pages/About/About";
import {Header} from "./components/Header/Header";
import {Filter} from "./components/Filter/Filter";


export const useRoutes = (isUser) => {
    if(isUser){
        return (
            <>
                {/*<Header />*/}
                <Filter />
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/collection" exact component={Collection}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </>
        )
    } else {
        return (
            <Switch>
                <Route path="/" component={Login}/>
                <Route path="/register" component={Register} />
                {/*<Redirect to="/login" />*/}
            </Switch>
        )
    }

}