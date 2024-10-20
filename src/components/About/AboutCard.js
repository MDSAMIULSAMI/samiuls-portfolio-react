import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings Everyone, I'm <span className="purple">Md. Samiul Islam </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am currently fresh graduated from <span className="green">Green University of Bangladesh</span>.
            <br />
            From 01 October to 01 December 2023 I have worked as <span className="purple"> Frontend Developer </span> in <span className="purple">"Unicorn Software and Solution Ltd."</span>
            <br />
            <br />
            Apart from coding, some of my field of interest are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Artificial Intelligence, deep learning, machine learning — whatever you're doing if you don't understand it — learn it. Because otherwise you're going to be a dinosaur within 3 years.”{" "}
          </p>
          <footer className="blockquote-footer">Mark Cuban</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
