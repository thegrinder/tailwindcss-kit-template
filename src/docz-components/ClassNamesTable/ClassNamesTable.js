import React, { Fragment } from 'react';
import classNames from 'classnames';
import { useColorMode } from 'theme-ui';
import { colors } from '../../colors';

export const ClassNamesTable = ({ data }) => {
  const [colorMode] = useColorMode();
  return (
    <div
      className="max-w-2xl overflow-auto mt-12 mb-24"
      style={{
        maxHeight: '500px',
        border: `1px solid ${colors[colorMode].neutral[100]}`,
      }}
    >
      <div
        className={classNames(
          'flex',
          'flex-row',
          'py-2',
          `${colorMode}:bg-neutral-50`
        )}
      >
        <div className="col col-5 px-4">
          <span
            className={classNames(`${colorMode}:text-neutral-700`, 'fw-700')}
          >
            Class
          </span>
        </div>
        <div className="col col-7 px-4">
          <span
            className={classNames(`${colorMode}:text-neutral-700`, 'fw-700')}
          >
            Properties
          </span>
        </div>
      </div>
      {Object.keys(data).map((className) => (
        <Fragment key={className}>
          <div className="flex flex-row py-2">
            <div className="col col-5 px-4">
              <span
                className={classNames(
                  `${colorMode}:text-neutral-600`,
                  'text-base'
                )}
              >
                .{className}
              </span>
            </div>
            <div className="col col-7 px-4">
              {data[className].map((property, index) => (
                <span
                  key={`${className}-${index}`}
                  className={classNames(
                    `${colorMode}:text-neutral-600`,
                    'text-base',
                    'db'
                  )}
                >
                  {property};
                </span>
              ))}
            </div>
          </div>
          <span className={classNames('divider', `${colorMode}:divider`)} />
        </Fragment>
      ))}
    </div>
  );
};
