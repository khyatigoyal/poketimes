import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Post from './Components/Post';

class App extends Component {
  
  render(){
    
    return (
      <BrowserRouter>
        <div className="App black">
          <Navbar />
          <div className="center">
            <h2 className="center white-text">Welcome to my new app project.</h2>
          </div>
          <Switch>
          <Route  path = '/home' component={Home} />
          <Route  path = '/about' component={About} />
          <Route  path = '/Contact' component={Contact} />
          <Route  path = '/:post_id' component={Post}  /></Switch>
        </div>
      </BrowserRouter>
    )
  }
  }

  

export default App;
