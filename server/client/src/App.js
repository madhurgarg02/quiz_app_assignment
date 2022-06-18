import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component{
  render(){
    return(
      <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth/>}/>
          
          <Route path="*" element = {<Navigate to ="/" {...Auth}/>}>/
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;