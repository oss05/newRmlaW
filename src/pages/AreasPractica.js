import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrow from '../assets/drop-down-arrow.svg';
import graph from '../assets/graphs/CinemaGrapAreasPractica.mp4';
import '../css/MainContent.css';

const AreasPractica = () => {
    return (
        <div>
            <div className="practiceAreasHero">
                <video src={graph} autoPlay loop className="cinemaGraph"></video>
            </div>
            <div className="container my-0 my-lg-5">
                <div className="row justify-content-md-around">
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/telecomunicaciones">TELECOMUNICACIONES & IT</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/derecho-corporativo">DERECHO COORPORATIVO Y TRANSACCIONAL</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/competencia-economica">COMPETENCIA ECONOMICA</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/litigio">LITIGIO</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/creditos-finanzas">CREDITOS Y FINANCIAMIENTO</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/radiodifusion">RADIODIFUSION</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 mt-5">
                        <Link to="/energia">ENERGÍA</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                    <section className="practiceArea col-12 col-md-5 my-5">
                        <Link to="/asesoria-legislativa">ASESORIA EN MATERIA LEGISLATIVA, REGULATORIA Y OPINIONES</Link>
                        <img src={arrow} alt="arrow"/>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AreasPractica;