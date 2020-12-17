import React from 'react';

import './App.css';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import {Container, Card} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from "../src/assets/bg1.png";
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
            <Row style={{maxWidth: "60vw", paddingTop: 100, paddingLeft: 100}}>
               <Col style={{ padding: 50, maxWidth: "25vw"}}>
                  <Card style={{padding: 10}}>
                     <Card.Img src={rutgers}></Card.Img>
                     <Card.Title>Education</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">Rutgers University - Computer Science, BS 2021</li>
                           <li className="list-group-item">East Brunswick Highschool - 2017</li>
                        </ul></Card.Body>
                  </Card>
                  
                  
               </Col>
               <Col style={{ padding: 50, maxWidth: "25vw"}}>
                  <Card style={{padding: 10}}>
                     <Card.Img src = {gm} ></Card.Img>
                     <Card.Title>Experience</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">General Motors - GPG Track Engineer, 2021 - Present</li>
                           <li className="list-group-item">Munchtime.co - IOS Developer Internship, Summer 2020</li>
                        </ul></Card.Body>
                  </Card>
                  
                  
               </Col>
            </Row>
            <Row style={{maxWidth: "60vw", paddingLeft: 100}}>
            <Col style={{ padding: 50, maxWidth: "25vw"}}>
                  <Card style={{padding: 30}}>
                     <Card.Img src = {code} ></Card.Img>
                     <Card.Title>Skills</Card.Title>
                     <Card.Body>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">Java, C, Python, Swift/SwiftUI</li>
                           <li className="list-group-item">HTML, CSS, React</li>
                        </ul></Card.Body>
                  </Card>
               
                  
               </Col>
               <Col style={{ padding: 50, maxWidth: "25vw"}}>
                  <Card style={{padding: 30}}>
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
