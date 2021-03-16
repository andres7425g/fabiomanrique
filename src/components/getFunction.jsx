import axios from "axios";

// funcion asincrona que trae los datos de la api, a travez de la libreria axios
async function getFunction() {
  var data;

  var config = {
    method: "get",
    url:
      // End point que trae la ubicacion de la maquina que se este usando
      "https://geolocation-db.com/json/e18cd550-7ab3-11eb-b603-3d466becf114/",
      // End point que trae la ubicacion de una maquina en Canada
      //"https://geolocation-db.com/json/e18cd550-7ab3-11eb-b603-3d466becf114/173.176.188.235",
    headers: {},
  };

  try {
    const resp = await axios(config);
    const dat = resp.data;
    data = dat;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }

  return data;
}

export default getFunction;
