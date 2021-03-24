

//Production
// export const config = "http://test.nodetest.fun/api/users"
export const register = "/api/users/register"
export const apilogin = "/api/users/login"
export const  serverReg = "http://test.nodetest.fun/api/users/register"
export const serverLog = "http://test.nodetest.fun/api/users/login"



//FILMS
export const key = "b1efc1714d8a767fd19a9424d8031aca"
export const endpoints = {
    test: `https://api.themoviedb.org/3/movie/550?api_key=${key}`,
    getGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
    getFilmByGenre: (id) => {
        return `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}`
    }
}