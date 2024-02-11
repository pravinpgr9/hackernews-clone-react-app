import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Loader = (props) => {
  const [node] = useState(document.createElement('div'));
  const loader = document.querySelector('#loader');

  useEffect(() => {
    if (!loader) return; // Check if loader exists

    loader.appendChild(node).classList.add('message');

    return () => {
      loader.removeChild(node); // Cleanup on unmount
    };
  }, [loader, node]);

  useEffect(() => {
    if (!loader) return; // Check if loader exists

    if (props.show) {
      loader.classList.remove('hide');
      document.body.classList.add('loader-open');
    } else {
      loader.classList.add('hide');
      document.body.classList.remove('loader-open');
    }
  }, [loader, props.show]);

  if (!props.show) return null; // Do not render if show is false

  return ReactDOM.createPortal(props.children, node);
};

export default Loader;
