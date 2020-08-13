import React from 'react'
import Logo from '../assets/somo-white.png'
import aviso from '../assets/aviso-de-privacidad.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Footer.css';

const Footer = props => {
    return (
        <a className="prevent-footer">
            <a className="footer">
                <div className="left">
                    {props.data.footer.by.content}
                    <img src={Logo} alt="logo soma" />
                </div>
                <div>
                    <div className="contactGroup">
                        <FontAwesomeIcon className="contactGroupIcon" icon="envelope" />
                        <a href="mailto:contacto@rmlaw.com.mx" className="contactGroup">Email: contacto@rmlaw.com.mx</a>
                    </div>
                    <div className="contactGroup">
                        <FontAwesomeIcon className="contactGroupIcon" icon="phone" />
                        <p className="contactGroup">Phone: (55) 1209 6611</p>
                    </div>
                </div>
                <a className="right">
                    <a href={aviso}>{props.data.footer.privacy.content}</a>
                </a>
            </a>
        </a>
    );
}


export default Footer;