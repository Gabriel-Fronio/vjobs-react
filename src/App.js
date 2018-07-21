import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import List from './components/Job/JobList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <List />
            </div>
        );
    }
}

export default App;
