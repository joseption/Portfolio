import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import roomfin from "../../Assets/Projects/roomfin.png";
import recipe from "../../Assets/Projects/recipe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row
          style={{
            justifyContent: "center",
            padding: "5rem 0rem",
            "--bs-gutter-x": "3rem",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roomfin}
              isBlog={false}
              title="RoomFin"
              description="The roommate finding app that streamlines your search for the perfect cohabitant. Take a brief survey, browse through compatible matches, and chat with potential roommates, ensuring you find the ideal living partner for your home sharing experience."
              ghLink="https://github.com/joseption/Roommate-Finder"
              demoLink="https://roomfin.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Rummage"
              description="The recipe finding app that simplifies your meal planning. Add your pantry items and discover a vast collection of recipes tailored to your ingredients. Unlock culinary possibilities with just a few taps, making mealtime both delicious and resourceful."
              ghLink="https://github.com/joseption/Recipe-Rummage"
              demoLink="https://reciperummage.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
