import ContentLoader from 'react-content-loader';
import React from 'react';

const NewsLoader = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 1164 900"
      height={900}
      width={1164}
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      {...props}
    >
      <rect x="0" y="10" rx="5" ry="5" width="375" height="140" />
      <rect x="395" y="10" rx="5" ry="5" width="375" height="280" />
      <rect x="790" y="10" rx="5" ry="5" width="375" height="140" />
      <rect x="0" y="160" rx="5" ry="5" width="375" height="280" />
      <rect x="395" y="300" rx="5" ry="5" width="375" height="140" />
      <rect x="790" y="160" rx="5" ry="5" width="375" height="280" />
      <rect x="0" y="450" rx="5" ry="5" width="375" height="280" />
      <rect x="395" y="450" rx="5" ry="5" width="375" height="140" />
      <rect x="790" y="450" rx="5" ry="5" width="375" height="280" />
      <rect x="395" y="600" rx="5" ry="5" width="375" height="280" />
    </ContentLoader>
  );
};

NewsLoader.metadata = {
  name: 'baptiste fkt',
  github: 'baptistefkt',
  description: 'Three column grid layout',
  filename: 'NewsLoader',
};

export default NewsLoader;
