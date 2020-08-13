import React, { Component } from 'react';
import Publicacion from '../components/Publicaciones';
import '../css/Publicaciones.css';
import Imagepdf from '../assets/pdf.png'
import chambers2019Img from '../assets/contract.png'
import chambers2018Img from '../assets/rank.jpg'
import Chambers from '../assets/chambers-global-practice-guide.pdf';
import Decisiones from '../assets/2015-decisiones.pdf';
import accesoInternet from '../assets/acceso-internet.pdf';
import Controvertida from '../assets/ii-la-controvertida.pdf';
import Subastas from '../assets/i-subastas.pdf';
import redCompartida from '../assets/iii-red-compartida.pdf';
import newseum from '../assets/iv-newseum.pdf';
import Avances from '../assets/AvancesEnElProyectoDeRedCompartida.pdf';
import Apagones from '../assets/Patricia y los apagones.pdf';
import Pasiones from '../assets/DePasionesYRazones.pdf';
import Soluciones from '../assets/SolucionesTecnologicas.pdf';

class Publicaciones extends Component {
    state = {}
    render() {
        return (
            <div className="mb-5">
                <h1 className="titulosPublicaciones" style={{color: "#1c3263"}}>{this.props.data.contenido.publicaciones.content}</h1>
                <p style={{margin:"0 5em", fontSize:"25px"}}>{this.props.data.contenido.publicaciones.chambers}</p>
                <Publicacion
                    Titulo="CHAMBERS 2019"
                    publicacionLink="https://chambers.com/lawyer/ivan-ruiz-moreno-latin-america-9:583968"
                    link="Abrir"
                    image={chambers2019Img}
                    width="100px"
                />
                <Publicacion
                    Titulo="CHAMBERS 2018"
                    publicacionLink={Chambers}
                    link="PDF Download"
                    image={chambers2018Img}
                    width="100px"
                />
                <Publicacion
                    Titulo="PATRICIA Y LOS APAGONES"
                    diario="Capital México"
                    publicacionLink={Apagones}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="SOLUCIONES TECNOLÓGICAS"
                    diario="Capital México"
                    publicacionLink={Soluciones}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="DE PASIONES Y RAZONES"
                    diario="Capital México"
                    Parrafo="No levantes la voz, mejora tu argumento."
                    publicacionLink={Pasiones}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="AVANCES EN EL PROYECTO DE RED COMPARTIDA"
                    diario="Capital México"
                    Parrafo="Los primeros tres meses de este año han sido de grandes avances en la instrumentación del proyecto de la Red Compartida."
                    publicacionLink={Avances}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="2015 AÑO DE DECISIONES Y ACONTECIMIENTOS"
                    diario="Capital México"
                    Parrafo="Este 2015 ha sido un año de importantes acontecimientos en el sector de las telecomunicaciones"
                    publicacionLink={Decisiones}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="¿ES EL ACCESO A INTERNET UN DERECHO HUMANO?"
                    diario="Capital México"
                    Parrafo="¿Es el acceso a internet un derecho humano?"
                    publicacionLink={accesoInternet}
                    link="PDF Download"
                    image={Imagepdf}
                />
                {/* <Publicacion
                    Titulo="LA CONTROVERTIDA RED COMPARTIDA"
                    Parrafo="Se le ha llamado promisoria, incomprendida y hasta una ocurrencia llevada a nivel constitucional, pero tal vez el mejor adjetivo para describirla sea el de “controvertida”."
                    publicacionLink={}
                /> */}
                {/* <Publicacion
                    Titulo="DE LA PREPONDERANCIA A LA SEPARACIÓN ESTRUCTURAL Y FUNCIONAL"
                    Parrafo="En el próximo mes de marzo el IFT dará inicio formal a la revisión de las medidas de preponderancia que hace dos años impuso a Telmex y a Telcel al declararlos agentes económicos preponderantes (AEP) en el sector de las telecomunicaciones junto con Telnor, América Móvil, Grupo Carso y Grupo Inbursa."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/separacion-estructural.pdf"
                /> */}
                <Publicacion
                    Titulo="SUBASTAS INCENTIVADAS EN ESTADOS UNIDOS"
                    diario="Capital México"
                    Parrafo="Actualmente, la Comisión Federal de Comunicaciones de Estados Unidos (FCC) se encuentra trabajando en lo que pareciera ser uno de los procesos de licitación del espectro radioeléctrico más complejos que hasta ahora hayan existido."
                    publicacionLink={Subastas}
                    link="PDF Download"
                    image={Imagepdf}
                />
                {/* <h1 className="titulosPublicaciones">RED COMPARTIDA, PROYECTO EN MARCHA</h1> */}
                <Publicacion
                    Titulo="RED COMPARTIDA, PROYECTO EN MARCHA"
                    diario="Capital México"
                    Parrafo="El pasado 30 de septiembre la SCT publicó las prebases para la licitación de la Red Compartida."
                    publicacionLink={redCompartida}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="“NEWSEUM” EL MUSEO DE LAS NOTICIAS"
                    diario="Capital México"
                    Parrafo="Hace unos días tuve oportunidad de visitar el Museo de la Noticias o “Newseum” en Washington y quiero compartir con ustedes la excelente impresión que me dejó."
                    publicacionLink={newseum}
                    link="PDF Download"
                    image={Imagepdf}
                />
                <Publicacion
                    Titulo="TEMPORADA DE OFERTAS"
                    diario="Capital México"
                    Parrafo="El próximo 30 de junio Telmex y Telcel deberán presentar ante el IFT su propuesta de ofertas públicas de referencia para la prestación de servicios y compartición de infraestructura."
                    publicacionLink={Controvertida}
                    link="PDF Download"
                    image={Imagepdf}
                />
            </div>
        );
    }
}

export default Publicaciones;