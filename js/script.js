import peliculas from "./peliculas.js";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

// Contenedores de los géneros
const generoAccion = document.getElementById("genero-28");
const generoThriller = document.getElementById("genero-53");
const generoAventura = document.getElementById("genero-12");

// Función para crear un elemento de película
function crearElementoPelicula(pelicula) {
  const peliculaDiv = document.createElement("div");
  peliculaDiv.classList.add("pelicula");

  const img = document.createElement("img");
  img.src = `${baseImageUrl}${pelicula.poster_path}`;
  img.alt = pelicula.title;

  const titulo = document.createElement("h3");
  titulo.textContent = pelicula.title;

  peliculaDiv.appendChild(img);
  peliculaDiv.appendChild(titulo);

  return peliculaDiv;
}

// Función para agregar películas a un contenedor específico
function agregarPeliculasAContenedor(peliculas, contenedor) {
  peliculas.forEach((pelicula) => {
    const elementoPelicula = crearElementoPelicula(pelicula);
    contenedor.appendChild(elementoPelicula);
  });
}

// Filtrar películas por género
const peliculasAccion = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(28)
);
const peliculasThriller = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(53)
);
const peliculasAventura = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(12)
);

// Agregar películas filtradas a los contenedores correspondientes
agregarPeliculasAContenedor(peliculasAccion, generoAccion);
agregarPeliculasAContenedor(peliculasThriller, generoThriller);
agregarPeliculasAContenedor(peliculasAventura, generoAventura);
