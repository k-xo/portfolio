import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ ...props }) => {
  return (
    <button type="button" {...props}>
      Button
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
