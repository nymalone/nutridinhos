import React from 'react';
import { Pricing, InfoSection } from '../../components';
import { homeObjTwo } from './Data';

function Play() {
  return (
    <>
      <Pricing  />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Play;
