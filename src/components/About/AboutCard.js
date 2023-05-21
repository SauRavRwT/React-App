import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Saurav Rawat </span>
            from <span className="blue"> New Delhi, India.</span>
            <br />I'm <span className="blue">Front-End Developer</span> and
            <span className="blue"> UI/UX Designer</span>.
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              • Playing Games.
            </li>
            <li className="about-activity">
              • Buildings Roms.
            </li>
            <li className="about-activity">
              • Travelling.
            </li>
          </ul>
          <br />
          <p style={{ color: "#577D86" }}>
            "Just Moving Forward."{" "}
          </p>
          <footer className="blockquote-footer">Saurav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
