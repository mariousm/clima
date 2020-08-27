import React from "react";

// Definimos la interfaz para los props
interface IErrorProps {
  mensaje: string;
}

const Error = ({ mensaje }: IErrorProps) => {
  return (
  <p className="red bg-darken-4 error">{mensaje}</p>
  );
};

export default Error;
