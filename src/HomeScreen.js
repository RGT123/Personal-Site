import React from 'react';

import './App.css';
import 'mdbreact/dist/css/mdb.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import face from "../src/assets/face_round.png"
import bg from "../src/assets/bg_frame.png"
var styles = {
   backgroundImage: "url(" + bg + ")",
   height: "100%",
   minHeight: "100vh",
   width: "100vw",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundColor: "#037AFF",
   backgroundAttachment: "fixed",
 }
class HomeScreen extends React.Component {
  componentDidMount() {

  }
   render() {
      return (
         <Container fluid className="p-0" style={styles}>
           
           <Row  className="align-items-center">
             
            <Col>
              {/* <img src={face} style={{maxHeight: "60vh",maxWidth: "60vw", padding: 25}}/> */}
              
           
            
              </Col>
          
           </Row>
           <Row >
             <Col className="d-flex justify-content-center" >
               <div style={{padding: 10}}>
                
                <h4 className="textTop" style={{paddingTop: "50px",fontSize: "30px", fontStyle: "italic"}}>"True humility is not thinking less of yourself; it is thinking of yourself less."</h4>
               
                <br/>
                <h5 className="textTop" style={{paddingLeft: "50px", fontSize: "30px",fontStyle: "italic"}}> -C.S. Lewis</h5>
             </div>
             
             </Col>
           </Row>
           
            <Row>
            <h1 className="textTop" style={{ padding: "200px", fontSize: "100px"}}>Hi, I'm Ruben!</h1>
            
            </Row>
            
         </Container>
      );
   }
}

export default HomeScreen;
