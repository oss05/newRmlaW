import React from 'react'
import Img from '../components/Img';
import Areas from '../components/Areas';
import '../css/MainContent.css';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import imgQuienesSomos from '../assets/quienesSomos.png';
import Cont from '../assets/contract.png';
import Rank from '../assets/rank.jpg';
import Rank2 from '../assets/rank2.png';
import '../css/Badge.css'
import Chambers from '../assets/chambers-global-practice-guide.pdf';
import homeVideo from '../assets/graphs/home.mp4';
import ImgResp from '../components/imgResp';

const Home = props => {

    return (
        <section>
            <div className="hero">
                <video src={homeVideo} autoPlay loop style={{width: "100%"}}></video>
            </div>
            <div className="mainContentAll">
                <section className="downSection d-flex justify-content-center" style={{margin: "2em auto"}}>
                    <div className="textContent">
                        <p className="text-center text-lg-left" style={{ fontSize: 30, fontWeight: "bold" }}>{props.data.contenido.subtitle}</p>
                        <Text
                            paddingTop={20}
                            fontSize={18}
                            display={"none"}
                            p1={props.data.contenido.quienesSomos.p1}
                            // p2={props.data.contenido.quienesSomos.p2}
                            // p3={props.data.contenido.quienesSomos.p3}
                            p4={props.data.contenido.quienesSomos.p4}
                        />
                        <div style={{width: "100%"}} className="d-flex justify-content-center align-items-center flex-wrap">
                            <a href={Chambers} ><img className="cont" src={Cont} alt="cont" /> </a>
                            <a href="https://chambers.com/law-firm/ruiz-moreno-asociados-latin-america-9:354990" target="_blank"><img src={Rank} style={{ width: "100px", margin: "0 2em" }} alt="rank" /></a>
                            <img className="rank2 mt-4 mt-md-0" src={Rank2} alt="rank2" />
                        </div>
                    </div>
                    <div className="areaImg d-none d-lg-block">
                        <AreaImg
                            imgArea={imgQuienesSomos}
                            altArea="imagen quienes somos"
                        />
                    </div>
                </section>
            </div>
            <div className="mainContent">
                <Img />
                <ImgResp />
            </div>
        </section>
    );
}

export default Home;