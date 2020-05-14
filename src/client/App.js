import React, { Component } from 'react';
import './app.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Asoiaf from './pages/Asoiaf';
import House from './components/House';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchHouses } from './actions/fetchData';

class App extends Component {

  componentDidMount() {
    axios.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50')
      .then(res => {
        this.props.fetchHouses(res.data);
      });
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHouses: (data) => {
      dispatch(fetchHouses(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
