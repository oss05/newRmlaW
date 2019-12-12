import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/Img.css';

class ImgCont extends Component {
    state = {}
    render() {
        return (
            <Link to={this.props.linkHomeImg}>
                <img src={this.props.homeImage} alt={this.props.altHomeImage} className="homeImg" style={{width:this.props.imgWidth ,padding:this.props.imgPadding}} />
            </Link>
        );
    }
}

export default ImgCont;