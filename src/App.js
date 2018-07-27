import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import List from './components/Job/JobList/JobList';
import Main from './components/navigation/Main/Main';
import About from './components/About/About';
import Info from './components/Job/JobInfo/JobInfo';
import Login from './components/login/Login';

import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

    state = {
        loggedUser: JSON.parse(window.localStorage.getItem('user')) // se acessar alguma prop de loggedUser -> 
                                                                    // colocar || {} depois (se o resultado 
                                                                    // do parse for null ele coloca {} ou qqr coisa em logged User)
    }

    getLoggedUser() {
        return this.state.loggedUser;
    }

    loginHandler = (emailVal, passVal) => {
        axios.post('/login', {
            email: emailVal,
            senha: passVal
        }).then((res) => {
            window.localStorage.setItem('user', JSON.stringify(res.data.user));
            window.localStorage.setItem('token', res.data.token);

            this.setState({loggedUser: res.data.user});
        }).catch(err => {
            console.error(err.message);
            alert("Login inválido");
        });
    }

    logoutHandler = () => {
        window.localStorage.clear();
        this.setState({loggedUser: null});
    }

    //No Route -> necessario o exact, senao ele redireciona para a url que contenha a string
    //(/vagas contem /, tb sera redirecionada)
    //tb pode colocar o route path = / por ultimo

    //Switch = switch case
    render() {
        if(this.getLoggedUser()) {
            return (
                <div>
                    <Header userName={this.state.loggedUser.name} logout={this.logoutHandler}/>
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
        return (<Login login={this.loginHandler}/>);
    }
}

export default App;
