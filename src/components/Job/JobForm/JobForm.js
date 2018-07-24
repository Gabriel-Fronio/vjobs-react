import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    state = {
        newJob: {}
    }

    postDataHandler = (event) => {
        let novaVaga = {...this.state.newJob};

        axios.post('/vagas', novaVaga).then((response) => {
            novaVaga.id = response.data;
            this.props.addToList(novaVaga);
        }).catch(err => 
            console.error(err.message)
        );
        event.preventDefault();
    }

    changeValueHandler = (nomeAtributo, valor) => {
        let currentJob = this.state.newJob;
        currentJob[nomeAtributo] = valor;
        this.setState({newJob: currentJob});
    }

    render() {
        return (
            <div>
                <br />
                <form>
                    <div className="form-group">    
                        <label>Nome</label>
                        <input
                        onChange = {(event) => this.changeValueHandler('name', event.target.value)}
                        type="text" className="form-control" id="nome" />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <textarea
                        onChange = {(event) => this.changeValueHandler('description', event.target.value)}
                        className="form-control" id="descricao"></textarea>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Habilidades necessárias</label>
                                <textarea
                                onChange = {(event) => this.changeValueHandler('skills', event.target.value)}
                                className="form-control" id="habilidades"></textarea>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Diferenciais</label>
                                <textarea
                                onChange = {(event) => this.changeValueHandler('differentials', event.target.value)}
                                className="form-control" id="diferenciais"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Salário base</label>
                                <input
                                onChange = {(event) => this.changeValueHandler('salary', event.target.value)}
                                type="text" className="form-control" id="salario" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Área</label>
                                <select
                                onChange = {(event) => this.changeValueHandler('area', event.target.value)}
                                className="form-control" id="area">
                                    <option disabled selected>Selecione uma área</option>
                                    <option>Desenvolvimento</option>
                                    <option>Testes</option>
                                    <option>Outra area</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <input
                        onChange = {(event) => this.changeValueHandler('isPcd', event.target.value)}
                        type="checkbox" className="form-check-input" id="pcd" />
                        <label className="form check-label" htmlFor="pcd">Vaga para PCD</label>
                    </div>
                    <div className="float-right">
                        <button type="submit" className="btn btn-success" onClick={this.postDataHandler}>Salvar</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default Form;
