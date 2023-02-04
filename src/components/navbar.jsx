import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';


export const Navba = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
    // <Navbar>
    //   <Container>
    //     <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text>
    //         Signed in as: <a href="#login">Mark Otto</a>
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
