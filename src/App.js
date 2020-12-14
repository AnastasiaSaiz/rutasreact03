import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Pelicula = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <img src={props.imagen} alt="" />
      <p>{props.sinopsis}</p>
    </div>
  )
}

function App() {
  const [peliculas, setPeliculas] = useState([
    {
      id: "1",
      imagen: "https://checalamovie.net/wp-content/uploads/2020/03/The-Way-Back-Poster.png",
      titulo: "The Way Back",
      sinopsis: "Sinopsis: Una antigua estrella del baloncesto caída en desgracia y sumido en el terrible mundo de las adicciones trata de volver al sendero correcto como entrenador de un equipo de instituto cuya mayor peculiaridad es estar compuesto por un variopinto grupo de estudiantes",

    },
    {
      id: "2",
      imagen: "https://pics.filmaffinity.com/La_caba_a-780836809-large.jpg",
      titulo: "La Cabaña",
      sinopsis: "Después de sufrir una tragedia familiar, Mack Phillips (Sam Worthington) cae en una profunda depresión que le lleva a cuestionar todas sus creencias. Sumido en una crisis de fe, recibe una enigmática carta donde un misterioso personaje le cita en una cabaña abandonada en lo más profundo de los bosques de Oregón. A pesar de sus dudas, Mack viaja a la cabaña, donde se encontrará con alguien inesperado. Este encuentro conducirá a Mack a enfrentarse a importantes verdades, que no sólo transformarán su comprensión de la tragedia sino que harán que su vida cambie para siempre."

    }
  ]);

  const mostrarPeliculas = peliculas.map(pelicula => {
    return (
      <div>
        <Link to={"/" + pelicula.titulo} ><h1>{pelicula.titulo}</h1></Link>
        <img src={pelicula.imagen} />
      </div>
    )
  })
  return (
    <BrowserRouter>
      
      <Route exact path="/The Way Back">
      <Pelicula titulo={peliculas[0].titulo} imagen={peliculas[0].imagen} sinopsis={peliculas[0].sinopsis} />
      </Route>
      <Route exact path="/La Cabaña">
      <Pelicula titulo={peliculas[1].titulo} imagen={peliculas[1].imagen} sinopsis={peliculas[1].sinopsis} />
      </Route>
      <Route exact path="/">
      {mostrarPeliculas}
      </Route>
    </BrowserRouter>
  )

}

export default App;
