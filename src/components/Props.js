import  { SliderServi }  from "../components/Sliderprod";
import imgOne from '../img/Mask1.png';



export function EmpresaProps(props){
    return(
        <>
        {/*History*/}
<div className='container-empresas'>
  <div className='container-context'>
<div className='history'>
<p>{props.title}</p>
<h2>{props.name}</h2>
</div>
<div className='context'>
<p>{props.context}
</p>
</div>
</div>
<div className='imgOne'>
<img
          className="d-block w-100"
          src={imgOne}
          alt="Imcetron"
        />
</div>
</div>
</>
    );
}


export function ServicesProps(props){
  return(
 <>
<div className='container-empresas'>
<div className='container-context'>
<div className='history'>
<p>{props.title}</p>
<h2>{props.name}</h2>
</div>
<div className='context'>
<p>{props.context}
</p>
</div>
</div>
</div>

    <div className='caja'>

      <div className='sliderServices'>
      <SliderServi /> 
      </div>
    </div>
    
    </>
  );
};



