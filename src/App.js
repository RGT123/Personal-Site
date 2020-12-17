import React from 'react';
import Header from './Header';
import './App.css';
import HomeScreen from './HomeScreen';
import Skills from "./Skills";
import {Navbar, Nav,} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../src/assets/ruben_logo.png"

class App extends React.Component {
   render() {
      return (
         <div>
            
            <HomeScreen id="aboutMe"></HomeScreen>
            <Skills id="#skills"></Skills>
         </div>
      );
   }
}

export default App;
