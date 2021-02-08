import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import App1 from "./components/App1";

import SearchBar from './components/searchBar'


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <SearchBar />
        <App1/>

      </Router>

    </React.Fragment>
  );
}

export default App;
