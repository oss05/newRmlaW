import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logorma from '../assets/logo-rma.png';
import '../css/Navbar.css';
import english from '../assets/english.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const imagesPath = {
  mx: 'https://cdn.icon-icons.com/icons2/1531/PNG/512/3253493-flag-mexico-icon_106775.png',
  us: 'https://i.ibb.co/zspqyGS/english.png'
}

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true
  };
  }

  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
    this.props.handelChangeIdioma()
  }

  getImageName = () => this.state.open ? 'mx' : 'us'

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
  });
  }
  
  handleClick = (e) => {
    this.setState({
        collapsed: true
    });
}
  render() {
    const imageName = this.getImageName();
    return (
      <div className="prevent-nav">
        <Navbar color="#fff" light expand="md" className="custom-navbar">
          <Link to="/"><img style={{width: "7em"}} src={Logorma} alt="logo-rma" /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-4" navbar>
              <NavItem className="navItem ml-4">
                <NavLink>
                  <Link onClick={this.handleClick} className="navCont" to="/">
                    {this.props.data.navbar.home.content}
                  </Link>
                </NavLink>
              </NavItem>
              {/* <NavItem className="navItem ml-4">
                <NavLink>
                  <Link onClick={this.handleClick} className="navCont" to="/quienessomos">
                    {this.props.data.navbar.quienesSomos.content}
                  </Link>
                </NavLink>
              </NavItem> */}
              <NavItem className="navItem ml-4">
                <NavLink >
                  <Link onClick={this.handleClick} className="navCont" to="/abogados">
                    {this.props.data.navbar.abogados.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem ml-4">
                <NavLink >
                  <Link onClick={this.handleClick} className="navCont" to="/areas-de-practica">
                    {this.props.data.navbar.areasDePractica.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem ml-4">
                <NavLink>
                  <Link onClick={this.handleClick} className="navCont" to="/publicaciones">
                    {this.props.data.navbar.publicaciones.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem ml-4">
                <NavLink>
                  <Link onClick={this.handleClick} className="navCont" to="/contacto">
                    {this.props.data.navbar.bolsaDeTrabajo.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem onClick={this.handleClick} className="navItem ml-4">
                <img  style={{width: 25, paddingTop: 10, marginLeft: 8, cursor: "pointer"}} onChange={this.props.handelChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}