
const API_URL = "https://api.themoviedb.org/3";

export function getFetch(path) {

   return fetch(API_URL + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjM3YzVkZjYyMjExZWZmMGM3NDU5MmVlZWQyNTZiZiIsInN1YiI6IjY0MWE5NWYwMTQyZWYxMDBkOWJhZjQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gj2xvmLc1o5LNT7OpRv6t3kCSeODnMBqQog--pncrNw",

            "Content-type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json())
}

