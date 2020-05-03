import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Textarea = ({
  valid = false,
  invalid = false,
  disabled = false,
  className,
  placeholder,
}) => {
  const [colorMode] = useColorMode();
  return (
    <textarea
      disabled={disabled}
      className={classNames({
        textarea: true,
        [className]: true,
        [`${colorMode}:input-normal`]: !valid && !invalid,
        [`${colorMode}:input-valid`]: valid,
        [`${colorMode}:input-invalid`]: invalid,
      })}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
