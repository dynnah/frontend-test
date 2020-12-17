import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/components/Header'
import Footer from './components/components/Footer'
import Home from './components/pages/Home'
import SearchBar from './components/components/Search'


function App() {
  return (
    <Router>
      <Header />
      <SearchBar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
