export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovies() {
    return async function (dispatch) {
        const apidata = await fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
        return dispatch({
            type: 'GET_MOVIES',
            data: apidata
        })
    }
}

export function getMovie(id) {
    return async function (dispatch) {
        const apidata = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json())
        return dispatch({
            type: 'GET_MOVIE',
            data: apidata
        })
    }
}

export function resetMovie() {
    return {
        type: 'RESET_MOVIE'
    }
}