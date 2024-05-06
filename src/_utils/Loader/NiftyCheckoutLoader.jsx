import React from 'react'
import ContentLoader from 'react-content-loader'

const NiftyCheckoutLoader = ({ ...rest }) => (
  <ContentLoader height="400" width="300" viewBox="0 0 265 230" {...rest}>
    <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
    <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
  </ContentLoader>
)

NiftyCheckoutLoader.metadata = {
  name: 'Didier Munezero',
  github: 'didiermunezero',
  description: 'Grid for content of head and body',
  filename: 'NiftyCheckoutLoader',
}

export default NiftyCheckoutLoader