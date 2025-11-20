import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/self.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple"> UI/UX Designer </b> who believes great design isn’t just about how 
              something looks — it’s about how it feels, how it works, and how it 
              makes life a little easier. I’ve always been fascinated by the way 
              people interact with technology, and I’ve made it my mission to create
               digital experiences that are simple, clear, and delightful.
              <br />
              <br />
              From early sketches to <b className="purple"> fully interactive prototypes, </b>
              I enjoy shaping ideas into products that users love. 
              <br />
              <br />
              I’m passionate about <b className="purple"> accessibility, meaningful aesthetics, 
              and designing experiences </b>that stay with people long after they close the page.
              <br />
              <br />
              Design to me is a balance of
              <b className="purple"> creativity, empathy, and problem-solving </b> and I’m constantly exploring new ways 
              to bring these together in every project I take on.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
