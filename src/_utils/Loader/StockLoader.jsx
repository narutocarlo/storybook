import ContentLoader from 'react-content-loader';
import React from 'react';

const StockLoader = (props) => {
  return (
    <ContentLoader
      width={730}
      height={304}
      // primaryColor="#e4e4e4"
      // secondaryColor="#d3d3d3"
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="265" height="42" />
      <rect x="275" y="0" rx="5" ry="5" width="265" height="42" />
      <rect x="550" y="0" rx="5" ry="5" width="265" height="42" />
      <rect x="825" y="0" rx="5" ry="5" width="265" height="42" />

      <rect x="0" y="52" rx="5" ry="5" width="265" height="42" />
      <rect x="275" y="52" rx="5" ry="5" width="265" height="42" />
      <rect x="550" y="52" rx="5" ry="5" width="265" height="42" />
      <rect x="825" y="52" rx="5" ry="5" width="265" height="42" />

      <rect x="0" y="104" rx="5" ry="5" width="265" height="42" />
      <rect x="275" y="104" rx="5" ry="5" width="265" height="42" />
      <rect x="550" y="104" rx="5" ry="5" width="265" height="42" />
      <rect x="825" y="104" rx="5" ry="5" width="265" height="42" />

      <rect x="0" y="156" rx="5" ry="5" width="265" height="42" />
      <rect x="275" y="156" rx="5" ry="5" width="265" height="42" />
      <rect x="550" y="156" rx="5" ry="5" width="265" height="42" />
      <rect x="825" y="156" rx="5" ry="5" width="265" height="42" />

      <rect x="0" y="208" rx="5" ry="5" width="265" height="42" />
      <rect x="275" y="208" rx="5" ry="5" width="265" height="42" />
      <rect x="550" y="208" rx="5" ry="5" width="265" height="42" />
      <rect x="825" y="208" rx="5" ry="5" width="265" height="42" />

      <rect x="0" y="260" rx="5" ry="5" width="265" height="42" />
      <rect x="275" y="260" rx="5" ry="5" width="265" height="42" />
      <rect x="550" y="260" rx="5" ry="5" width="265" height="42" />
      <rect x="825" y="260" rx="5" ry="5" width="265" height="42" />
    </ContentLoader>
  );
};

StockLoader.metadata = {
  name: 'Bilal Ahmed',
  github: 'bilal-ahmed-dev',
  description: 'Simple CRUD Data in Table format',
  filename: 'StockLoader',
};

export default StockLoader;
