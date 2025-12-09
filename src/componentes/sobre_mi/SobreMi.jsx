import './SobreMi.css'
import { FaPython, FaHtml5, FaReact, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiSqlite, SiPandas, SiJavascript } from "react-icons/si";



// <a href="https://instagram.com" target="_blank"><FaPython size={30} /></a>



export function SobreMi(){
    return(
        <div className="sobreMi" id="sobreMi">
            <hr className='hr-SobreMi'/>
            <h2 className='sobreMi-titulo'>Sobre Mí</h2>

            <div className='sobreMi-contenedor'>
                <div className="sobreMi-card">
                    <h3>Informacion Personal</h3>
                    <p className='sobreMiData'>Manuel Leguizamón, oriundo de Buenos Aires, Argentina.<br />Durante mi camino he trabajado en proyectos que integran lógica, diseño, manejo de datos y experiencia de usuario, buscando siempre optimizar tanto la funcionalidad como la organizacion del trabajo. <br />Me interesa explorar nuevas tecnologías, entender cómo funcionan y como puedo aplicarlas en mis proyectos para seguir creciendo en el mundo del desarrollo
                    </p>
                    
                    <h3>Educacion</h3>
                    <ul className='educacion sobreMiData'>
                        <li>Secundario terminado, titulo Bachiller. </li>
                        <li>Tecnicatura en Desarrollo Software en el <a href="https://www.ifts18.edu.ar/" target='_BLANK'>IFTS 18</a></li>
                        <li>Autoaprendizaje constante mediante cursos online y documentación oficial</li>
                    </ul>

                    
                    <h3>Skills</h3>
                    <ul className='skills sobreMiData'>
                        <li><FaPython /> Python</li>
                        <li><SiDjango /> Django</li>
                        <li><SiPandas /> Pandas</li>
                        <li><FaBootstrap /> Bootstrap</li>
                        <li><SiSqlite /> SQL</li>
                        <li><SiJavascript /> JavaScript</li>
                        <li><FaReact /> React Js</li>
                        <li><FaHtml5 /> HTML5</li>
                        <li><FaCss3/> CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}