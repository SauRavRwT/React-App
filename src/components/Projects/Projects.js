import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import papers from "../../Assets/Projects/papers.png";
import song from "../../Assets/Projects/song.png";
import web from "../../Assets/Projects/web.png";
import project from "../../Assets/Projects/project.png";
import dt from "../../Assets/Projects/dt.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={papers}
              isBlog={false}
              title="Papers"
              description="Papers WebApp uses Pexel api to deliver high-quality wallpaper content. The website offers a wide variety of wallpapers for users to choose from, and the content is updated regularly."
              ghLink="https://github.com/SauRavRwT/Papers"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={song}
              isBlog={false}
              title="Songeet"
              description="A Simple Online Music Player. More interactive."
              ghLink="https://github.com/SauRavRwT/Songeet"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="WebApp"
              description="A Simple Web Application."
              ghLink="https://github.com/SauRavRwT/Webapp"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Major Project"
              description="This is a Major project or we can say a beta project. To make all in one webpage that have all important pages or sites. To make users feel convenient and use more features that are provided by us. This project like a portfolio in which we working in different projects like."
              ghLink="https://github.com/SauRavRwT/major_project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dt}
              isBlog={false}
              title="Device Tree"
              description="Device Tree for Redmi not 11 pro+ plus 5g."
              ghLink="https://github.com/SauRavRwT/android_device_xiaomi_veux"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio using react js."
              ghLink="https://github.com/SauRavRwT/Portfolio"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
