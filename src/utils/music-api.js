const BASE_URL = 'https://api.deezer.com'

export function getAllGenres(){
    return fetch(`${BASE_URL}/genre`)
        .then(data => data.json());
}