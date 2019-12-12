import React from 'react';
import Imagepdf from '../assets/pdf.png'
import "../css/Publicaciones.css"

const Publicacion = props => {
    return (
        <div className="publicacion-component">
            <p className="font" style={{ fontSize: 18, fontWeight: 500 }}>{props.Titulo} </p>
            <div className="publicacion-content">
                <p className="font" style={{ fontSize: 17, color: "#635f7d" }}>{props.Parrafo}</p>
                <a href={props.publicacionLink} target="_blank">PDF Download</a>
                <a href={props.publicacionLink} target="_blank"><img src={Imagepdf} alt="pdf" className="mt-2"/></a>
            </div>
        </div>
    )

}

export default Publicacion;