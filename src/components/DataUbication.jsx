import React from "react";
import { useHistory } from "react-router-dom";

// Se traer los datos proporcionados por el componente padre
const DataUbication = ({ data }) => {
  let history = useHistory();

  //funcion de redireccion, que valida el codigo del país
  const redirect = (c_code) => {
    c_code === "CO"
      ? history.push("/autorizado")
      : history.push("/noautorizado");
  };

  // Destructuracion de datos
  const {
    IPv4 = "",
    city = "",
    country_code = "",
    latitude = "",
    longitude = "",
    postal = "",
    state = "",
  } = data || {};

  return (
    <div className="container">
      <div className="table">
        <h3>RCN te brinda tu información por geolocalización</h3>
        <div className="content-table">
          <span className="bold">Codigo de país:</span>
          <span>{country_code}</span>
          <span className="bold">Estado:</span>
          <span>{state}</span>
          <span className="bold">Ciudad:</span>
          <span>{city}</span>
          <span className="bold">Latitud:</span>
          <span>{latitude}</span>
          <span className="bold">Longitud:</span>
          <span>{longitude}</span>
          <span className="bold">Codigo postal:</span>
          <span>{postal}</span>
          <span className="bold">Ip:</span>
          <span>{IPv4}</span>
        </div>
      </div>

      <div className="button-container">
        <button onClick={() => redirect(country_code)}>
          Disfrute de nuesto contenido
        </button>
      </div>
    </div>
  );
};

export default DataUbication;
