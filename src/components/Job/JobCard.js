import React from 'react';

const card = (prop) => (
    <div className="card">
        <img className="card-img-top" src={prop.image} />
        <div className="card-body">
            <h5 className="card-title">{prop.title}</h5>
            <p>
                <b>Descrição:</b><br />
                {prop.description}
                <br /><b>Salário base:</b>
                <br />{prop.income}
            </p>
            <button className="btn btn-warning" href="#"><i className="far fa-edit"></i></button>
            <button className="btn btn-danger" href="#"><i className="far fa-trash-alt"></i></button>
        </div>
    </div>
);

export default card;
