import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Toggle = ({ children, className, ...rest }) => {
  const [colorMode] = useColorMode();
  return (
    <label
      className={classNames(
        'flex',
        'items-center',
        'justify-between',
        className
      )}
    >
      <span className="pr-4">{children}</span>
      <input
        type="checkbox"
        className={classNames('toggle-input', `${colorMode}:toggle-input`)}
        {...rest}
      />
      <span className="toggle-slider" />
    </label>
  );
};

export default Toggle;
