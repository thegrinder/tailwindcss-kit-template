import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Radio = ({
  valid = false,
  invalid = false,
  disabled = false,
  className,
  checked,
  id,
}) => {
  const [colorMode] = useColorMode();
  return (
    <input
      id={id}
      type="radio"
      checked={checked}
      disabled={disabled}
      className={classNames({
        radio: true,
        [className]: !!className,
        [`${colorMode}:radio-normal`]: !valid && !invalid,
        [`${colorMode}:radio-valid`]: valid,
        [`${colorMode}:radio-invalid`]: invalid,
      })}
    />
  );
};

export default Radio;
