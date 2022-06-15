import React from 'react';
import './FondoServices.css';
import banerS from '../img/baner-services.png';
import {ServicesProps} from './Props';


const ServicesFondo = () => {
  return (
    <>
    <div className="container-numero">

<img
   className="d-block w-100"
   src={banerS}
   alt="imcetron"
 />
<div className='container-title'>
<div className="title-main">
<h3 className="title-service">Nuestros Servicios</h3>
</div>
<p className='texto-services'>Garantizamos la mejor experiencia
 a nuestros clientes</p>
</div>   

</div>

<ServicesProps 
title='Trayectoria'
name='Nuestra historia'
context='Conozca un poco más acerca de nuestra trayectoria y nuestros logros cumplidos desde los inicios de Imcetron hasta la actualidad.'/>


</>
  );
}


export default ServicesFondo;
