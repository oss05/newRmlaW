import React, { Component } from 'react';
import ImgCont from './imgCont';
import TelecomunicacionesImgEng from '../assets/TelecomunicacionesImgEng.png';
import AsesoriaImgEng from '../assets/AsesoriaImgEng.png';
import CompetenciaImgEng from '../assets/CompetenciaImgEng.png';
import RadioImgEng from '../assets/RadioImgEng.png';
import DerechoImgEng from '../assets/DerechoImgEng.png';
import EnergiaImgEng from '../assets/EnergiaImgEng.png';
import FinanciamientoImgEng from '../assets/FinanciamientoImgEng.png';
import LitigioImgEng from '../assets/LitigioImgEng.png';
import '../css/Img.css';

class Img extends Component {
    state = {}
    render() {
        return (
            <div className="img d-none d-lg-block">
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="/telecomunicaciones"
                        homeImage={TelecomunicacionesImgEng}
                        altHomeImage="Imagen Telecomunicaciones"
                        imgWidth={"33%"}
                    />
                    <ImgCont
                        linkHomeImg="/creditos-finanzas"
                        homeImage={FinanciamientoImgEng}
                        altHomeImage="Imagen Financiamiento"
                        imgWidth={"33%"}
                    />
                    <ImgCont
                        linkHomeImg="/radiodifusion"
                        homeImage={RadioImgEng}
                        altHomeImage="Imagen Radio"
                        imgWidth={"33%"}
                    />
                </div>
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="/derecho-corporativo"
                        homeImage={DerechoImgEng}
                        altHomeImage="Imagen Derecho"
                        imgWidth={"66%"}
                    />
                    <ImgCont
                        linkHomeImg="/energia"
                        homeImage={EnergiaImgEng}
                        altHomeImage="Imagen Energia"
                        imgWidth={"33%"}
                    />
                </div>
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="/competencia-economica"
                        homeImage={CompetenciaImgEng}
                        altHomeImage="Imagen Competencia"
                        imgWidth={"33%"}
                    />
                    <ImgCont
                        linkHomeImg="/asesoria-legislativa"
                        homeImage={AsesoriaImgEng}
                        altHomeImage="Imagen Asesoria"
                        imgWidth={"66%"}
                    />
                </div>
                <div className="/imgContainer">
                    <ImgCont
                        linkHomeImg="litigio"
                        homeImage={LitigioImgEng}
                        altHomeImage="Imagen Litigio"
                        imgWidth={"33%"}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Img;