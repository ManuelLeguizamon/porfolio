import './Contacto.css'
import { FaCopy, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


export function Contacto() {
    return(
        <div className='contacto-contenedor'>
            <hr />
            <h2 className='contacto-titulo' id='contacto'>Contacto</h2>
            <div className='contacto-card'>
                <p className='contactoItem'>leguimanu00@gmail.com<FaCopy
                    onClick={() => navigator.clipboard.writeText("leguimanu00@gmail.com")}
                    size={25}
                    style={{ cursor: "pointer" }}/></p>                  
                    <a href="https://github.com/ManuelLeguizamon" target='_blank' className='contactoItem'>GitHub<FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/manuel-leguizamon-620a01266/" target="_blank" className='contactoItem'>Linkedin<FaLinkedin size={30} /></a>            
            </div>
        </div>
    )
}