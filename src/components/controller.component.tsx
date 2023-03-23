import * as React from 'react';

interface ButtonComponentProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const ControllerButtonComponent: React.FC<ButtonComponentProps> = ({ onClick, children }) => {
  return (<>
    <button
      className='bg-blue-600 border-2 p-2 border-blue-900 rounded focus:ring-blue-500 focus:border-blue-500 text-blue-200 w-full'
      onClick={onClick}
    >{children}</button>
  </>);
};
