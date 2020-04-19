import React from 'react';
import classNames from 'classnames';

const Card = ({
  colorMode = 'light',
  elevation = 1,
  className,
  children,
  ...rest
}) => (
  <div
    className={classNames(
      'card',
      `${colorMode}:card-elevation-${elevation}`,
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Card;
