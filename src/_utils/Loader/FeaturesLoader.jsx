import ContentLoader from 'react-content-loader';
import React from 'react';

const FeaturesLoader = (props) => {
  return (
    <ContentLoader
      height={230}
      width={1200}
      {...props}
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      className="terms-loader my-3"
    >
      <rect x="0" y="0" rx="5" ry="5" width="1200" height="230" />
    </ContentLoader>
  );
};

export default FeaturesLoader;
