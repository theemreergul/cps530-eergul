import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Conclusion from './components/Conclusion';
import Demo from './components/Demo';
import Design from './components/Design';
import References from './components/References';
import Summary from './components/Summary';
import Tutorial from './components/Tutorial';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink 
                exact to="/" 
                activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/conclusion" 
                activeClassName="selected">
                Conclusion
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/demo" 
                activeClassName="selected">
                Demo
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/design" 
                activeClassName="selected">
                design
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/references" 
                activeClassName="selected">
                References
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/summary" 
                activeClassName="selected">
                Summary
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tutorial" 
                activeClassName="selected">
                Tutorial
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/conclusion" element={<Conclusion/>}>
          </Route>
          <Route path="/tutorial" element={<Tutorial/>}>
          </Route>
          <Route path="/summary" element={<Summary/>}>
          </Route>
          <Route path="/references" element={<References/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
          <Route path="/demo" element={<Demo/>}>
          </Route>
          <Route path="/design" element={<Design/>}>
          </Route>
          <Route path="/"  element={<Home/>}>
          </Route>
          </Routes>
          </Router>
    </div>
  );
}
export default App;