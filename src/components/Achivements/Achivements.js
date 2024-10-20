import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import PfE from "../../Assets/Certificates/Programming_Everybody.jpeg"
// import PDj from "../../Assets/Certificates/Python_Django.png"
// import AI from "../../Assets/Certificates/AI_For_Everone.jpeg"
// import AINano from "../../Assets/Certificates/AI_Nano_Course.jpeg"
import AchivementsCard from "./AchivementsCard";
import Particle from "../Particle";

function Achivement() {
  return (
    <Container fluid className="achivement-section">
      <Particle />
      <Container>
        <h1 className="achivement-heading">
          My <strong className="purple">Achivements </strong>
        </h1>
        <p style={{ color: "white" }}>
        In addition to my academic studies, I have successfully completed several specialized courses, enhancing my skills and knowledge in various areas.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="achivement-card">
            <AchivementsCard
              imgPath="https://i.ibb.co.com/5MDD0kL/Programming-Everybody.jpg"
              title="Programming for Everybody (Getting Started with Python)"
              description="Completed October 8, 2020 in 18 hours (approximately)"
              vLink="https://coursera.org/share/07f76ab8872b96ecba8ff17cee273ef4"
            />
                
          </Col>

          <Col md={4} className="achivement-card">
            <AchivementsCard
              imgPath="https://i.ibb.co.com/CzSyFYj/Python-Django.png"
              title="Python Django 101: Step 1 to become a Data Science Expert"
              description="Completed September 8, 2024 in 2 hours (approximately)"
              vLink="https://simpli-web.app.link/e/42zpWLxPuNb"          
            />
          </Col>

          <Col md={4} className="achivement-card">
            <AchivementsCard
              imgPath="https://i.ibb.co.com/7yZcqJz/AI-For-Everone.jpg"
              title="AI For Everyone"
              description="Completed June 29, 2020 in 6 hours (approximately)"
              vLink="https://coursera.org/share/6ecabbbf6c791eac234c47930bf3ed84"
            />
          </Col>

          <Col md={4} className="achivement-card">
            <AchivementsCard
              imgPath="https://i.ibb.co.com/y0b97RV/AI-Nano-Course.jpg"
              title="Business Implications of AI: A Nano-course"
              description="Completed July 1, 2020 1 hours (approximately)"
              vLink="https://coursera.org/share/a9f5b01fc014113f4ba094aac1c9230a"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achivement;
