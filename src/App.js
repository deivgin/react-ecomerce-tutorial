import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from './pages/ShopPage/ShopPage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
