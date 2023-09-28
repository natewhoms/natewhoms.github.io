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
        <div class="card__title">Flex</div>
        <p class="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
        <button class="btn btn--block card__btn">Button</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--river"></div>
      <div class="card__content">
        <div class="card__title">Flex Grow</div>
        <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
        <button class="btn btn--block card__btn">Button</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--record"></div>
      <div class="card__content">
        <div class="card__title">Flex Shrink</div>
        <p class="card__text">This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.</p>
        <button class="btn btn--block card__btn">Button</button>
      </div>
    </div>
  </li>
</ul>
        </Row>
      </Container>

    </section>
  )
}