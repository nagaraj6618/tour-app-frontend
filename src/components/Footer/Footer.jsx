import React from 'react';
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: "About"
  },
  {
    path: '/tours',
    display: 'Tour'
  }
];
const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: "Login"
  },
  {
    path: '/register',
    display: 'Register'
  }
]


const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <img src={logo} alt="" />
          {/* <p>Loerm ipusm dolor sit amet consectetur adipiscing elit.
            Commodi enim.
          </p> */}
          <div className="social__links d-felx align-items-center gap-4">
            <span>
              <Link to='#'>
                <i class="ri-youtube-line"></i>
              </Link>
              <Link to='#'>
                <i class="ri-github-fill"></i>
              </Link>
              <Link to='#'>
                <i class="ri-facebook-circle-fill"></i>
              </Link>
              <Link to='#'>
                <i class="ri-instagram-fill"></i>
              </Link>
            </span>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Discovery</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>
          <ListGroup className='footer__quick-links'>

            <ListGroupItem className='ps-0 border-0 d-felx align-items-center gap-3'>

              <h6 className="mb-0 d-flex align-item-center gap-2">
                <span>
                  <i class="ri-map-pin-2-line"></i>
                  Address:
                </span>
              </h6>
              <p className='mb-0'>Chennai,India</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-felx align-items-center gap-3'>

              <h6 className="mb-0 d-flex align-item-center gap-2">
                <span>
                  <i class="ri-mail-line"></i>
                  Email:
                </span>
              </h6>
              <p className='mb-0'>nagaraj@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-felx align-items-center gap-3'>

              <h6 className="mb-0 d-flex align-item-center gap-2">
                <span>
                  <i class="ri-phone-fill"></i>
                  Phone:
                </span>
              </h6>
              <p className='mb-0'>7603809690</p>
            </ListGroupItem>




          </ListGroup>
        </Col>

      </Row>
    </Container>
  </footer>


};

export default Footer;