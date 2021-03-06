import React from 'react';

import {Link} from 'react-router-dom';

import logo from '../../../assets/images/logo-h-vjobs.png';

const header = (props) => (
    <nav className="navbar navbar-expand bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} height="64px" width="120px" />
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav mr-auto">
                    <li className="navbar-nav nav-item">
                        <Link className="nav-link text-white" to="/vagas">Vagas</Link>
                    </li>
                    <li className="navbar-nav">
                        <Link className="nav-link text-white" to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </div>
            <a className="nav-item nav-link text-white">
                {props.userName}
            </a>
            <a className="nav-item nav-link text-white" onClick={() => props.logout()}>
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    </nav>
);

export default header;
