import "../style.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "primereact/button";

const Home = () => {
  return (
    <div id="contenedor">
      <div id="cabecera">
        <Header />
      </div>
      <div className="card flex justify-content-center">
        <table class="default" width="100">
          <tr>
            <td>
              <div>
                <img src="../home_1.png" />
              </div>
            </td>

            <td>
              <div>
                <img src="../home_2.png" />
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <p>
                Este increíble viaje de escapada te sorprenderá. Viajaremos a
                Prado Tolima para conocer una increíble cascada donde podrás
                disfrutar de un refrescante baño. Después de esta parada,
                continuaremos el viaje a la represa donde podremos disfrutar de
                este hermoso embalse rodeado de montañas de la cordillera
                oriental donde esperamos tener un maravilloso atardecer. Al
                siguiente día, nos sumergiremos en la represa sus farallones,
                islas, lagunas, cuevas, cascadas y mucho más. Un plan para
                descansar y despejar tu mente, admirar hermosos paisajes en un
                clima excelente para los que aman el sol. Las extensas aguas de
                la represa le han dado el calificativo del mar al interior de
                Colombia. Su clima, atractivos naturales y altas montañas serán
                el escenario para disfrutar de esta maravillosa escapada al
                Tolima. Prado es un municipio del departamento de Tolima,
                ubicado a 2 horas de Ibagué, la capital del departamento, y a 5
                horas de Bogotá. Su principal atractivo es la Represa Darío
                Echandía, ubicada a 15 minutos del municipio y alimentada por
                las aguas de los ríos Cunday y Negro y un gran número de
                quebradas, de las cuales nace el río Prado. Este lago artificial
                de 4.300 hectáreas navegables, las cuales cuenta con atractivos
                turísticos naturales como la cascada del amor, la laguna
                encantada, cueva de los guacharos, cueva del mohan, la isla de
                Cuba entre otros.
              </p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <div>
                <img src="../home_3.png" />
              </div>
              <div>
                <img src="../home_4.png" />
              </div>
            </td>
            <td colspan="2">
              <div className="card flex justify-content-center">
                <Button label="Suscribir Servicio" />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div>
                <img src="../home_mapa.png" />
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div id="pie">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
