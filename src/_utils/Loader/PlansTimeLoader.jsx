import ContentLoader from 'react-content-loader';
import React from 'react';

const PlansTimeLoader = (props) => {
  const commonAttributes = {
    x: '0',
    y: '10',
    rx: '5',
    ry: '5',
    width: '500',
    height: '60',
  };

  return (
    <ContentLoader
      width={500}
      height={60}
      viewBox={`0 0 500 60`}
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      className="d-none d-xl-block mx-auto my-3"
      {...props}
    >
      <rect {...commonAttributes} />
    </ContentLoader>
  );
};

PlansTimeLoader.metadata = {
  name: 'baptiste fkt',
  github: 'baptistefkt',
  description: 'Three column grid layout',
  filename: 'PlansTimeLoader',
};

export default PlansTimeLoader;
