import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
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
            <p style={{ textAlign: "justify" }} className="home-about-body">
              I'm an experienced and passionate{" "}
              <b className="purple">Software Engineer</b> specializing in
              front-end and UI development. My main goal is to create visually
              appealing and user-friendly interfaces for desktop, web, and
              mobile applications. I've had the opportunity to work with a wide
              range of technologies and frameworks that really get me excited. I
              absolutely love diving into{" "}
              <b className="purple">
                HTML, CSS, Typescript, JavaScript, Angular, React.js, and React
                Native
              </b>
              , as they allow me to build dynamic and interactive interfaces
              that bring ideas to life.
              <br />
              <br />
              What really makes my work fulfilling is incorporating UI/UX design
              principles. I find it incredibly rewarding to use tools like{" "}
              <b className="purple">Adobe XD</b> and{" "}
              <b className="purple">Figma</b> to design pixel-perfect interfaces
              and create captivating user experiences. To add that extra touch,
              I've even dabbled in creating custom assets using{" "}
              <b className="purple">Adobe Illustrator</b> and{" "}
              <b className="purple">Adobe Photoshop</b>, which has helped me
              deliver high-quality and polished website appearances. When it
              comes to the back end, I have experience working with{" "}
              <b className="purple">Express.js</b> and{" "}
              <b className="purple">Node.js</b> to seamlessly integrate
              front-end components with server-side functionalities through
              APIs. It's all about that smooth connection between the two!
              <br />
              <br />
              I'm always on the lookout for the latest front-end technologies
              and trends. Staying up to date is key for me, as I love exploring
              new ideas and introducing innovative practices into my development
              process. If you're as passionate about these things as I am, I'd
              love to <b className="purple">connect</b> with you! I'm genuinely
              thrilled to bring my technical and creative skills to impactful
              front-end UI development projects and contribute to their success.
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
