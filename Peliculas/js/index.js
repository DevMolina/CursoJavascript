const URL_PATH = "https://api.themoviedb.org/";
const API_KEY = "a5356fe339ed305b8172834c7c3b4026";
// https://api.themoviedb.org/3/movie/now_playing?api_key=a5356fe339ed305b8172834c7c3b4026&language=es-ES&page=1

document.addEventListener("DOMContentLoaded", () => {
    renderNewMovies();
    renderListMovies('popular','now-playing__list');
    renderListMovies('top_rated','top-rated-playing__list');
})

const getMovies = (type) => {
    const url = `${URL_PATH}3/movie/${type}?api_key=${API_KEY}&language=es-ES&page=1`;
    return fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .catch(error => console.log(error))
}

const renderNewMovies = async () => {
    const newMovies = await getMovies('now_playing');
    // console.log(newMovies);

    let html = '';

    newMovies.forEach((movie,index) => {
        const {id, title, overview, backdrop_path} = movie;
        const urlImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
        const ulrMovie = `../movie.html?id=${id}`

        html += `
            <div class="carousel-item ${index === 0 ? "active":null}" style="background-image: url('${urlImage}')">
                <div class="carousel-caption">
                    <h5>${title}</h5>
                    <p>${overview}</p>
                    <a href="${ulrMovie}" class = "btn btn-primary">Más información</a>
                </div>
            </div>
        `;
    });

    html += `
    <button class="carousel-control-prev" type="button" data-target="#carousel-news-movies" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carousel-news-movies" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
    </button>
    `

    document.getElementsByClassName('list-new-movies')[0].innerHTML = html;

}

const renderListMovies = async (type,classLoc) => {
    const movies = await getMovies(type);
    // console.log(movies);
    let html = "";
    movies.forEach((movie, index) => {
        // console.log(movie,index);
        const {id, title, poster_path} = movie;
        const movieCover =`https://image.tmdb.org/t/p/original${poster_path}`;
        const ulrMovie = `../movie.html?id=${id}`;
        // console.log(movieCover);
        if(index < 10){
            html += `
                <li class="list-group-item">
                    <img src="${movieCover}" alt="${title}">
                    <h3>${title}</h3>
                    <a href="${ulrMovie}" class="btn btn-primary">Ver más</a>
                </li>
            `
        }
        document.getElementsByClassName(classLoc)[0].innerHTML = html;
    })
}