import React from 'react';

import logo from '../../../assets/images/logo-h-vjobs.png';

const header = () => (
    <nav className="navbar navbar-expand bg-dark">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src={logo} height="64px" width="120px" />
            </a>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav mr-auto">
                    <li className="navbar-nav nav-item">
                        <a className="nav-link text-white" href="#">Vagas</a>
                    </li>
                    <li className="navbar-nav">
                        <a className="nav-link text-white" href="#">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default header;
