import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Checkbox = ({
  valid = false,
  invalid = false,
  disabled = false,
  className,
  checked,
}) => {
  const [colorMode] = useColorMode();
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      className={classNames({
        checkbox: true,
        [className]: !!className,
        [`${colorMode}:checkbox-normal`]: !valid && !invalid,
        [`${colorMode}:checkbox-valid`]: valid,
        [`${colorMode}:checkbox-invalid`]: invalid,
      })}
    />
  );
};

export default Checkbox;
