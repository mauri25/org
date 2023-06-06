import { useState } from "react";
import "./Caja.css";

const Caja = (props) =>{
   
   //Destructuracion

   const {type = "text"}=props

    const placeholderModificador = `${props.placeholder}...`

const manejarCambio = (e) => {
  
    props.actualizarValor(e.target.value)
}

    return <div className={`Caja campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificador} 
        required={props.required} 
        value = {props.valor} 
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Caja