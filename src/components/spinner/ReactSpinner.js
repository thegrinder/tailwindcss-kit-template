import React from 'react';
import classNames from 'classnames';

const Spinner = ({ size = 'md', ...rest }) => (
  <span className={classNames('spinner', `spinner-size-${size}`)} {...rest} />
);

export default Spinner;
