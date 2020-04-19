import React from 'react';
import classNames from 'classnames';

const Button = ({
  size = 'md',
  variant = 'primary',
  emphasis = 'medium',
  colorMode = 'light',
  square = false,
  className,
  children,
  iconStart,
  iconEnd,
  ...rest
}) => (
  <button
    className={classNames(
      'btn',
      `${colorMode}:btn-variant-${variant}--${emphasis}`,
      square ? `btn-square-size-${size}` : `btn-size-${size}`,
      className
    )}
    {...rest}
  >
    {iconStart && <span className="dib leading-0 mr-2">{iconStart}</span>}
    {square ? <span className="leading-0">{children}</span> : children}
    {iconEnd && <span className="dib leading-0 ml-2">{iconEnd}</span>}
  </button>
);

export default Button;