import * as React from 'react';

interface ButtonComponentProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick, disabled }) => {
  return (<>
    <button
      className='bg-blue-600 border-2 p-2 border-blue-900 rounded focus:ring-blue-500 focus:border-blue-500 text-blue-200'
      onClick={onClick}
      disabled={disabled}
    >Generate</button>
  </>);
};
