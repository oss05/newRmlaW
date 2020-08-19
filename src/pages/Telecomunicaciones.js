import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import videoTelecom from '../assets/graphs/Telecomunicaciones.mp4';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
    return (
        <div className="mainContentAll">
            <section className="downSection">
                <div className="areaImg">
                    <video src={videoTelecom} preload="auto" autoPlay muted loop type="video/mp4"></video>
                </div>
                <div className="textContent">
                    <Title
                        data={props.data}
                        title={props.data.contenido.telecom.title}
                    />
                    <Text
                        p1={props.data.contenido.telecom.p1}
                        p2={props.data.contenido.telecom.p2}
                        p3={props.data.contenido.telecom.p3}
                        p4={props.data.contenido.telecom.p4}
                        p5={props.data.contenido.telecom.p5}
                        p6={props.data.contenido.telecom.p6}
                        p7={props.data.contenido.telecom.p7}
                        p8={props.data.contenido.telecom.p8}
                        p9={props.data.contenido.telecom.p9}
                        p10={props.data.contenido.telecom.p10}
                        p11={props.data.contenido.telecom.p11}
                        p12={props.data.contenido.telecom.p12}
                        p13={props.data.contenido.telecom.p13}
                        p14={props.data.contenido.telecom.p14}
                        p15={props.data.contenido.telecom.p15}
                        p16={props.data.contenido.telecom.p16}
                        p17={props.data.contenido.telecom.p17}
                        p18={props.data.contenido.telecom.p18}
                        p19={props.data.contenido.telecom.p19}
                        p20={props.data.contenido.telecom.p20}
                        p21={props.data.contenido.telecom.p21}
                        p22={props.data.contenido.telecom.p22}
                        p23={props.data.contenido.telecom.p23}
                        p24={props.data.contenido.telecom.p24}
                        p25={props.data.contenido.telecom.p25}
                        p26={props.data.contenido.telecom.p26}
                        p27={props.data.contenido.telecom.p27}
                        p28={props.data.contenido.telecom.p28}
                        p29={props.data.contenido.telecom.p29}
                        p30={props.data.contenido.telecom.p30}
                    />
                </div>
            </section>

        </div>
    );
}

export default Telecomunicaciones;