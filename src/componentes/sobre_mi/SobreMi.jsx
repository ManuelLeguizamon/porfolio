import './SobreMi.css'
import { FaPython, FaHtml5, FaReact, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiSqlite, SiPandas, SiJavascript, SiSelenium } from "react-icons/si";



// <a href="https://instagram.com" target="_blank"><FaPython size={30} /></a>



export function SobreMi(){
    return(
        <div className="sobreMi" id="sobreMi">
            <hr className='hr-SobreMi'/>
            <h2 className='sobreMi-titulo'>Sobre Mí</h2>

            <div className='sobreMi-contenedor'>
                <div className="sobreMi-card">
                    <h3>Informacion Personal</h3>
                    <p className='sobreMiData informacion info-primera'>
                        <b>Manuel Leguizamón</b><br /><b>Full Stack</b> - <b>QA</b> <br />
                    </p>
                    <p className='sobreMiData informacion'>Buenos Aires, Argentina.
                        Durante mi camino he trabajado en proyectos integrando <b>lógica, diseño, manejo de datos, depuración del codigo y experiencia de usuario</b>, buscando siempre optimizar la organización del trabajo, manteniendo orden en cada proyecto trabajando con <b>metodologias agiles</b>, principalmente Scrum. <br /> Tengo conocimientos basicos sobre <b>Redes, sistemas en la nube y Ciberseguridad</b>. <br />Solidas <b>habilidades blandas</b>. <br />Me entuciasma aplicar mis conocimientos en proyectos y aprender nuevas herramientas. 
                    </p>
                    
                    <h3>Educacion</h3>
                    <ul className='educacion sobreMiData'>
                        <li>Secundario terminado, titulo Bachiller. </li>
                        <li>Tecnicatura en Desarrollo Software en el <a href="https://www.ifts18.edu.ar/" target='_BLANK'>IFTS-18</a></li>
                        <li>Autoaprendizaje constante mediante cursos online y documentación oficial</li>
                    </ul>

                    
                    <h3>Skills</h3>
                    <ul className='skills sobreMiData'>
                        <li><FaPython /> Python</li>
                        <li className='skill-no-spacing'><SiJavascript /> JavaScript</li>
                        <li><SiSqlite /> SQL</li>
                        <li><SiDjango /> Django</li>
                        <li><FaReact /> React Js</li>
                        <li><SiPandas /> Pandas</li>
                        <li ><SiSelenium /> Selenium</li>
                        <li><FaHtml5 /> HTML5</li>
                        <li><FaCss3/> CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}