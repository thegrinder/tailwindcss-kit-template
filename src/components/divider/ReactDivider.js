import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Divider = ({ className, ...rest }) => {
  const [colorMode] = useColorMode();
  return (
    <span
      className={classNames('divider', `${colorMode}:divider`, className)}
      {...rest}
    />
  );
};

export default Divider;
