import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Card = ({ elevation = 1, className, children, ...rest }) => {
  const [colorMode] = useColorMode();
  return (
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
};

export default Card;
