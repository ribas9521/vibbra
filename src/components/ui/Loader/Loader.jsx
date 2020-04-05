import React from 'react';
import { loader } from '../../../assets';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
      }}
    >
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default Loader;
