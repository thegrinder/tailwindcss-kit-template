import React from 'react';
import classNames from 'classnames';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useColorMode } from 'theme-ui';

const Link = ({ variant = 'primary', className, children, ...rest }) => {
  const [colorMode] = useColorMode();
  return (
    <a
      className={classNames(
        'link',
        `${colorMode}:link-variant-${variant}`,
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
