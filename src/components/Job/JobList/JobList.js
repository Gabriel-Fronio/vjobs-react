import React, { Component } from 'react';
import Card from '../JobCard/JobCard';

import vagas from '../../../assets/vagas';

class List extends Component
{
    state = 
    {
        jobs: [],
        selectedId: null,
        hasError: false
    }

    componentDidMount()
    {
        this.setState({ jobs: vagas});
    }

    jobRemoveHandler(id, nome)
    {
        if(window.confirm(`Deseja realmente excluir a vaga "${nome}"?`))
            window.alert('Excluído com sucesso!');
    }

    jobEditHandler(id, nome)
    {
        window.alert(`A vaga "${nome}" com id ${id} foi atualizada`);
    }
    
    render() 
    {
        let vagasEncontradas = 
        this.state.jobs.map(vaga => {
            return <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mb-3"
            key={vaga.id}>
            <Card
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
            <div className="row ml-1 mr-1" id="linha">
            {vagasEncontradas}
            </div>
        );
    }
}

export default List;
