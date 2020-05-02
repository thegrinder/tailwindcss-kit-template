import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const OutlinedLabel = ({
  disabled = false,
  valid = false,
  invalid = false,
  className,
  children,
  label,
}) => {
  const [colorMode] = useColorMode();
  return (
    <div className={classNames('outlined-label-wrapper', className)}>
      {children}
      <label
        className={classNames({
          'outlined-label': true,
          [`${colorMode}:outlined-label`]: true,
          [`${colorMode}:outlined-label-disabled`]: disabled,
          [`${colorMode}:outlined-label-valid`]: valid,
          [`${colorMode}:outlined-label-invalid`]: invalid,
        })}
      >
        {label}
      </label>
    </div>
  );
};

export default OutlinedLabel;
