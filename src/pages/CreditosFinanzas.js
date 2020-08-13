import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import videoCreditos from '../assets/graphs/CreditoyFinanciamiento.mp4';
import '../css/MainContent.css';


const QuienesSomos = props => {
    return (
        <div className="mainContentAll">
            <section className="downSection">
                <div className="areaImg">
                    <video src={videoCreditos}  preload="auto" autoPlay muted loop type="video/mp4"></video>
                </div>
                <div className="textContent">
                    <Title
                        data={props.data}
                        title={props.data.contenido.creditos.title}
                    />
                    <Text
                        paddingTop={20}
                        fontSize={14}
                        data={props.data}
                        p1={props.data.contenido.creditos.p1}
                    />
                </div>
            </section>

        </div>
    );
}

export default QuienesSomos;