import React, { Component } from 'react';
import './app.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Asoiaf from './pages/Asoiaf';
import House from './components/House';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider className="App" theme={theme} >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/asoiaf/:house_id" component={House} />
            <Route path="/asoiaf" component={Asoiaf} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
