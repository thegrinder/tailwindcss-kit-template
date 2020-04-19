import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const LoadingBar = ({ className, ...rest }) => {
  const [colorMode] = useColorMode();
  return (
    <span
      className={classNames(
        'loading-bar',
        `${colorMode}:loading-bar`,
        className
      )}
      {...rest}
    />
  );
};

export default LoadingBar;
