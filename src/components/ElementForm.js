import styled, {css} from 'styled-components';

const colores = {
    borde:"#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const CajaForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }    
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;

    ${props => props.valido === 'false' && css`
        color: ${colores.error}
    `}
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 0 0 10px;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}      
        
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}   

`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display:none;

    ${props => props.valido === 'false' && css`
        display: block;
    `}  
    
`;

// const ContenedorTerminos = styled.p`
//    grid-column: span 2;
//`;

const ContenedordeBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 3
    
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 40%;
    background: #0097FF;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;    

    &hover{
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);
    }
`;

const MenajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: #FF3A3A;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        margin: 0;
    }    
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    display: none;

`;



export {CajaForm,
        Label,
        Input,
        LeyendaError,
        ContenedordeBoton,
        Boton,
        MenajeError,
        MensajeExito
    };