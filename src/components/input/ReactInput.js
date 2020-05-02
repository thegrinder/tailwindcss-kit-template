import React from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';

const Input = ({
  valid = false,
  invalid = false,
  disabled = false,
  startIcon,
  endIcon,
  className,
  placeholder,
}) => {
  const [colorMode] = useColorMode();
  return (
    <div className={classNames('relative', className)}>
      {(startIcon || endIcon) && (
        <span
          className={classNames(
            'absolute',
            'inset-y-0',
            'flex',
            'items-center',
            'justify-center',
            'w-10',
            `${colorMode}:text-neutral-600`,
            {
              'left-0': !!startIcon,
              'right-0': !!endIcon,
            }
          )}
        >
          {startIcon || endIcon}
        </span>
      )}
      <input
        disabled={disabled}
        className={classNames({
          input: true,
          'pl-8': !!startIcon,
          'pr-8': !!endIcon,
          [`${colorMode}:input`]: true,
          [`${colorMode}:input-valid`]: valid,
          [`${colorMode}:input-invalid`]: invalid,
        })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
