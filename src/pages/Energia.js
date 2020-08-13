import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import videoEnergia from '../assets/graphs/energia.mp4';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
    return (
        <div className="mainContentAll">
            <section className="downSection">
                <div className="areaImg">
                    <video src={videoEnergia}  preload="auto" autoPlay muted loop type="video/mp4"></video>
                </div>
                <div className="textContent">
                    <Title
                        data={props.data}
                        title={props.data.contenido.energia.title}
                    />
                    <Text
                        paddingTop={20}
                        fontSize={14}
                        p1={props.data.contenido.energia.p1}
                        p2={props.data.contenido.energia.p2}
                        p3={props.data.contenido.energia.p3}
                        p4={props.data.contenido.energia.p4}
                    />
                </div>
            </section>

        </div>
    );
}

export default Telecomunicaciones;