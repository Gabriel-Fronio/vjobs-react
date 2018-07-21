import React from 'react';

import developer from '../../../assets/images/developer.png';
import designer from '../../../assets/images/designer.png';
import tester from '../../../assets/images/tester.png';

const card = (props) => {

    let image = null;
    switch(props.area) {
    case 'Design':
        image = designer;
        break;
    case 'Desenvolvimento':
        image = developer;
        break;
    case 'Testes':
        image = tester;
        break;
    default:
        image = null;
    }

    return (
        <div className="card">
            <img className="card-img-top" src={image} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>
                    <b>Descrição:</b><br />
                    {props.description}
                    <br /><b>Salário base:</b>
                    <br />{props.salary}
                </p>
                <button onClick={props.editHandler} className="btn btn-warning mr-1" href="#">
                    <i className="far fa-edit"></i>
                </button>
                <button onClick={props.removeHandler} className="btn btn-danger ml-1" href="#">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default card;