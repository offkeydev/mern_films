// ACTION TYPES
const SET_MOVIES_BY_GENRE = "SET_MOVIES_BY_GENRE"
const SET_MOVIE_INFO = "SET_MOVIE_INFO"
const SET_MOVIE_COMPARE = "SET_MOVIE_COMPARE"
const UNSET_MOVIE_COMPARE = "UNSET_MOVIE_COMPARE"

export const setMoviesGenre = (param) => {
    return{
        type: SET_MOVIES_BY_GENRE,
        payload: param
    }
}

export const setMovieInfo = (movie) => {
    return{
        type: SET_MOVIE_INFO,
        payload: movie
    }
}

export const setMovieCompare = (movieArray) => {
    console.log(movieArray)
    return{
        type: SET_MOVIE_COMPARE,
        payload: movieArray
    }
}

export const unsetMovieCompare = () => {
    return{
        type: UNSET_MOVIE_COMPARE,
    }
}

//INITIAL STATE
const initialState = {
    movies: [],
    movie: null,
    compareMovies: [],
}

export default function (state = initialState, action){
    switch (action.type){
        case SET_MOVIES_BY_GENRE:
            return {
                ...state,
                movies: action.payload
            }
        case SET_MOVIE_INFO:
            return {
                ...state,
                movie: action.payload
            }
        case SET_MOVIE_COMPARE:
            return {
                ...state,
                compareMovies: [...state.compareMovies, action.payload]
            }
        case UNSET_MOVIE_COMPARE:
            return {
                ...state,
                compareMovies: []
            }


        default: return state
    }
}