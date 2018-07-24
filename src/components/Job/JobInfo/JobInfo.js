import React, {Component} from 'react';
import axios from 'axios';

class Info extends Component {

    state = {
        job:{}
    }

    componentDidMount() {
        //termina ae
        axios.get('/vagas/'+this.props.params.match.id)
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Info;