import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom"
import {Loader} from "./components/ui/loader/Loader";
import {useRoutes} from "./routes";
import {Modal} from "./components/ui/modal/Modal";
import {useSelector} from "react-redux";

const App = () => {

    const token = useSelector(state => state.user.token)
    const isCompare = useSelector(state => state.movies.compareMovies)

    // useEffect(() => {
    //     console.log("APP Compare movies", isCompare)
    //     console.log("APP USER IS", token)
    // }, [token])

    const routes = useRoutes(token)

    return (
        <>
            <BrowserRouter>
                <div className="app">
                    {routes}
                </div>
            </BrowserRouter>

            <Loader />
            <Modal />
        </>
    );
}

export default App;
