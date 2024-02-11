import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import homepageImage from "../assets/homepage.jpg"; // Import the image file

// Define HomePage component
const HomePage = () => {
  return (
    <React.Fragment>
      <Container className="pt-2" style={{ backgroundColor: "#f0f0f0" }}>
        <Row>
          <Col md={4}>
            <div className="image-container">
              <img
                src={homepageImage}
                alt="Homepage"
                className="rounded-image"
              />
            </div>
          </Col>
          <Col md={8}>
            <h3>Introduction to the API</h3>
            <p>We will be using the Hackernews API from these URLs:</p>
            <ul>
              <li>
                API to get top stories:{" "}
                <a href="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty">
                  https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
                </a>
              </li>
              <li>
                API to get new stories:{" "}
                <a href="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty">
                  https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
                </a>
              </li>
              <li>
                API to get best stories:{" "}
                <a href="https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty">
                  https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty
                </a>
              </li>
            </ul>

            <p>
              Each of the above stories API returns only an array of IDs
              representing a story.
            </p>
            <p>
              So to get the details of that particular story, we need to make
              another API call.
            </p>

            <p>
              API to get story details:{" "}
              <a href="https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty">
                https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty
              </a>
            </p>
            <p>
              For example:{" "}
              <a href="https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty">
                https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
