import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">Hello, myself <b className="purple">Vinti Dadheech</b> is a student at <b className="purple"> SRM Institute of Science and Technology</b> majoring in <b className="purple"> Computer Science</b>. I am passionate about <b className="purple"> front-end web development</b>.
              <br /><br />
              I have experience working both independently and as part of a <b className="purple"> team</b>.
              I have strong <b className="purple"> communication abilities</b>, which is a critical asset for producing the <b className="purple"> finest results</b>.
              Daily, I am capable at handling <b className="purple"> several jobs</b> properly and performing <b className="purple"> well under pressure</b>.
              <br /><br />
              I want to exude a <b className="purple"> cheerful aura</b> so that everyone around me feel at ease.
              I am a <b className="purple"> learner</b> attempting to grow, develop, and enhance my <b className="purple"> coding abilities</b>.
              <br /><br />
              I may be uncertain about many things, but I can guarantee that I am a <b className="purple"> dedicated, ambitious</b> person who is <b className="purple"> eager</b> to learn and assimilate new information.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="/1658872381147.jpeg" className="img-fluid" alt="avatar" style={{ borderRadius: "50%" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vintidadheech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vintidadheech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinti-dadheech-3271a2227/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;