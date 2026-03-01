import './Proyectos.css'

//Para la galeria de imagenes
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { FaGlobe, FaGithub } from "react-icons/fa";

import { useState } from 'react';


function Carrusel({ imagenes = [] }) {
  return (
    <div className="swiperContenedor">
        <Swiper
            modules={[Navigation,  Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
        >
            {imagenes.map((img, i) => (
            <SwiperSlide key={i}>
                <img src={img.src} alt={img.title} className="slideImg" />
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export function Proyectos() {
    const imgEmma = [
        { src: "/img/proyectoEmma/emma-index.png", title: "Emma index" },
        { src: "/img/proyectoEmma/1.png", title: "Emma 1" },
        { src: "/img/proyectoEmma/2.png", title: "Emma 2" },
        { src: "/img/proyectoEmma/3.png", title: "Emma 3" },
        { src: "/img/proyectoEmma/4.png", title: "Emma 4" },
        { src: "/img/proyectoEmma/5.png", title: "Emma 5" },
    ];

    const imgOrdenArte = [
        { src: "/img/OrdenArte/ordenarte1.png", title: "Ordenarte1" },
        { src: "/img/OrdenArte/ordenarte2.png", title: "Ordenarte2" },
        { src: "/img/OrdenArte/ordenarte3.png", title: "Ordenarte3" },
        { src: "/img/OrdenArte/ordenarte4.png", title: "Ordenarte4" },
        { src: "/img/OrdenArte/ordenarte5.png", title: "Ordenarte5" },
        { src: "/img/OrdenArte/ordenarte6.png", title: "Ordenarte6" },
        { src: "/img/OrdenArte/ordenarte7.png", title: "Ordenarte7" },
        { src: "/img/OrdenArte/ordenarte8.png", title: "Ordenarte8" },
        { src: "/img/OrdenArte/ordenarte9.png", title: "Ordenarte9" },
        { src: "/img/OrdenArte/ordenarte10.png", title: "Ordenarte10" },
        { src: "/img/OrdenArte/ordenarte11.png", title: "Ordenarte11" },
    ];

    const imgImdb = [
        { src: "/img/Imdb/imdb1.png", title: "Imdb1" },
        { src: "/img/Imdb/imdb2.png", title: "Imdb2" },
        { src: "/img/Imdb/imdb3.png", title: "Imdb3" },
        { src: "/img/Imdb/imdb4.png", title: "Imdb4" },
        { src: "/img/Imdb/imdb5.png", title: "Imdb5" },
        { src: "/img/Imdb/imdb6.png", title: "Imdb6" },
        { src: "/img/Imdb/imdb7.png", title: "Imdb7" },
        { src: "/img/Imdb/imdb8.png", title: "Imdb8" },
        { src: "/img/Imdb/imdb9.png", title: "Imdb9" },
        { src: "/img/Imdb/imdb10.png", title: "Imdb10" },
        { src: "/img/Imdb/imdb11.png", title: "Imdb11" },
    ];

    const imgVideoJuego = [
        { src: "/img/VideoJuego/videojuego1.png", title: "Video Juego1" },
        { src: "/img/VideoJuego/videojuego2.png", title: "Video Juego2" },
        { src: "/img/VideoJuego/videojuego3.png", title: "Video Juego3" },
        { src: "/img/VideoJuego/videojuego4.png", title: "Video Juego4" },
        { src: "/img/VideoJuego/videojuego5.png", title: "Video Juego5" },
    ];



    const MsjSinDeploy =  (e) => {
        e.preventDefault();
        alert("🚧 Este proyecto todavía no está deployado.");
    };

    return (
        <div className="proyectos" id="proyectos">
            <hr />
            <h2 className="proyectos-titulo" id='proyectos'>Proyectos</h2>

            

{/* ORDEN ARTE ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Orden Arte</h3>
                        <a href="https://github.com/ManuelLeguizamon/Orden-Arte" target='_blank' title='Abrir repositorio' className='proyecto-icono' ><FaGithub size={33} /></a>
                        <a href="#" target='_blank' className='proyecto-icono' title="Abrir proyecto"  onClick={MsjSinDeploy}><FaGlobe size={33} /></a>
                    </div>

                    <h4>Python - Django - Sqlite - HTML5 - CSS</h4>
                    <div className="contenido">
                        <Carrusel imagenes={imgOrdenArte} />
                    </div>      

                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    <p className="descripcion">
                        Herramienta web para <b>centralizar la organización de proyectos artísticos.</b> Implica registro y logueo para crear grupos dentro de los cuales es posible <b>organizar eventos</b>, especificando información clave, y <b>crear carpetas</b> para subir y <b>administrar documentos</b>.
                    </p>                    
                </div>
            </div>

{/* EMMA LEGUIZAMON ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Web para una artista </h3>
                        <a href="https://github.com/ManuelLeguizamon/EmmaPagina" target='_blank' title='Abrir repositorio' className='proyecto-icono'><FaGithub size={33} /></a>
                        <a href="#" target='_blank' className='proyecto-icono' title="Abrir proyecto"  onClick={MsjSinDeploy}><FaGlobe size={33} /></a>
                    </div>
                        
                    <h4>React JS - JavaScript - HTML5 - CSS</h4>

                    <div className="contenido">
                        <Carrusel imagenes={imgEmma} />
                    </div>
                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    {/* <h3>Titulo de la seccion</h3> */}
                    <p className="descripcion">

                        <b>Aplicación web para una artista plástica</b> con <b>información</b> sobre las clases y talleres que ofrece, <b>contacto</b> para interesados, <b>imágenes</b> de sus pinturas y dibujos y data de eventos en los que participó. Le permite mostrarse, <b>buscando expandir carrera.</b>
                    </p>
                </div>
            </div>

{/* IMDB MOVIES ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Top 1000 IMDB Movies</h3>
                        <a href="https://github.com/ManuelLeguizamon/imdb-movies-app" target='_blank' title='Abrir repositorio' className='proyecto-icono'><FaGithub size={33} /></a>
                        <a href="https://ml-imdb.vercel.app/" target='_blank' title="Abrir proyecto" className='proyecto-icono'><FaGlobe size={33} /></a>
                    </div>

                    <h4>React JS - JavaScript - Recharts - HTML5 - CSS - Bootstrap</h4>
                    <div className="contenido">
                        <Carrusel imagenes={imgImdb} />
                    </div> 
                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    <p className="descripcion">
                        Aplicación web para <b>visualizar un data set</b> sobre películas de IMDB. Para ello se limpió ciertos campos no útiles del data set usando <b>Pandas.</b> También se añadió una serie de <b>análisis de datos mediante gráficos interactivos.</b>
                    </p>
                </div>
            </div>

{/* VIDEO JUEGO ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Video Juego</h3>
                        <a href="https://github.com/ManuelLeguizamon/Battle-Ships-game" target='_blank' title='Abrir repositorio' className='proyecto-icono'><FaGithub size={33} /></a>
                    </div>
                    <h4>Python - PyGames</h4>
                    
                    {/* <div className="contenido">
                        <Carrusel imagenes={imgVideoJuego} />
                    </div>  */}
                    
                    <video className='swiperContenedor' controls>
                        <source src="/img/VideoJuego/battle-ship.mp4" type="video/mp4" />
                        Tu navegador no soporta el video.
                    </video>
                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    <p className="descripcion">
                        <b>Video juego de batalla de naves para dos jugadores</b> desarrollado con PyGames. Efectos de sonido desarrollados con Fl Studio <br /> 
                    </p>

                </div>
            </div>

        </div>
    );
}


