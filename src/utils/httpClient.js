



const API_URL = "https://api.themoviedb.org/3";

export async function getFetch(path) {
    const response = await fetch(API_URL + path, {
        headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
            "Content-type": "application/json;charset=utf-8"
        }
    });
    const result = await response.json();
    return result;
}
