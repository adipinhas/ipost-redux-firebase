import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './cmps/Nav'
import {Switch,Route} from 'react-router-dom'
import DashBoard from './cmps/DashBoard'
import PostDetails from './cmps/PostDetails'
import CreatePost from './cmps/CreatePost'
import SignIn from './cmps/SignIn'
import SignUp from './cmps/SignUp'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
      <Route exact path='/' component={DashBoard}/>
      <Route exact path='/post/:id' component={PostDetails}/>
      <Route exact path='/create' component={CreatePost}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/signup' component={SignUp}/>
      </Switch>


    </div>
  );
}

export default App;
