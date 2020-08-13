import React from 'react';
import "../css/Publicaciones.css"

const Publicacion = props => {
    return (
        <div className="publicacion-component">
            <p className="font" style={{ fontSize: 30, fontWeight: 500 }}>{props.Titulo} </p>
            <p className="font" style={{ fontSize: 27, fontWeight: 500, color: "#635f7d" }}>{props.diario}</p>
            <div className="publicacion-content">
                <p className="font" style={{ fontSize: 25, color: "#635f7d" }}>{props.Parrafo}</p>
                <a href={props.publicacionLink} target="_blank">{props.link}</a>
                <a href={props.publicacionLink}target="_blank"><img style={{ width: props.width}}  src={props.image} alt="pdf" className="mt-2" /></a>
            </div>
        </div>
    )

}

export default Publicacion;