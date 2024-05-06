import ContentLoader from 'react-content-loader';
import React from 'react';

const PlansLoader = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 1164 350"
      height={400}
      width={1164}
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      className="d-none d-xl-block"
      {...props}
    >
      {/* <rect x="340" y="10" rx="5" ry="5" width="500" height="50" /> */}
      <rect x="0" y="80" rx="5" ry="5" width="375" height="280" />
      <rect x="395" y="80" rx="5" ry="5" width="375" height="280" />
      <rect x="790" y="80" rx="5" ry="5" width="375" height="280" />
    </ContentLoader>
  );
};

PlansLoader.metadata = {
  name: 'baptiste fkt',
  github: 'baptistefkt',
  description: 'Three column grid layout',
  filename: 'PlansLoader',
};

export default PlansLoader;
