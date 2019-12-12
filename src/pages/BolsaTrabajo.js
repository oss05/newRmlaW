import React from 'react'
import Title from '../components/Title'
import Abogado from '../components/Abogado';
import '../css/MainContent.css';

const Abogados = props => {
    return (
        <div className="mainContentAll">
            <div className="lawyer-title">
                <h2 className="font" style={{ fontSize: 36 }}>{props.data.contenido.bolsaDeTrabajo.title} </h2>
                <p style={{ fontSize: 13 }}>{props.data.contenido.subtitle}</p>
            </div>
            <Title
                data={props.data}
                title={props.data.contenido.bolsaDeTrabajo.subtitle}
            />
            <div id="form-main">
                <div id="form-div">
                    <form className="form" id="form1">
                        <p className="name">
                            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                        </p>
                        <p className="email">
                            <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                        </p>
                        <p className="email">
                            <input name="phone" type="phone" className="validate[required,custom[email]] feedback-input" placeholder="Phone" />
                        </p>
                        <p className="email">
                            <input name="subject" type="text" className="validate[required,custom[email]] feedback-input" placeholder="Subject" />
                        </p>
                        <p className="textForm">
                            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message" defaultValue={""} />
                        </p>
                        <div className="submit">
                            <input type="submit" defaultValue="SEND" id="button-blue" />
                            <div className="ease" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Abogados;