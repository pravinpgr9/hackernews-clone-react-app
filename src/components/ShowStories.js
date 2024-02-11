import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import { useParams } from 'react-router-dom'; // Import useParams hook

const ShowStories = ({ match }) => {
  // Check if match is defined, if not, set default value to an empty object
  
  const { type } = useParams(); // Extract 'type' from URL parameters
  const { isLoading, stories } = useDataFetcher(type);
  
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map((story) => (
               <Story key={story.id} story={story} /> 
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;
