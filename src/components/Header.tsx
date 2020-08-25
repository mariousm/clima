import React from "react";

// Definimos la interfaz para los props
interface IHeaderProps {
  titulo: string;
}

const Header = ({ titulo }: IHeaderProps) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-2">
        <a href="#!" className="brand-logo">{titulo}</a>
      </div>
    </nav>
  );
};

export default Header;
