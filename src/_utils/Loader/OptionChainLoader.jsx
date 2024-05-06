import ContentLoader from 'react-content-loader';
import React from 'react';

const OptionChainLoader = (props) => {
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const commonAttributes = {
    rx: '10',
    ry: '10',
    width: '85',
    height: '19',
  };

  const generateRows = () => {
    const numberOfRows = 40;
    const numberOfCols = 18;
    const rowSpacing = 50;
    const colSpacing = 100;
    const startX = 10;
    const startY = 25;
    const rows = [];

    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfCols; j++) {
        const x = startX + j * colSpacing;
        const y = startY + i * rowSpacing;
        rows.push({ x, y });
      }
    }

    return rows;
  };

  const rows = generateRows();
  return (
    <ContentLoader
      width={screenWidth}
      height={screenHeight}
      viewBox={`0 0 ${screenWidth} ${screenHeight}`}
      backgroundColor="#f6f6ef"
      foregroundColor="#e8e8e3"
      {...props}
    >
      {rows.map((row, index) => (
        <rect key={index} {...commonAttributes} x={row.x} y={row.y} />
      ))}
    </ContentLoader>
  );
};

OptionChainLoader.metadata = {
  name: 'Shaheer Ali',
  github: 'itsmeshaheerali',
  description:
    'This loader exactly fit inside your bootrstrap card component no override happens like existing DataTable Loader',
  filename: 'BootstrapCardDataTable',
};

export default OptionChainLoader;
