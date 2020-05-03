import React from 'react';
import OutlinedLabel from '../outlined-label/ReactOutlinedLabel';
import Checkbox from './ReactCheckbox';

const OutlinedCheckbox = ({
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
    <Checkbox
      checked={checked}
      valid={valid}
      invalid={invalid}
      disabled={disabled}
      id={name}
    />
  </OutlinedLabel>
);

export default OutlinedCheckbox;
