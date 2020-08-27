import React from "react";
// Interfaces
import { IResultado } from "../interfaces/IResultado";

// Definimos la interfaz de los props
interface IClimaProps {
  resultado: IResultado;
}

const Clima = ({ resultado }: IClimaProps) => {
  // Extraemos los valores
  const { name, main } = resultado;
  if (name.trim() === "") return null;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {Math.round(parseFloat(main.temp) - 273.15)} <span> &#x2103; </span>
        </p>
        <p>
          Temperatura Máxima:{" "}
          {Math.round(parseFloat(main.temp_max) - 273.15)}{" "}
          <span> &#x2103; </span>
        </p>
        <p>
          Temperatura Mínima:{" "}
          {Math.round(parseFloat(main.temp_min) - 273.15)}{" "}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

export default Clima;
