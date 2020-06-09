import React, { Component } from 'react';
import './app.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Post from './pages/components/Post';
import Search from './pages/Search';
import CreatePost from './pages/CreatePost';
import LogIn from './pages/LogIn';
import Navbar from './pages/components/navbar/Navbar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider className="App" theme={theme} >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/:post_id" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/search" component={Search} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
