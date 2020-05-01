import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Input = ({
  valid = false,
  invalid = false,
  disabled = false,
  className,
  placeholder,
}) => {
  const [colorMode] = useColorMode();
  return (
    <input
      disabled={disabled}
      className={classNames({
        input: true,
        [className]: true,
        [`${colorMode}:input`]: true,
        [`${colorMode}:input-valid`]: valid,
        [`${colorMode}:input-invalid`]: invalid,
      })}
      placeholder={placeholder}
    />
  );
};

export default Input;
