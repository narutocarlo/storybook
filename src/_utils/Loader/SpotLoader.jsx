import ContentLoader from 'react-content-loader';
import React from 'react';

const SpotLoader = (props) => (
  <ContentLoader
    speed={1}
    width={340}
    height={70}
    viewBox="0 0 340 70"
    // backgroundColor="#f6f6ef"
    // foregroundColor="#e8e8e3"
    backgroundColor="#f6f6ef"
    foregroundColor="#e8e8e3"
    {...props}
  >
    <rect x="0" y="4" rx="0" ry="0" width="320" height="40" />
    <rect x="0" y="14" rx="0" ry="0" width="303" height="6" />
    <rect x="0" y="50" rx="0" ry="0" width="108" height="20" />
    <rect x="118" y="50" rx="0" ry="0" width="60" height="20" />
    <rect x="185" y="50" rx="0" ry="0" width="60" height="20" />
  </ContentLoader>
);

SpotLoader.metadata = {
  name: 'Justin Irabor',
  github: 'vunderkind',
  description: 'A loading skeleton for your HackerNews clone.',
  filename: 'SpotLoader',
};

export default SpotLoader;
