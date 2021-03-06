import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const OutlinedLabel = ({
  disabled = false,
  valid = false,
  invalid = false,
  htmlFor,
  className,
  children,
  label,
}) => {
  const [colorMode] = useColorMode();
  return (
    <div className={classNames('outlined-label-wrapper', className)}>
      {children}
      <label
        htmlFor={htmlFor}
        className={classNames({
          'outlined-label': true,
          [`${colorMode}:outlined-label-normal`]:
            !disabled && !valid && !invalid,
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
