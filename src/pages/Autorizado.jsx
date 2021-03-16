import React, { useState, useEffect } from "react";
import getFunction from "../components/getFunction";
import Video from "../components/Video";
import NoAutorizado from "./No-Autorizado";

import cargando from "../assets/img/cargando.gif";

const Autorizado = () => {
   //Sate de data donde se guardaran los datos almacenados de la api
  const [data, setData] = useState({});
   //Sate de loading que cambiara su dato una vez la api haya dado una respuesta
  const [loading] = useState(true);

   // Se usua el useEffect con asincronismo para almasenar en la variable de estado una vez l funcion haya dado una respuesta
  useEffect(() => {
    async function tempFunction() {
      let response = await getFunction();
      setData(response);
    }
    tempFunction();
  }, []);

  //Se hace destructuracion de datos para traer el codigo del pais
  const { country_code } = data;

  //Validacion de codigo de pais Colombia
  if (country_code === "CO") {
    return (
      <div className="video-container">
        <h1>Bienvenido al contenido exlcusivo de RCN</h1>
        <Video />
      </div>
    );
  } else if (loading) {
    return (
      <div className="video-container">
        <img src={cargando} alt="loading..." />
      </div>
    );
  } else {
    return <NoAutorizado />;
  }
};

export default Autorizado;
