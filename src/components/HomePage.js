import React from 'react';

// Define a Tutorial component to display the tutorial information
const Tutorial = () => {
  return (
    <div>
      <h2>In this tutorial, we will build a mini Hacker News clone in React.</h2>
      <p>We will be using React Hooks syntax for building this application. If you're new to React Hooks, check out my Introduction to React Hooks article to learn the basics of Hooks.</p>
      <p>So let's get started.</p>

      <h3>Introduction to the API</h3>
      <p>We will be using the Hackernews API from these URLs:</p>
      <ul>
        <li>API to get top stories: <a href="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty">https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty</a></li>
        <li>API to get new stories: <a href="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty">https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty</a></li>
        <li>API to get best stories: <a href="https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty">https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty</a></li>
      </ul>
      
      <p>Each of the above stories API returns only an array of IDs representing a story.</p>
      <p>So to get the details of that particular story, we need to make another API call.</p>
      
      <p>API to get story details: <a href="https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty">https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty</a></p>
      <p>For example: <a href="https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty">https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty</a></p>
    </div>
  );
};

// Define HomePage component
const HomePage = () => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <div className="container"> {/* Container for the tutorial information */}
        <Tutorial /> {/* Render the Tutorial component */}
      </div> 
    </React.Fragment>
  );
};

export default HomePage;
