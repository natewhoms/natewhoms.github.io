import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/toy.png";
import projImg2 from "../assets/img/toy.png";
import projImg3 from "../assets/img/toy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "This is a project",
      image: projImg1,
      link: ""
    },
    {
      title: "Project 2",
      description: "This is a project",
      image: projImg2,
      link: ""
    },
    {
      title: "Project 3",
      description: "This is a project",
      image: projImg3,
      link: ""
    },
    {
      title: "Project 4",
      description: "This is a project",
      image: projImg1,
      link: ""
    }
  ]

  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <Col size={12}></Col>
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
              </div>
              }
      </TrackVisibility>
      <ul class="cards">
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">Etch-a-Sketch</div>
        <p class="card__text">A simple online Etch-a-Sketch made with HTML, CSS, and JS. Made for the Odin Project. </p>
        <button class="btn btn--block card__btn">Go</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--river"></div>
      <div class="card__content">
        <div class="card__title">Coming soon</div>
        <p class="card__text"></p>
        <button class="btn btn--block card__btn"></button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--record"></div>
      <div class="card__content">
        <div class="card__title">Coming soon</div>
        <p class="card__text"></p>
        <button class="btn btn--block card__btn"></button>
      </div>
    </div>
  </li>
</ul>
        </Row>
      </Container>

    </section>
  )
}