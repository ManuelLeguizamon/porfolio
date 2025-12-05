import './Proyectos.css'

//Para la galeria de imagenes
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import { useState } from 'react';


function Carrusel({ imagenes = [] }) {
  return (
    <div className="swiperContenedor">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
            delay: 4500,
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
        { src: "/img/proyectoEmma/emma-index.png", title: "Emma 2" },
        { src: "/img/proyectoEmma/emma-dibujos.png", title: "Emma 1" },
        { src: "/img/proyectoEmma/emma-talleres.png", title: "Emma 3" },
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
    ];

    const imgVideoJuego = [
        { src: "/img/VideoJuego/videojuego1.png", title: "Video Juego1" },
        { src: "/img/VideoJuego/videojuego2.png", title: "Video Juego2" },
        { src: "/img/VideoJuego/videojuego3.png", title: "Video Juego3" },
        { src: "/img/VideoJuego/videojuego4.png", title: "Video Juego4" },
        { src: "/img/VideoJuego/videojuego5.png", title: "Video Juego5" },
    ];

    

    return (
        <div className="proyectos" id="proyectos">
            <hr />
            <h2 className="proyectos-titulo" id='proyectos'>Proyectos</h2>

            

{/* ORDEN ARTE ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Orden Arte</h3>
                        <a href="https://github.com/ManuelLeguizamon/Orden-Arte" target='_blank' className='proyecto-icono'><FaGithub size={30} /></a>
                    </div>

                    <h4>Python - Django - Sqlite - HTML5 - CSS</h4>
                    <div className="contenido">
                        <Carrusel imagenes={imgOrdenArte} />
                    </div>      

                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    <p className="descripcion">
                        Herramienta web para <b>centralizar la organización de proyectos artísticos.</b> Implica registro y logueo para crear grupos de trabajo, dentro de ellos es posible organizar eventos, especificando información clave. Además, incluye un sistema de carpetas para subir y administrar archivos, como partituras u otros documentos.
                    </p>                    
                </div>
            </div>

{/* EMMA LEGUIZAMON ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Web para una artista plastica</h3>
                        <a href="https://github.com/ManuelLeguizamon/EmmaPagina" target='_blank' className='proyecto-icono'><FaGithub size={30} /></a>
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

                        <b>Aplicación web para una artista plástica</b>, Emma Leguizamón, con información sobre las clases y talleres que ofrece, contacto para interesados, imágenes de sus pinturas y dibujos e informacion sobre eventos en los que participó. <b>Le permite mostrarse, buscando expandir carrera.</b>
                    </p>
                </div>
            </div>

{/* IMDB MOVIES ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Top 1000 IMDB Movies</h3>
                        <a href="https://github.com/ManuelLeguizamon/imdb-movies-app" target='_blank' className='proyecto-icono'><FaGithub size={30} /></a>
                    </div>

                    <h4>React JS - JavaScript - Recharts - HTML5 - CSS - Bootstrap</h4>
                    <div className="contenido">
                        <Carrusel imagenes={imgImdb} />
                    </div> 
                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    <p className="descripcion">
                        Aplicación web para <b>visualizar un data set</b> de 1000 películas de IMDB. Para ello se limpió ciertos campos no útiles del data set usando pandas. También se añadió una serie de <b>análisis de datos mediante gráficos interactivos.</b>
                    </p>
                </div>
            </div>

{/* VIDEO JUEGO ------------------------------- */}
            <div className="proyectos-contenedor">
                <div className="proyecto-izquierda">
                    <div className='titulo-icono'>
                        <h3>Video Juego</h3>
                        <a href="https://github.com/ManuelLeguizamon/Battle-Ships-game" target='_blank' className='proyecto-icono'><FaGithub size={30} /></a>
                    </div>
                    <h4>Python - PyGames</h4>
                    <div className="contenido">
                        <Carrusel imagenes={imgVideoJuego} />
                    </div> 
                </div>

                <div className="linea-vertical-proyecto"></div>

                <div className="proyecto-derecha">
                    <p className="descripcion">
                        <b>Video juego de batalla de naves para dos jugadores</b> creado con PyGames. <br /> El juego implica dispararse y esquivar las balas de tu adversario. El que pueda herir a su adversario 5 veces gana.
                    </p>

                </div>
            </div>

        </div>
    );
}


