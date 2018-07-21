import React from 'react';

import Card from './JobCard';

import developer from '../../assets/images/developer.png';
import designer from '../../assets/images/designer.png';
import tester from '../../assets/images/tester.png';

const list = () => (
    <div className="row ml-1 mr-1" id="linha">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">

            <Card title="Desenvolvedor Front-end JR" description="Profissional que goste de trabalhar
            em um ambiente dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento
            full stack." income="R$10,00" image={developer}/>

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">

            <Card title="Designer UI/UX PL" description="Profissional que goste de trabalhar em um ambiente
            dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack." 
            income="R$100,00" image={designer} />

        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">

            <Card title="Tester - Estágio" description="Profissional que goste de trabalhar em um ambiente
            dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack." 
            income="R$2,00" image={tester} />

        </div>
    </div>
);

export default list;
