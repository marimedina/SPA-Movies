import {getMovies} from '../utils/getData';
import Movie from '../pages/Movies';

const Home = async () => {
    const movie = await getMovies();
    console.log(movie);
    const view = `
        <div class="home">
            ${movie.results.map(movie => `
                <a href="#/${movie.id}/">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    <h2>${movie.original_title}</h2>
                </a>
            `).join('')}
        </div>
        
    `
    return view;
}

export default Home;