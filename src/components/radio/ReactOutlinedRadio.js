import React from 'react';
import OutlinedLabel from '../outlined-label/ReactOutlinedLabel';
import Radio from './ReactRadio';

const OutlinedRadio = ({
  invalid = false,
  valid = false,
  disabled = false,
  checked,
  name,
  label,
  className,
}) => (
  <OutlinedLabel
    htmlFor={name}
    invalid={invalid}
    valid={valid}
    label={label}
    className={className}
    disabled={disabled}
  >
    <Radio
      checked={checked}
      valid={valid}
      invalid={invalid}
      disabled={disabled}
      id={name}
    />
  </OutlinedLabel>
);

export default OutlinedRadio;
