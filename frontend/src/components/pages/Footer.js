import React from "react";
import { Container, Navbar, Col } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import Img from "../../images/twitterbird.png";
import coinImg from "../../images/CoinA-Z40.png";
// class Footer extends React.Component{
//     render() {
//         let fullYear = new Date().getFullYear();

//         return (
//             <Navbar fixed="bottom" bg="dark" variant="dark">
//                 <Container>
//                     <Col lg={12} className="text-center text-muted">
//                         <div>{fullYear} - {fullYear+1},  All Rights Reserved by Coin A-Z</div>
//                     </Col>
//                 </Container>
//             </Navbar>

//         );
//     }
// }
const Footer = () => {
  let fullYear = new Date().getFullYear();

  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <img src={coinImg} />
            <p></p>
            <p>
              Coin A-Z provides analysis of the crypto market. In addition to
              tracking price, volume and market capitalisation.
            </p>
            {/* <Col lg={12} className="text-center text-muted"> */}
            <div>
              {fullYear} - {fullYear + 1}, All Rights Reserved by Coin A-Z
            </div>
          {/* </Col> */}
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Explore</h5>
            <p>
              <Link to={`/coins/bitcoin`}>Bitcoin Price</Link>
            </p>
            <p>
              <Link to={`/coins/ethereum`}>Ethereum Price</Link>
            </p>
            <p>
              <Link to={`/coins/`}>Top 100 cryptocurrencies</Link>
            </p>
            <p>
              <Link to={`/portfolio/`}>Portfolio Tracker</Link>
            </p>
            <p>
              <Link to={`/todos/`}>Todo Application</Link>
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">About Us</h5>
            <p>
              <Link to={`/about`}>About Us</Link>
            </p>
            <p>info@coina-z.com</p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Socials</h5>
            <p>
              <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
                <img src={Img} />
              </Link>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            <div>
              {fullYear} - {fullYear + 1}, All Rights Reserved by Coin A-Z
            </div>
          </Col>
        </Container>
      </Navbar> */}
    </MDBFooter>
  );
};

export default Footer;
