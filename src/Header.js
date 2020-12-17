import React from 'react'
import './App.css'
import {Navbar, Nav,} from 'react-bootstrap'
import logo from "../src/assets/ruben_logo.png"
class Header extends React.Component {
   constructor() {
      super()
      this.name = "My Navbar"
   }
   render() {
      return (
         <div style={{width: "100vw"}}>
            <Navbar style={{width: "100vw"}} fluid fixed="top" bg="dark" >
               <div><img src={logo} style = {{maxHeight: 70}}/></div>
               <Nav.Link href="#aboutMe">About Me</Nav.Link>
               <Nav.Link href="#skills">Skills</Nav.Link>
               <Nav.Link href="#contactMe">Contact Me</Nav.Link>
            </Navbar>
         </div>
      )
   }
}
export default Header