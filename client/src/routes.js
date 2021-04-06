import React from "react"
import {Switch, Route, BrowserRouter,} from "react-router-dom"

//Not auth
import {Register} from "./components/Register/Register";
import {Login} from "./components/Login/Login";


//Auth
import {Main} from "./pages/Main/Main";
import {Collection} from "./pages/Collection/Collection";
import {About} from "./pages/About/About";
import {Header} from "./components/Header/Header";
import {Rated} from "./pages/Rated/Rated";
import {Upcoming} from "./pages/Upcoming/Upcoming";
import {Single} from "./pages/Single/Single";



export const useRoutes = (isUser) => {
    if(isUser){
        return (
            <>
                <Header compareMovies={true} />
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/rated" exact component={Rated}/>
                    <Route path="/upcoming" exact component={Upcoming}/>
                    <Route path="/collection" exact component={Collection}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/movie/:id" exact component={Single}/>
                </Switch>
            </>
        )
    } else {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register} />
                {/*<Redirect to="/login" />*/}
            </Switch>
        )
    }

}