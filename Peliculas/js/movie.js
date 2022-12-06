const URL_PATH = "https://api.themoviedb.org/";
const API_KEY = "a5356fe339ed305b8172834c7c3b4026";
let movie_ID = "";

document.addEventListener("DOMContentLoaded", () => {
    movie_ID = getUrlVars().id;
    renderMoviesDetails(movie_ID);
});

const getUrlVars = () => {
    let vars = {};
    // Expresión regular para recoger parámetros desde URL
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value){
        vars[key] = value;
    })
    return vars;
}

const getMovieDetails = (movieId) => {
    const url = `${URL_PATH}3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`;
    // console.log(url);

    return fetch(url)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log(error))
}

const renderMoviesDetails = async (movieId) => {
    const movieDetails = await getMovieDetails(movieId)
    // console.log(movieDetails);
    const {backdrop_path, poster_path, title, overview, genres, release_date} = movieDetails
    renderBackground(backdrop_path);
    renderPoster(poster_path, title);
    renderMovieData(title, overview, genres, release_date);
    getTeaser(movieId);
}

const renderBackground = (backdrop_path) => {
    const urlBackground = `https://image.tmdb.org/t/p/original/${backdrop_path}`
    document.getElementsByClassName("movie-info")[0].style.backgroundImage = `url('${urlBackground}')`;
}

const renderPoster = (poster_path, title) => {
    const urlPoster = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const html = `
        <img src ="${urlPoster}" class = "img-fluid movie-info__poster-img" alt="${title}">
    `;
    document.getElementsByClassName("movie-info__poster")[0].innerHTML = html;
}

const renderMovieData = (title, overview, genres, release_date) => {
    const dataSplit = release_date.split('-');
    let htmlGeneres = "";
    // console.log(genres);
    genres.forEach(gen => {
        htmlGeneres +=`
            <li>${gen.name}</li>
        `;        
    });

    // console.log(dataSplit);
    const html = `
        <h1>
            ${title}
            <span class="date-any">${dataSplit[0]}</span>
            <span class="teaser" data-toggle="modal" data-target="#video-teaser">
                <i class="fa-solid fa-play"></i></i>Ver trailer
            </span>
        </h1>
        <h5>General</h5>
        <p>${overview}</p>
        <h5>Géneros</h5>
        <ul>
            ${htmlGeneres}
        </ul>
    `;
    document.getElementsByClassName("movie-info__data")[0].innerHTML = html;
}


const getTeaser = (movieId) => {
    const url = `${URL_PATH}3/movie/${movieId}/videos?api_key=${API_KEY}&language=es-ES`;

    fetch(url)
        .then(response => response.json())
        .then(result => renderTeaser(result.results))
        .catch(error => console.log(error))
}

const renderTeaser = (objVideo) => {
    let keyVideo = "";
    console.log(objVideo);
    objVideo.forEach(video => {
        if(video.site === "YouTube"){
            keyVideo = video.key;
            title = video.name;
        }
        
    });

    let urlIframe = "";
    if(keyVideo !== ""){
        urlIframe = `
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${keyVideo}" 
        title="${title}" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    }else{
        urlIframe = `<div class="no-teaser">La película no tiene trailer</div>`
    }

    document.getElementsByClassName("video-teaser-iframe")[0].innerHTML = urlIframe;
    
    
}