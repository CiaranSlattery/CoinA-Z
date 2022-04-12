import { Container } from "react-bootstrap";
import coinQR from "../../images/qrscan.png";

const AboutPage = () => {
  return (
    <Container>
      <div>
        <center>
          <h1>About Coin A-Z</h1>
        </center>
        Coin A-Z is a cryptocurrency tracking and data website.
        <p>
          As part of my final year project I developed Coin A-Z, a full stack
          website using React, Spring Boot and MySQL.
        </p>
        <p>
          A user is able to track the prices of cryptocurrencies, build a
          portfolio of their assets and track the prices of these assets.
        </p>
        <p>
          Users are also able to see historical data of coins using the charts.
        </p>
        <div>
          Source Code: github.com/ciaranslattery/coina-z
          <p></p>
          <img src={coinQR} />
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
