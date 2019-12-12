import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/MainContent.css';

const Contacto = props => {
    return (
        <div className="contacto">
            <h2 className="font" style={{ fontSize: 22, fontWeight: "bold" }}>{props.data.contenido.contacto.title}</h2>
            <div className="contactGroup">
                <FontAwesomeIcon className="contactGroupIcon" icon="envelope" />
                <a href="mailto:contacto@rmlaw.com.mx" className="contactGroup">Email: contacto@rmlaw.com.mx</a>
            </div>
            <div className="contactGroup">
                <FontAwesomeIcon className="contactGroupIcon" icon="phone" />
                <p className="contactGroup">Phone:(55) 1209 6611</p>
            </div>
            <div className="contactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.37955898178!2d-99.20562287213447!3d19.424673620140588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f6d148e573%3A0x4cbf5b168126e166!2sRu%C3%ADz%20Moreno%20%26%20Asociados!5e0!3m2!1ses-419!2smx!4v1575912106560!5m2!1ses-419!2smx" width="100%" height="800" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
        </div>
    );
}

export default Contacto;