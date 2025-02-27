import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import TravelImg from "../../Assets/Projects/travel.png";
import Crypto from "../../Assets/Projects/crypto.png";
import Car from "../../Assets/Projects/car.png";
import Uzum from "../../Assets/Projects/uzum.png";
import Movie from "../../Assets/Projects/movie.png";
import Construction from "../../Assets/Projects/construction.png";

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
              imgPath={Movie}
              isBlog={false}
              title="Movie"
              description="A personal movie project to discover, search, and explore movies built with React.js, Material-UI, and API integration. Features include real-time search, movie details, ratings, and watchlist management to enhance your movie experience."
              ghLink="https://github.com/KhasanTursunov/movie.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Uzum}
              isBlog={false}
              title="E-commerce"
              description="A modern e-commerce platform to browse, search, and purchase products built with React.js, Material-UI, and Firebase/Stripe. Features include real-time cart updates, secure checkout, product filtering, and user authentication for a seamless shopping experience."
              ghLink="https://github.com/KhasanTursunov/react-7-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Car}
              isBlog={false}
              title="Car sale"
              description="A modern car e-commerce platform to browse, compare, and purchase vehicles built with React.js, Material-UI, and Firebase/Stripe. Features include advanced search & filters, real-time price updates, secure checkout, and user authentication for a smooth car-buying experience."
              ghLink="https://khasansproject6.netlify.app/"
              // ghLink="https://github.com/KhasanTursunov/automir.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Construction}
              isBlog={false}
              title="Construction & Tools E-Commerce"
              description="An advanced e-commerce platform for construction materials and power tools, built with React.js, Tailwind CSS, and Firebase/Stripe. Features include category-based filtering, secure checkout, user authentication, real-time stock updates, and delivery tracking for a seamless shopping experience."
              ghLink="https://khasansproject9.netlify.app/"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="Crypto Invest"
              description="A modern, secure, and fast cryptocurrency investment platform where users can buy, sell, and trade digital assets. Built with React.js, Tailwind CSS, and Firebase/Auth0 for authentication, ensuring a seamless and secure experience."
              ghLink="https://khasantursunovproject2.netlify.app/"
              // ghLink="https://github.com/KhasanTursunov/Crappo.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelImg}
              isBlog={false}
              title="TravelEase – Your Ultimate Travel Companion"
              description="A modern travel booking platform that allows users to search, compare, and book flights, hotels, and rental cars with ease. Built with React.js, Tailwind CSS, and API integration, providing a smooth and user-friendly experience."
              ghLink="https://khasantursunovproject5.netlify.app/"
              // ghLink="https://github.com/KhasanTursunov/Expedia.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
