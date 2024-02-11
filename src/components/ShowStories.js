import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card'; // Import Card component from React Bootstrap
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component from React Bootstrap

const ShowStories = () => {
  const { type } = useParams();
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner animation="border" role="status"> 
        </Spinner>
      ) : (
        <React.Fragment>
          {stories.map((story) => (
            <Card key={story.id} className="mb-3">
              <Card.Body>
                <Story story={story} />
              </Card.Body>
            </Card>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;
