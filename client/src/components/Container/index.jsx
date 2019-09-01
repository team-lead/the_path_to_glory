import React from 'react';
import { classes } from './style';

const Container = ({ children, containerClass }) => {
  const { container } = classes;
  console.log(containerClass);
  return <div className={`${container} ${containerClass}`}>{children}</div>;
};

export default Container;
