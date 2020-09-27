import getHash from "../utils/getHash";
import {getData, getCredits, getScore} from "../utils/getData";

const Movie = async () => {
    const id = getHash();
    const movie = await getData(id);
    const credit = await getCredits(id);

    const view = `
        <div class="Movies-view">
            <div class="Movie-img-card">
                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.original_title}" id="card"">
            </div>
            <div class="Movies-info">
                <h2>${movie.original_title}</h2>
                <h3>Overview: </h3><span>${movie.overview}</span>
                <h3>Original language: </h3><span>${movie.original_language}</span>
                <h3>Genres: </h3><span>${movie.genres.map(genres =>`${genres.name}`).join(' ')}</span>
                <h3>Qualification: </h3><span>${movie.vote_average}</span>
                
            </div>
            <div class="Movie-actors">
                <h3>Actors</h3>
                <p>${credit.cast.map(actors => `${actors.name}; `).join(' ')}</p>
                
            </div>
        </div>
    `;

    return view

};

export default Movie;