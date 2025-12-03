import './Inicio.css'
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

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
                    <a href="https://instagram.com" target="_blank"><FaInstagram size={30} /></a>
                    <a href="mailto:tuemail@gmail.com"><FaEnvelope size={30} /></a>
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank"><FaLinkedin size={30} /></a>
                </div>  
            </div>
            

            <div className='inicio-enlaces'>
                <a href="#">Proyectos</a>
                <a href="#">Sobre Mi</a>
                <a href="#">Contacto</a>
            </div>
        </div>


        </div>
    )
}