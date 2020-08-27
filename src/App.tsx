import React, { Fragment, useState, useEffect } from "react";
// Intefaces
import { IBusqueda } from "./interfaces/IBusqueda";
import { IResultado } from "./interfaces/IResultado";
// Componentes
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  // Definimos el state
  const [busqueda, guardarBusqueda] = useState<IBusqueda>({
    ciudad: "",
    pais: "",
  });
  const [consultar, guardarConsultar] = useState<boolean>(false);
  const [resultado, guardarResultado] = useState<IResultado>({
    name: "",
    main: {
      temp: "",
      temp_min: "",
      temp_max: "",
    },
    cod: "",
  });
  const [error, guardarError] = useState<boolean>(false);
  // Extraemos los valores
  const { ciudad, pais } = busqueda;

  // Definimos el useEffect, cada vez que cambie la consulta se ejecuta de nuevo
  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appid: string = "206f48f41b4607556ab9094da78a4e89";
        const url: string = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

        // Hacemos la petición a la API
        const petGET: IResultado = await (await fetch(url)).json();
        guardarResultado(petGET);
        // Reestablcemos la consulta
        guardarConsultar(false);
        // Si al hacer la consulta obtenemos un error 404 ("La ciudad no se ha encontrado"), se tiene que producir un error
        resultado.cod === "404" ? guardarError(true) : guardarError(false);
      }
    };
    consultarAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {ciudad !== "" ? (
                error ? (
                  <Error mensaje="No hay resultados" />
                ) : (
                  <Clima resultado={resultado} />
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
