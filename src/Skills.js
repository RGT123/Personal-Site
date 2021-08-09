import React from 'react';

import './App.css';
import './Skills.css'
import Header from './Header';
import Button from 'react-bootstrap/Button';
import {Container, Card} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from "../src/assets/bg1Art.png";
import rutgers from "../src/assets/rutgers_logo.jpg";
import gm from "../src/assets/gm_small.png";
import code from "../src/assets/code_logo.png";
import social from "../src/assets/social_logo.png";
var styles = {
   backgroundImage: "url(" + bg + ")",
   height: "100%",
   minHeight: "100vh",
   width: "100vw",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundColor: "#04FFD4",
   backgroundAttachment: "fixed",
 }

class Skills extends React.Component {
  componentDidMount() {

  }
   render() {
      return (
         <Container fluid style={styles}>
            <Row className="topRow">
               <Col sm="12" md="12" lg="6" style={{padding: 40}}>
                  <Card style={{padding: 30, minWidth: "250px"}}>
                     <Card.Img src={rutgers}></Card.Img>
                     <Card.Title>Education</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">Rutgers University - Computer Science BS, Economics Minor January 2021</li>
                           <li className="list-group-item">East Brunswick Highschool - 2017</li>
                        </ul></Card.Body>
                  </Card>
                  </Col>
               <Col sm="12" md="12" lg="6" style={{padding: 40}}>  
               
                  <Card style={{padding: 30, minWidth: "250px"}}>
                     <Card.Img src = {gm} ></Card.Img>
                     <Card.Title>Experience</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">General Motors - GPG Track Engineer, 2021 - Present</li>
                           <li className="list-group-item">Munchtime.co - IOS Developer Internship, Summer 2020</li>
                        </ul></Card.Body>
                  </Card>
                  
                  
               </Col>
            
            <Col sm="12" md="12" lg="6" style={{padding: 40}}>
                  <Card style={{padding: 30, minWidth: "250px"}}>
                     <Card.Img src = {code} ></Card.Img>
                     <Card.Title>Skills</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">Java, C, Python, Swift/SwiftUI</li>
                           <li className="list-group-item">HTML, CSS, React</li>
                        </ul></Card.Body>
                  </Card>
               
                  
               </Col>
               <Col sm="12" md="12" lg="6" style={{padding: 40}}>
                  <Card style={{padding: 30, minWidth: "250px"}}>
                     <Card.Img src={social}></Card.Img>
                     <Card.Title>Follow Me</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item"><a href ="https://github.com/RGT123">Github</a></li>
                           <li className="list-group-item"><a href ="https://www.linkedin.com/in/ruben-g-thomas/">LinkedIn</a></li>
                           
                        </ul></Card.Body>
                  </Card>
                  
                  
               </Col>
            </Row>
         </Container>
      );
   }
}

export default Skills;
