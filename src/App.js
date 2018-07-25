import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import List from './components/Job/JobList/JobList';
import Main from './components/navigation/Main/Main';
import About from './components/About/About';
import Info from './components/Job/JobInfo/JobInfo';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
    //No Route -> necessario o exact, senao ele redireciona para a url que contenha a string
    //(/vagas contem /, tb sera redirecionada)
    //tb pode colocar o route path = / por ultimo

    //Switch = switch case
    render() {
        return (
            <div>
                <Header />
                <Main>
                    <Switch>
                        <Route exact path='/' component={List}></Route>
                        <Route path='/vagas' component={List}></Route>
                        <Route path='/sobre' component={About}></Route>
                        <Route path='/vaga/:id' component={Info}></Route>
                    </Switch>
                </Main>
            </div>
        );
    }
}

export default App;
