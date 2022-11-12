import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UmlCard from "./UMLCards";
import Particle from "../Particle";

const cardData = [
  {
    imgPath: "use_case.jpg",
    title: "USE CASE DIAGRAM",
  },
  {
    imgPath: "class_diagram.png",
    title: "CLASS DIAGRAM",
  },
  {
    imgPath: "sequential.jpg",
    title: "SEQUENTIAL DIAGRAM",
  },
  {
    imgPath: "collaboration.jpg",
    title: "COLLABORATION DIAGRAM",
  },
  {
    imgPath: "statechart_diagram.png",
    title: "STATECHART DIAGRAM",
  },
  {
    imgPath: "activity_diagram.png",
    title: "ACTIVITY DIAGRAM",
  },
  {
    imgPath: "package.jpg",
    title: "PACKAGE DIAGRAM",
  },
  {
    imgPath: "object.jpg",
    title: "OBJECT DIAGRAM",
  },
  {
    imgPath: "component.jpg",
    title: "COMPONENT DIAGRAM",
  },
  {
    imgPath: "deployment.jpg",
    title: "DEPLOYMENT DIAGRAM",
  },
]

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few UML Diagrams I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {cardData.map(({ imgPath, title }, index) =>
            <Col md={4} className="project-card">
              <UmlCard
                imgPath={`/Projects/${imgPath}`}
                title={title}
              />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
