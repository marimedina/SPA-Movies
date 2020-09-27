
const key = "924a9864b95ad82864661b2782823f3f"

const getMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

const getData = async (id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

const getCredits = async (id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
};

const getScore = async (id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
}



export {getMovies, getData, getCredits, getScore};