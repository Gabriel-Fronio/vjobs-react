import React, {Component} from 'react';
import axios from 'axios';
import Loading from '../../navigation/Loading/Loading';
import Parser from 'html-react-parser';


class Info extends Component {

    state = {
        job:{}
    }

    transformToList = (arr) =>{
        let ret = '<ul>';
        for(let i=0; i<arr.length; i++)
            ret += '<li>'+arr[i]+'</li>';
        ret += '</ul>';
        return ret;
    }

    componentDidMount() {
        axios.get('/vagas/'+this.props.match.params.id).then( (res) => {
                let vagaAtual = res.data;
                this.setState({ job: vagaAtual });
            }
        ).catch(err => console.error(err.message));
    }

    render() {
        if(Object.keys(this.state.job).length === 0)
            return (
                <Loading />
            )

        let skills = this.transformToList(this.state.job.skills);
        let difs = this.transformToList(this.state.job.differentials);

        return (
            <div>
                <label><b>Nome: </b>{this.state.job.name}</label><br />
                <label><b>Descrição: </b>{this.state.job.description}</label><br />
                <label><b>Habilidades: </b></label>{Parser(skills)}<br />
                <label><b>Area: </b>{this.state.job.area}</label><br />
                <label><b>Diferenciais: </b></label>{Parser(difs)}<br />
                <label><b>Pcd: </b><input type="checkbox" selected={this.state.job.isPcd} /> </label><br />
                <label><b>Ativo: </b><input type="checkbox" selected /></label><br />
            </div>
        );
    }

}

export default Info;