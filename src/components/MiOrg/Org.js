
import "./Org.css"

const MiOrg = (props) => {

//Estado - hooks
//useState
//useState()
//const [nombreVariable, funcionActualizar] = useState(valorInicial)
//console.log(props)
//const [mostrar, actualizarMostrar] = useState(true)
//const manejarClick = () => {
 //   console.log("Mostrar/Ocultar elemenento");
//}

    return <section className="OrgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg