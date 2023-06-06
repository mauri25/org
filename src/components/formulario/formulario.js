import "./formulario.css"
import Caja from "../Caja/Caja"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../boton/BotonCrear"
import { useState } from "react"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const [registrarColaborador, crearEquipo] = props

const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Manejar el envio")
    let datosAEnviar = {
        nombre: nombre,
        puesto: puesto,
        foto: foto,
        equipo
    }
    registrarColaborador(datosAEnviar);
}

const manejarNuevoEquipo = (e) => {
  e.preventDefault()
  crearEquipo({titulo, colorPrimario: color })
}

    return <section className="formulario">
<form onSubmit={manejarEnvio}>
    <h2>Rellena el formulario para crear el colaborador.</h2>
    <Caja titulo= "Nombre" 
    placeholder="Ingrese nombre"
      required 
       valor={nombre} 
       actualizarValor={actualizarNombre}/>
    <Caja titulo= "Puesto"
    placeholder="Ingrese púesto"
      required
      valor={puesto} 
       actualizarValor={actualizarPuesto}
      />
    <Caja titulo= "Foto"
     placeholder="Ingrese enlace de foto" 
       required
       valor={foto} 
       actualizarValor={actualizarFoto}
       />
    <ListaOpciones valor={equipo}
     actualizarEquipo={actualizarEquipo}
     equipos={props.equipos}/>
    
    <Boton>
        Crear
    </Boton>
</form>
<form onSubmit={manejarNuevoEquipo}>
    <h2>Rellena el formulario para crear el equipo.</h2>
    <Caja titulo= "Titulo" 
    placeholder="Ingrese titulo"
      required 
       valor={titulo} 
       actualizarValor={actualizarTitulo}/>
    <Caja titulo= "Color"
    placeholder="Ingrese el color en Hex"
      required
      valor={color} 
       actualizarValor={actualizarColor}
       type="color"
      />
      <Boton>Registrar equipo</Boton>
      </form>

    </section>

}

export default Formulario