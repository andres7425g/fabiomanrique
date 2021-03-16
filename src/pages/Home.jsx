import React, { useState, useEffect } from "react";
import DataUbication from "../components/DataUbication";
import getFunction from "../components/getFunction";

const Home = () => {
  //Sate de data donde se guardaran los datos almacenados de la api
  const [data, setData] = useState({});

  // Se usua el useEffect con asincronismo para almasenar en la variable de estado una vez l funcion haya dado una respuesta 
  useEffect(() => {
    async function tempFunction() {
      let response = await getFunction();
      setData(response);
    }
    tempFunction();
  }, []);

  return (
    <div>
      {/* Se pasan los datos por props al componente donde se impromira la tabla */}
      <DataUbication data={data} />
    </div>
  );
};

export default Home;
