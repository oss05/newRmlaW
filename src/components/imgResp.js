import React, { Component } from 'react';
import ImgCont from './imgCont';
import TelecomunicacionesImg from '../assets/telecomunicaciones.png';
import AsesoriaImg from '../assets/asesoria.png';
import CompetenciaImg from '../assets/competencia.png';
import RadioImg from '../assets/radio.png';
import DerechoImg from '../assets/corporativo.png';
import EnergiaImg from '../assets/energia.png';
import FinanciamientoImg from '../assets/financiamiento.png';
import LitigioImg from '../assets/litigio.png';
import '../css/Img.css';

class Img extends Component {
    state = {}
    render() {
        return (
            <div className="img d-block d-lg-none">
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="telecomunicaciones"
                        homeImage={TelecomunicacionesImg}
                        altHomeImage="Imagen Telecomunicaciones"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="derecho-corporativo"
                        homeImage={DerechoImg}
                        altHomeImage="Imagen Derecho"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="creditos-finanzas"
                        homeImage={FinanciamientoImg}
                        altHomeImage="Imagen Financiamiento"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="radiodifusion"
                        homeImage={RadioImg}
                        altHomeImage="Imagen Radio"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="energia"
                        homeImage={EnergiaImg}
                        altHomeImage="Imagen Energia"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="competencia-economica"
                        homeImage={CompetenciaImg}
                        altHomeImage="Imagen Competencia"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="asesoria-legislativa"
                        homeImage={AsesoriaImg}
                        altHomeImage="Imagen Asesoria"
                        imgWidth={"100%"}
                    />
                    <ImgCont
                        linkHomeImg="litigio"
                        homeImage={LitigioImg}
                        altHomeImage="Imagen Litigio"
                        imgWidth={"100%"}
                    />
                </div>
            </div>
        );
    }
}

export default Img;