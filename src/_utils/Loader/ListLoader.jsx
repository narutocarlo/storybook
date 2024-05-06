import ContentLoader from 'react-content-loader';
import React from 'react';

const ListLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={250}
    viewBox="0 0 400 300"
    backgroundColor="#f6f6ef"
    foregroundColor="#e8e8e3"
    {...props}
  >
    <rect x="50" y="5" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="5" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="105" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="105" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="155" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="155" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="205" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="205" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="255" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="255" rx="4" ry="4" width="35" height="38" />
  </ContentLoader>
);

export default ListLoader;
