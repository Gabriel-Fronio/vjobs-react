import React from 'react';

const form = () =>(
            
    <div>
        <button className="btn btn-primary mt-3 ml-3" data-toggle="collapse" data-target="#collapseVaga" aria-expanded="false" aria-controls="collapseVaga">
                Nova vaga
        </button>

        <br />
            
        <div className="collapse ml-3 mr-3 mt-3" id="collapseVaga">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">    
                            <label>Nome</label>
                            <input type="text" className="form-control" id="nome" />
                        </div>
                        <div className="form-group">
                            <label>Descrição</label>
                            <textarea className="form-control" id="descricao"></textarea>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Habilidades necessárias</label>
                                    <textarea className="form-control" id="habilidades"></textarea>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label>Diferenciais</label>
                                    <textarea className="form-control" id="diferenciais"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Salário base</label>
                                    <input type="text" className="form-control" id="salario" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label>Área</label>
                                    <select className="form-control" id="area">
                                        <option>Desenvolvimento</option>
                                        <option>Testes</option>
                                        <option>Outra area</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="pcd" />
                            <label className="form check-label" htmlFor="pcd">Vaga para PCD</label>
                        </div>
                        <div className="float-right">
                            <button type="submit" className="btn btn-success">Criar Vaga</button>
                        </div>
                    </form>
                </div>
            </div>     
        </div>
    </div>       
);

export default form;
