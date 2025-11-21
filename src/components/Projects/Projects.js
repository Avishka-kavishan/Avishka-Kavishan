import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/edu.jpg";
import emotion from "../../Assets/Projects/himalaya.jpg";
import editor from "../../Assets/Projects/laundry.jpg";
import chatify from "../../Assets/Projects/booking.jpg";
import suicide from "../../Assets/Projects/setty.jpg";
import bitsOfCode from "../../Assets/Projects/travel.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Uni Hall Booking"
              description="Bookinglabs is a simple and intuitive UI designed for university students, lecturers, and staff 
              to avoid double bookings and manage facility reservations easily. It streamlines room and
               lab bookings with a clean signup flow and a user-friendly layout, making campus scheduling smoother and more efficient."
              ghLink="https://www.figma.com/design/aO5U6jGBBbvVjNOFKmLpWl/Uni-Hall-Booking-App?node-id=1-2&t=nWdiDaFaFRRaicSz-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Travel Ceylon"
              description="Travel Ceylon is a modern UI designed to help tourists explore Sri Lanka with ease. It includes travel guides, 
              accommodation bookings, trip planning, and a smart chatbot for instant support. The interface highlights beautiful visuals 
              and simple navigation to enhance the user experience. This design makes discovering Sri Lanka more convenient, informative, 
              and enjoyable for every traveler."
              ghLink="https://www.figma.com/design/XGra7K0pUZiBVdyR1btLYJ/Journey-Ceylon-Travel-Mobile-App?node-id=0-1&t=Ek4GxgHGGtzmpdOS-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BlueWave Laundry"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://www.figma.com/design/NxZ1JAdTP7Omo7OMXWxFsD/Laundry-Mobile-app?node-id=0-1&t=0FlBQR7gLsARcrP9-1"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GuidenceGuid Web"
              description="GuidanceGrid is a modern and user-friendly web interface designed for the Ruhuna National College of Education, This UI helps promote the college’s activities while 
              providing an organized platform to upload and access learning materials, modules, and resources.
              The design focuses on clarity, accessibility, and easy navigation, making it simple for teacher trainees to find the support 
              they need throughout their learning journey."
              ghLink="https://www.figma.com/design/j7SQJV154YF6PsawVT4o8l/Ruhuna-Nat?node-id=75-69&t=bnfGrMcZp8YUQO8Q-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Furniture Web"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://www.figma.com/design/DivCUPAD9ZXMQmJHq22UTD/Furniture-website?node-id=1-2&t=e3UDfsHiHt1IElSF-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Himalaya Wellness Web"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://www.figma.com/design/5TGga90wOmMLcpYB6zrDM3/Product-web-site-page?node-id=0-1&t=34skhcay90mirPfF-1" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
