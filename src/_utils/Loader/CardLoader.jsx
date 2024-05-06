import ContentLoader from 'react-content-loader';
import React from 'react';

const CardLoader = (props) => (
  <ContentLoader
    width={1450}
    height={200}
    viewBox="0 0 1450 200"
    // backgroundColor="#f0f0f0"
    // foregroundColor="#dedede"
    backgroundColor="#f6f6ef"
    foregroundColor="#e8e8e3"
    {...props}
  >
    <rect x="1000" y="0" rx="10" ry="10" width="450" height="170" />
    <rect x="500" y="0" rx="10" ry="10" width="450" height="170" />
    <rect x="0" y="0" rx="10" ry="10" width="450" height="170" />
  </ContentLoader>
);

CardLoader.metadata = {
  name: 'Nic Bovee', // My name
  github: 'ghettifish', // Github username
  description: 'A simple favorite from the DoorDash local favorites.', // Little tagline
  filename: 'CardLoader', // filename of your loader
};

export default CardLoader;
