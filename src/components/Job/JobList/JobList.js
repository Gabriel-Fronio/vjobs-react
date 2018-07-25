import React, { Component } from 'react';
import axios from 'axios';

import Card from '../JobCard/JobCard';
import Loading from '../../navigation/Loading/Loading';
import Form from '../JobForm/JobForm';
import Collapse from '../../../hoc/Collapse/Collapse';

class List extends Component
{
    state = {
        jobs: [],
        selectedId: null,
        hasError: false
    }

    addItemToList = (item) => {
        let currentJobs = this.state.jobs;
        currentJobs.push(item);
        this.setState({jobs : currentJobs});
    }

    //State so pode ser mudado apos o componente ser montado
    componentDidMount()
    {
        //Promise (async) -> retorna uma 'promessa' e o then so vai rodar quando houver o retorno
        axios.get('/vagas').then(response => {
            setTimeout(() => {this.setState({ jobs:response.data }) }, 500);
        }).catch(err => {
            console.error(err.message)
        });
    }

    jobRemoveHandler = (id, nome) =>
    {
        if(window.confirm(`Deseja realmente excluir a vaga "${nome}"?`)) {
            axios.delete(`/vagas/${id}`).then(
                () => {
                    let vagasAtt = this.state.jobs;
                    vagasAtt.splice(this.state.jobs.findIndex(vaga => {return vaga.id === id}), 1);
                    this.setState({jobs:vagasAtt});
                    //this.forceUpdate(); -> se nao tivesse o setState, um forceUpdate tambem recarregaria a pag
                    window.alert('Excluído com sucesso!');
                }
            ).catch(err => {console.error(err.message)});
        }
    }

    jobEditHandler = (id, nome) =>
    {
        window.alert(`A vaga "${nome}" foi atualizada`);
    }
    
    render() 
    {
        let vagasEncontradas = 
        (this.state.jobs.length === 0 || this.state.jobs === undefined) ?
        <Loading /> 
        :
        this.state.jobs.map(vaga => {
            return <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mb-3"
            key={vaga.id}>
            <Card
            id={vaga.id}
            title={vaga.name}
            description={vaga.description}
            salary={vaga.salary}
            area={vaga.area}
            removeHandler={() => this.jobRemoveHandler(vaga.id, vaga.name)}
            editHandler={() => this.jobEditHandler(vaga.id, vaga.name)}
            />
            </div>
        });

        return (
            <div>
                <Collapse innerText="Criar Vaga" id="collapseVaga">
                    <Form addToList={this.addItemToList}/>
                </Collapse>
                <div className="row ml-1 mr-1" id="linha">
                {vagasEncontradas}
                </div>
            </div>
        );
    }
}

export default List;
