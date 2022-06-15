import React from "react";
import ContactFondo from "../FondoContact";
import  Formulario  from "../Formulario";


export const Contacto= () => {
  return (
    <>
    <div className="container-carrusel">
    <ContactFondo />
    </div>
    <div className="mapa">
      mapa
    </div>
    <div className="formularioC">
      <div className="tituloC">
      <h2>¿titulo?</h2>
      <p>parrafo</p> 
      </div>
      <Formulario />
    </div>
 
  </>
  );
};