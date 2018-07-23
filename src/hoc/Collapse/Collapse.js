import React from 'react';

const collapse = (props) => (
    <div>
        <button className="btn btn-primary mt-3 ml-3" data-toggle="collapse" data-target="#collapseVaga" aria-expanded="false" aria-controls="collapseVaga">
            { props.innerText }
        </button>

        <div className="collapse ml-3 mr-3 mt-3" id="collapseVaga">
            <div className="card">
                <div className="card-body">
                    { props.children }
                </div>
            </div>
        </div>
    </div>
);

export default collapse;