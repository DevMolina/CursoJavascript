// Quitar la recarga automatica de la pagina web para evitar que se borren los datos.

function enviarFormulario(){
    event.preventDefault();
    console.log("Formulario Enviado");
}

// Petición GET con Fetch
function getPeliculasPopulares(){
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=a5356fe339ed305b8172834c7c3b4026&language=es-ES&page=1"
    // .then para extraer información de la promesa
    fetch(url).then(response =>{
        return response.json();
    }).then(result => {
        console.log(result);
        const peliculas = result.results;
        peliculas.forEach(pelicula => {
            const {title, vote_count, vote_average, poster_path} = pelicula;
            console.log(vote_count);
        });
    })
    

}

getPeliculasPopulares();