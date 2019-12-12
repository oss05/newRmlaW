import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import videoDerecho from '../assets/graphs/cinemaGraphDerechoCorporativo.mp4';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
    return (
        <div className="mainContentAll">
            <section className="downSection">
                <div className="areaImg">
                    <video src={videoDerecho} autoPlay loop></video>
                </div>
                <div className="textContent">
                    <Title
                        data={props.data}
                        title={props.data.contenido.transaccional.title}
                    />
                    <Text
                        paddingTop={20}
                        fontSize={14}
                        p1={props.data.contenido.transaccional.p1}
                        p2={props.data.contenido.transaccional.p2}
                    />

                </div>
            </section>

        </div>
    );
}

export default Telecomunicaciones;