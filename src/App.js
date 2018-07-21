import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import List from './components/Job/JobList/JobList';
import Form from './components/Job/JobForm/JobForm';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Form />
                    <List />
                </div>
            </div>
        );
    }
}

export default App;
