import ContentLoader from 'react-content-loader';
import React from 'react';

const BarChartLoaderSmall = (props) => {
  return (
    <ContentLoader
      width={450}
      height={250}
      viewBox="0 0 800 400"
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      {...props}
    >
      {/* <rect x="0" y="150" rx="0" ry="0" width="25" height="250" />
      <rect x="30" y="200" rx="0" ry="0" width="25" height="200" /> */}
      <rect x="50" y="25" rx="0" ry="0" width="2" height="310" />
      <rect x="50" y="335" rx="0" ry="0" width="760" height="2" />
      <rect x="60" y="155" rx="0" ry="0" width="25" height="180" />
      <rect x="90" y="215" rx="0" ry="0" width="25" height="120" />
      <rect x="120" y="115" rx="0" ry="0" width="25" height="220" />
      <rect x="150" y="85" rx="0" ry="0" width="25" height="250" />
      <rect x="180" y="95" rx="0" ry="0" width="25" height="240" />
      <rect x="210" y="155" rx="0" ry="0" width="25" height="180" />
      <rect x="240" y="250" rx="0" ry="0" width="25" height="85" />
      <rect x="270" y="135" rx="0" ry="0" width="25" height="200" />
      <rect x="300" y="215" rx="0" ry="0" width="25" height="120" />
      <rect x="330" y="155" rx="0" ry="0" width="25" height="180" />
      <rect x="360" y="215" rx="0" ry="0" width="25" height="120" />
      <rect x="390" y="115" rx="0" ry="0" width="25" height="220" />
      <rect x="420" y="85" rx="0" ry="0" width="25" height="250" />
      <rect x="450" y="95" rx="0" ry="0" width="25" height="240" />
      <rect x="480" y="155" rx="0" ry="0" width="25" height="180" />
      <rect x="510" y="155" rx="0" ry="0" width="25" height="180" />
      <rect x="540" y="215" rx="0" ry="0" width="25" height="120" />
      <rect x="570" y="115" rx="0" ry="0" width="25" height="220" />
      <rect x="600" y="85" rx="0" ry="0" width="25" height="250" />
      <rect x="630" y="95" rx="0" ry="0" width="25" height="240" />
      <rect x="660" y="155" rx="0" ry="0" width="25" height="180" />
      <rect x="690" y="85" rx="0" ry="0" width="25" height="250" />
      <rect x="720" y="135" rx="0" ry="0" width="25" height="200" />
      <rect x="750" y="155" rx="0" ry="0" width="25" height="180" />
      {/* <rect x="770" y="215" rx="0" ry="0" width="25" height="120" /> */}
    </ContentLoader>
  );
};

BarChartLoaderSmall.metadata = {
  name: 'Phuong Dao',
  github: 'dao-phuong',
  description: 'Bar Chart',
  filename: 'BarChart',
};

export default BarChartLoaderSmall;
