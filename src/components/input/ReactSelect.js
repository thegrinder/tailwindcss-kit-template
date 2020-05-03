import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Select = ({
  valid = false,
  invalid = false,
  disabled = false,
  className,
  children,
}) => {
  const [colorMode] = useColorMode();
  return (
    <select
      disabled={disabled}
      className={classNames({
        select: true,
        [className]: true,
        [`${colorMode}:input-normal`]: !valid && !invalid,
        [`${colorMode}:input-valid`]: valid,
        [`${colorMode}:input-invalid`]: invalid,
      })}
    >
      {children}
    </select>
  );
};

export default Select;
