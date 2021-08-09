import React from 'react';
// 10D2D2
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import "./index.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import face from "../src/assets/face_round.png"
import bg from "../src/assets/bg_frame_july2021.png"
import logo from "../src/assets/logo.png"
import ReactFloaterJs from 'react-floaterjs'
var styles = {
   backgroundImage: "url(" + bg + ")",
   height: "100%",
   minHeight: "100vh",
   width: "100%",
   minWidth: "100vw",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundColor: "#000000",
   backgroundAttachment: "fixed",
 }
class HomeScreen extends React.Component {
  componentDidMount() {

  }
   render() {
      return (
         <Container fluid className="p-0" style={styles}>
           
           
           <Row style={{maxWidth: "100vw"}}>
             <Col className="d-flex justify-content-center" >
               <div style={{padding: 10}}>
                
                <h4 className="textTop" style={{paddingTop: "50px",fontSize: "30px", fontStyle: "italic"}}>"True humility is not <b style={{fontWeight: "bolder", color: "#ffffff"}}>thinking less</b> of yourself; it is thinking of yourself <b style={{fontWeight: "bolder", color: "#ffffff"}}>less</b>."</h4>
               
                <br/>
                <h5 className="textTop" style={{paddingLeft: "50px", fontSize: "30px",fontStyle: "italic"}}> -C.S. Lewis</h5>
             </div>
             
             </Col>
           </Row>
           
            
            <Row  >
              <Col style ={{position:"absolute", bottom:10}} className="d-flex justify-content-center">
              <ReactFloaterJs>
                  <h4 style={{color: "white"}}>Scroll Down!</h4>
                  </ReactFloaterJs>
                </Col>
            </Row>
            
         </Container>
      );
   }
}

export default HomeScreen;
