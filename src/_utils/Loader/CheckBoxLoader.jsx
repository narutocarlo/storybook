import ContentLoader from 'react-content-loader';
import React from 'react';

const CheckBoxLoader = (props) => {
  return (
    <ContentLoader height={50} width={520} {...props}>
      {/* <rect x="60" y="30" rx="5" ry="5" width="220" height="15" /> */}
      <rect x="0" y="10" rx="5" ry="5" width="70" height="15" />
      <rect x="80" y="10" rx="5" ry="5" width="90" height="15" />
      <rect x="180" y="10" rx="5" ry="5" width="70" height="15" />
      <rect x="260" y="10" rx="5" ry="5" width="60" height="15" />
      <rect x="330" y="10" rx="5" ry="5" width="50" height="15" />
      <rect x="390" y="10" rx="5" ry="5" width="70" height="15" />
      <rect x="0" y="30" rx="5" ry="5" width="60" height="15" />
      <rect x="70" y="30" rx="5" ry="5" width="80" height="15" />
      <rect x="160" y="30" rx="5" ry="5" width="90" height="15" />
      <rect x="260" y="30" rx="5" ry="5" width="100" height="15" />
      <rect x="320" y="30" rx="5" ry="5" width="50" height="15" />
      <rect x="380" y="30" rx="5" ry="5" width="60" height="15" />

    </ContentLoader>
  );
};

export default CheckBoxLoader;
