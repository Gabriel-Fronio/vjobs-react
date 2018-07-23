import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import List from './components/Job/JobList/JobList';
import Form from './components/Job/JobForm/JobForm';
import Collapse from './hoc/Collapse/Collapse';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Collapse innerText="Criar Vaga">
                        <Form />
                    </Collapse>
                    <List />
                </div>
            </div>
        );
    }
}

export default App;
