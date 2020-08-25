import React, { useState } from "react";
import { IBusqueda } from "../interfaces/IBusqueda";

const Formulario = () => {
  // Definimos el state
  const [busqueda, guardarBusqueda] = useState<IBusqueda>({
    ciudad: "",
    pais: "",
  });

  const [error, guardarError] = useState<boolean>(false);

  // Extraer los valores
  const { ciudad, pais } = busqueda;

  // Función que guarda lo elementos en el status cuando hay un cambio en el formulario
  const handleChange = (e: any) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario da submit al form
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Pasar al componente principal
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red bg-darken-4 error">Todos los campos son obligatorios</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País: </label>
      </div>

      <div className="input-field col s12">
          <input 
            type="submit"
            className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
            value="Buscar Clima"
          />
      </div>
    </form>
  );
};

export default Formulario;
