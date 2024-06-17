import peliculas from "./peliculas.js";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

//  Contenedores de los géneros
const generoAccion = document.getElementById("genero-28");
const generoThriller = document.getElementById("genero-53");
const generoAventura = document.getElementById("genero-12");

function crearElementoPelicula(pelicula) {
  const peliculaDiv = document.createElement("div");
  peliculaDiv.classList.add("pelicula");

  const img = document.createElement("img");
  img.src = baseImageUrl + pelicula.poster_path; // Uso de concatenación de cadenas
  img.alt = pelicula.title;

  const titulo = document.createElement("h3");
  titulo.textContent = pelicula.title;
  titulo.setAttribute("title", pelicula.title); // Añadir el atributo title

  peliculaDiv.appendChild(img);
  peliculaDiv.appendChild(titulo);

  return peliculaDiv;
}

// Creo esta función para agregar películas al contenedor
function agregarPeliculasAContenedor(peliculas, contenedor) {
  peliculas.forEach((pelicula) => {
    const elementoPelicula = crearElementoPelicula(pelicula);
    contenedor.appendChild(elementoPelicula);
  });
}

// Esta funcioon la creo para filtrar películas por género
const peliculasAccion = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(28)
);
const peliculasThriller = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(53)
);
const peliculasAventura = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(12)
);

// asi muestro las películas filtradas en los contenedores correspondientes
agregarPeliculasAContenedor(peliculasAccion, generoAccion);
agregarPeliculasAContenedor(peliculasThriller, generoThriller);
agregarPeliculasAContenedor(peliculasAventura, generoAventura);
