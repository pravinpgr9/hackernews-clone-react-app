import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          <Link url={url} title={title} />
        </Card.Title>
        <Card.Text>
          by{' '}
          <Link
            url={`https://news.ycombinator.com/user?id=${by}`}
            title={by}
          />
          {' | '}
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
          {' | '}
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </Card.Text>
        <Button
          as={RouterLink} // Use RouterLink instead of a regular <a> tag
          to={`/story/${id}`}
          variant="primary"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Story;
