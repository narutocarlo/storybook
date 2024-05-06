import ContentLoader from 'react-content-loader';
import React from 'react';

const TermsLoader = (props) => {
  return (
    <ContentLoader
      height={900}
      width={850}
      {...props}
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      className="terms-loader"
    >
      <rect x="0" y="0" rx="5" ry="5" width="850" height="210" />
      <rect x="0" y="230" rx="5" ry="5" width="850" height="210" />
      <rect x="0" y="460" rx="5" ry="5" width="850" height="210" />
      <rect x="0" y="690" rx="5" ry="5" width="850" height="210" />
    </ContentLoader>
  );
};

export default TermsLoader;
