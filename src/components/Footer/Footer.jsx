import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <div className="logo">
                <div>
                  <h1 className="text-white">Store Front</h1>
                </div>
              </div>
              <p className="footer_text mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                itaque voluptatum placeat quasi hic dignissimos id rerum
                molestiae amet, sapiente in animi dolor suscipit eveniet
                perferendis quisquam eaque, error porro?
              </p>
            </Col>

            <Col lg="3">
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Top Categories</h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Modren Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="2">
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Useful Links</h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/shop">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/login">Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="3">
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Contact</h4>
                <ListGroup className="footer_contact mb-3">
                  <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    <p>Main Metrovill, SITE Karachi</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    <p>+92-346-1900069</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    <p>ubaid.maalik@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="12" className="text-center">
              <p className="footer_copyright">
                Copyright {year} Developed by Ubaid Maalik. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
