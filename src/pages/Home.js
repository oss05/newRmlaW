import React from 'react'
import Areas from '../components/Areas';
import '../css/MainContent.css';
import AreaImg from '../components/AreaImg';
import Text from '../components/Text';
import imgQuienesSomos from '../assets/quienesSomos.png';
import Cont from '../assets/contract.png';
import chambers2020 from '../assets/chambers2020.jpg';
import Rank from '../assets/rank.jpg';
import Rank2 from '../assets/rank2.png';
import '../css/Badge.css'
import Chambers from '../assets/chambers-global-practice-guide.pdf';
import homeVideo from '../assets/graphs/CinemaGrapAreasPractica.mp4';
import Img from '../components/Img';
import ImgResp from '../components/imgResp';
import ImgEng from '../components/ImgEng';
import ImgRespEng from '../components/imgRespEng';
import Esp from '../lang/Esp.json';

const dataEsp = Esp

const Home = props => {

    const imgGrid = props.data === dataEsp ?
        <div className="mainContent">
            <Img />
            <ImgResp />
        </div>
        :
        <div className="mainContent">
            <ImgEng />
            <ImgRespEng />
        </div>

    return (
        <section>
            <div className="hero">
                <video src={homeVideo} preload="auto" autoPlay muted loop type="video/mp4" style={{ width: "100%" }}></video>
            </div>
            <div className="mainContentAll">
                <section className="downSection d-flex justify-content-center" style={{ margin: "2em auto" }}>
                    <div className="textContent" style={{ width: "100%" }}>
                        <p className="text-center text-lg-left" style={{ fontSize: 30, fontWeight: "bold", color: "#1c3263" }}>{props.data.contenido.subtitle}</p>
                        <Text
                            paddingTop={20}
                            fontSize={18}
                            display={"none"}
                            p1={props.data.contenido.quienesSomos.p1}
                            // p2={props.data.contenido.quienesSomos.p2}
                            // p3={props.data.contenido.quienesSomos.p3}
                            p4={props.data.contenido.quienesSomos.p4}
                        />
                    </div>
                    <div className="areaImg container">
                        <div style={{ width: "100%", height: "100%" }} className="row justify-content-center align-items-center flex-wrap">
                            <a href="https://chambers.com/law-firm/ruiz-moreno-asociados-latin-america-9:354990" target="_blank"><img src={chambers2020} alt="cont" style={{objectFit: "cover", width: "100px", margin: "0 10px"}}/> </a>
                            <a href={Chambers} target="_blank"><img className="cont" src={Cont} alt="cont" /> </a>
                            <a href="https://chambers.com/law-firm/ruiz-moreno-asociados-latin-america-9:354990" target="_blank"><img src={Rank} style={{ width: "100px", margin: "0 2em" }} alt="rank" /></a>
                            <img className="rank2 mt-4 mt-md-0" src={Rank2} alt="rank2" />
                        </div>
                    </div>
                </section>
            </div>
            {imgGrid}
        </section>
    );
}

export default Home;