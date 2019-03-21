import React from 'react';
import PropTypes from 'prop-types';
import LoaderContainer from './LoaderContainer';
import LoaderDiv from './LoaderDiv';


const Loader = () => {

  return (
    <LoaderContainer>
      <LoaderDiv position={0} />
      <LoaderDiv position={1} />
      <LoaderDiv position={2} />
      <LoaderDiv position={3} />
      <LoaderDiv position={4} />
      <LoaderDiv position={5} />
      <LoaderDiv position={6} />
      <LoaderDiv position={7} />
    </LoaderContainer>
  )

}

export default Loader;
