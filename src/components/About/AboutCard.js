import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Avishka Kavishan</span>{" "}
            from <span className="purple">Matara, Sri Lanka</span>.
            <br />
            I’m final-year undergraduate student at the{" "}
            <span className="purple">University of Sri Jayewardenepura,</span> currently pursuing my {" "}
            <span className="purple">BSc in Information Technology</span>.
            <br/>
            <br />Over the years, I’ve discovered a strong passion for{" "}
            <span className="purple">UI/UX Design,</span> and I’m now fully focused on building my career in creating
             meaningful, user-centered digital experiences.{" "}
            <span className="purple"></span>.
            <br />
            <br />
            I love transforming ideas into intuitive interfaces and visually engaging designs. My work is driven by empathy, 
            simplicity, and a deep interest in how people interact with technology. As I continue my journey, I’m excited to learn, 
            explore, and contribute to projects that make everyday digital interactions smoother and more enjoyable.
            <br />
            <br/>
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing ART ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
