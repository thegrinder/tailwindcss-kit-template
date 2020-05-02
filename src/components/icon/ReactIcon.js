import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Icon = ({ variant = 'primary', className, children }) => {
  const [colorMode] = useColorMode();
  return (
    <span
      className={classNames('icon', `${colorMode}:icon-${variant}`, className)}
    >
      {children}
    </span>
  );
};

export default Icon;
