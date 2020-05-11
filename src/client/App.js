import React, { Component } from 'react';
import './app.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider className="App" theme={theme}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
