import PropTypes from 'prop-types';
import React from 'react';

YoutubeIframe.propTypes = {
  iframeStyle: PropTypes.string,
  width: ProptTypes.string,
  height: ProptTypes.string,
  src: ProptTypes.string,
  title: ProptTypes.string,
};

export default function YoutubeIframe(props) {
  const { iframeStyle, width, height, src, title } = props;
  return (
    <iframe
      style={iframeStyle}
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
