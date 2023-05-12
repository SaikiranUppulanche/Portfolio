import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import todolist from "../../Assets/To-Do-List-App.png";
import weatherapp from "../../Assets/weather-forecast-app.png";
import recipeapp from "../../Assets/recipe-app.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To-Do-Task"
                description="To-Do-Task App built with React having CRUD operations such as Create a New Task, Read the following Tasks, Updating the following Tasks, Delete the following Tasks"
                ghLink="https://to-do-taskapp-react.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weatherapp}
                isBlog={false}
                title="Weather Forecast"
                description="Weather Forecast App built using React, in which a search bar is provided where users can input the desired location for which the current weather and 7-day forecast is returned. This App is built using two API's namely OpenWeather API which is responsible for Weather forecast and GeoDB Cities API which is responsible for getting the latitude and longitude of the desired city."
                ghLink="https://weather-forecast-8a79e3.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={recipeapp}
                isBlog={false}
                title="Recipe Website"
                description="Recipe App built using React, in which a search bar is provided where users can input the desired Cuisine for which they want the Recipe.Below the search bar there aare four different categories of cuisines to select from, It contains two sections namely Vegetarian picks and Popular picks"
                ghLink="https://recipe-app-891712.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
