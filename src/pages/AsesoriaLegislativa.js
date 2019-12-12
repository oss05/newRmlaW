import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import videoAsesoria from '../assets/graphs/asesoria-en-materia-legislativa.mp4';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
    return (
        <div className="mainContentAll">
            <section className="downSection">
                <div className="areaImg">
                    <video src={videoAsesoria} autoPlay loop></video>
                </div>
                <div className="textContent">
                    <Title
                        data={props.data}
                        title={props.data.contenido.asesoria.title}
                    />
                    <Text
                        paddingTop={20}
                        fontSize={14}
                        p1={props.data.contenido.asesoria.p1}

                    />
                </div>
            </section>

        </div>
    );
}

export default Telecomunicaciones;