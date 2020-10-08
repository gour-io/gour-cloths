import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import HomePage from "../src/pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  )
}
const SneakerPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>SneakerPage</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={HatsPage}/>
        <Route path="/sneakers" component={SneakerPage}/>
      </Switch>
    </div>
  );
}

export default App;
