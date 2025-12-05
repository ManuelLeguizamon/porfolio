import './Inicio.css'
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function Inicio(){
    return(
        <div className='inicio' id='inicio'>
        <div className="linea-vertical"></div>

        <div className='inicio-contenido'>

            <div className='inicio-izquierda'>
                <h1>Manuel Leguizamón</h1>
                <p className='sub-info'>
                    Desarrollo Software <br /> 
                    Buenos Aires, Argentina
                </p>
                <div className="icons">
                    <a href="https://instagram.com" target="_blank"><FaEnvelope size={30} /></a>
                    <a href="https://github.com/ManuelLeguizamon" target='_blank'><FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/manuel-leguizamon-620a01266/" target="_blank"><FaLinkedin size={30} /></a>
                </div>  
            </div>

            <div className='inicio-enlaces'>
                <a href="#proyectos">Proyectos</a>
                <a href="#sobreMi">Sobre Mi</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>


        </div>
    )
}