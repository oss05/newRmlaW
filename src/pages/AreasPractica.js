import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrow from '../assets/drop-down-arrow.svg';
import graph from '../assets/graphs/CinemaGrapAreasPractica new (1).mp4';
import '../css/MainContent.css';

const AreasPractica = (props) => {
    return (
        <div>
            <div className="practiceAreasHero">
                <video preload="auto" src={graph} autoPlay mute loop type="video/mp4" className="cinemaGraph"></video> 
            </div>
            <div className="container my-0 my-lg-5">
                <div className="row justify-content-md-around">
                    <section className="practiceArea col-12 col-md-5 mt-5">
    <Link to="/telecomunicaciones">{props.data.contenido.telecom.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/derecho-corporativo">{props.data.contenido.transaccional.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/competencia-economica">{props.data.contenido.competenciaEconomica.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/creditos-finanzas">{props.data.contenido.creditos.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/radiodifusion">{props.data.contenido.radio.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/energia">{props.data.contenido.energia.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 my-5">
                        <Link to="/asesoria-legislativa">{props.data.contenido.asesoria.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/litigio">{props.data.contenido.litigio.title}</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AreasPractica;