import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import videoLitigio from '../assets/graphs/litigio.mp4';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
    return (
        <div className="mainContentAll">
            <section className="downSection">
                <div className="areaImg">
                    <video src={videoLitigio} autoPlay loop></video>
                </div>
                <div className="textContent">
                    <Title
                        data={props.data}
                        title={props.data.contenido.litigio.title}
                    />
                    <Text
                        paddingTop={20}
                        fontSize={14}
                        p1={props.data.contenido.litigio.p1}

                    />
                </div>
            </section>

        </div>
    );
}

export default Telecomunicaciones;