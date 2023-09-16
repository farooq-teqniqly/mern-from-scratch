import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Footer = ({ year = new Date().getFullYear() }) => {
  return (
    <Navbar expand="lg">
      <footer data-testid="footer">
        <p>&copy;{year} ProShop. All rights reserved.</p>
        <Nav className="me-auto">
          <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
          <Nav.Link href="/terms-of-service">Terms of Service</Nav.Link>
        </Nav>
      </footer>
    </Navbar>
  );
};
