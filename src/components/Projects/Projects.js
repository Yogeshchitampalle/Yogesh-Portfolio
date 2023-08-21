import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import news from "../../Assets/Projects/News.png";
import flappy from "../../Assets/Projects/flappy.png";
import foody from "../../Assets/Projects/food1.PNG";
import portfolio from "../../Assets/Projects/portfolio.png";
import crm from "../../Assets/Projects/crm.png";
import kanban from "../../Assets/Projects/kanban.PNG"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foody}
              isBlog={false}
              title="Food Delivery App"
              description="Using HTML-5, CSS-3,JavaScript, Bootstrap Created Food Delivery App.The main aim of this project to understand Overview of Food Delivery App Howlooks, How Works Behind the sceen.
              This app provides a convenient and seamless experience for users to browse through a wide range of food options, Overall Look of food delevery App"
              ghLink="https://github.com/Yogeshchitampalle/food-delivery-app"
              demoLink="https://yogichi-food-app.netlify.app/#home-section"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="CRM-App"
              description="Using React.js,Bootstrap, Material-UI, React Icons, created customer relationship Management(CRM)"
              ghLink="https://github.com/Yogeshchitampalle/Crm-App"
              demoLink="https://see-crm-application.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappy}
              isBlog={false}
              title="Flappy Bird"
              description="Using Vanilla Javascript Created Funny Game like Flappy Bird Game Which help me understand Bascis of Funstion ,Setimeout in JS"
              ghLink="https://confusedbird.netlify.app/"  
              demoLink="https://confusedbird.netlify.app/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News_App"
              description="The JavaScript code that interacts with the News App API may involve utilizing technologies like the Fetch API or Axios to send requests, processing and parsing the received data, and dynamically updating the app's UI to display the fetched news content.
              Which helps me to Understanding to Working of API'S"
              ghLink="https://github.com/Yogeshchitampalle/News_Portal.js"
              demoLink="https://github.com/Yogeshchitampalle/News_Portal.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban_App"
              description="Kanban app streamlines task management by providing an organized and visual approach to handling tasks and projects, making it easier for individuals and teams to prioritize, track, and complete their work."
              ghLink="https://github.com/Yogeshchitampalle/Kanban-Using-JS"
              demoLink="https://drag-kanban-js.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Using HTML-CSS-JS"
              description="Using Vanilla JavaScript created My first portfolio"
              ghLink="https://github.com/Yogeshchitampalle/Portfolio_Using_VanillaJs"
              demoLink="https://yogichi95.netlify.app/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
