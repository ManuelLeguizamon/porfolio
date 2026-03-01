import './Contacto.css'
import { useState } from 'react';
import { FaCopy, FaLinkedin, FaGithub } from "react-icons/fa";


export function Contacto() {

    const [copiado, setCopiado] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("leguimanu00@gmail.com");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 800);
    };

    return(
        <div className='contacto-contenedor'>
            <hr />
            <h2 className='contacto-titulo' id='contacto'>Contacto</h2>
            <div className='contacto-card' id='contacto'>

                 <p className='contactoItem'>
                    <b>leguimanu00@gmail.com</b>
                    {!copiado ? (
                        <FaCopy
                            onClick={handleCopy}
                            size={25}
                            style={{ cursor: "pointer", marginLeft: "5px" }}
                        />
                    ) : (
                        <span 
                            className="copiado-msj"
                            style={{ marginLeft: "5px", color: "green" }}
                        >
                            ✔
                        </span>
                    )}
                </p>                  

                    <a href="https://github.com/ManuelLeguizamon" target='_blank' className='contactoItem'>GitHub<FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/manuel-leguizamon-620a01266/" target="_blank" className='contactoItem'>Linkedin<FaLinkedin size={30} /></a>            
            </div>
        </div>
    )
}

