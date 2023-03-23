import * as React from 'react';

interface InputComponentProps {
  onChange?: (e: any) => any;
}

export const InputComponent: React.FC<InputComponentProps> = ({onChange}) => {
  return (<>
    <input 
      className='bg-transparent w-96 text-white outline-0 rounded border-stone-500 border-2 p-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400' 
      placeholder="Enter link to project repository"
      onChange={onChange}
    />
  </>);
};
