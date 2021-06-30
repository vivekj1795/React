import logo from './logo.svg';
import './App.css';
import React from 'react'
import Styling from './components/Styling';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Photos from './components/Photos';
import Comment from './components/Comment';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BrowserRouter>
        <div>
         <Navbar />
         <Switch>
            <Route exact path="/" component={Styling}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/Posts" component={Posts}></Route>
            <Route exact path="/Comments" component={Comment}></Route>
            <Route exact path="/Photos" component={Photos}></Route>
         </Switch>
        </div>
        </BrowserRouter> */}
        <Styling />
      </header>
    </div>
  );
}

export default App;
