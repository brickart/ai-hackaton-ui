import * as React from 'react';
import { Endpoint } from '~/hooks/response';

interface EndpointComponentProps {
  endpoint: Endpoint;
}

export const EndpointComponent: React.FC<EndpointComponentProps> = ({endpoint}) => {
  const [open, setOpen] = React.useState(false)
  
  if (endpoint.method === 'GET') {
    return (<>
      <div className="w-full rounded p-6 flex flex-col space-y-2 border-2 bg-green-700 border-green-900">
        <span className="text-stone-100">{endpoint.method} {endpoint.uri}</span>
        <span className="text-stone-100">{endpoint.description}</span>
      </div>
    </>)
  }
  if (endpoint.method === 'POST') {
    return (<>
      <div className="w-full rounded p-6 flex flex-col space-y-2 border-2 bg-blue-700 border-blue-900">
        <span className="text-stone-100">{endpoint.method} {endpoint.uri}</span>
        <span className="text-stone-100">{endpoint.description}</span>
      </div>
    </>)
  }
  if (endpoint.method === 'DELETE') {
    return (<>
      <div className="w-full rounded p-6 flex flex-col space-y-2 border-2 bg-red-700 border-red-900">
        <span className="text-stone-100">{endpoint.method} {endpoint.uri}</span>
        <span className="text-stone-100">{endpoint.description}</span>
      </div>
    </>)
  }
  if (endpoint.method === 'UPDATE') {
    return (<>
      <div className="w-full rounded p-6 flex flex-col space-y-2 border-2 bg-teal-700 border-teal-900">
        <span className="text-stone-100">{endpoint.method} {endpoint.uri}</span>
        <span className="text-stone-100">{endpoint.description}</span>
      </div>
    </>)
  }
  if (endpoint.method === 'PUT') {
    return (<>
      <div className="w-full rounded p-6 flex flex-col space-y-2 border-2 bg-yellow-700 border-yellow-900">
        <span className="text-stone-100">{endpoint.method} {endpoint.uri}</span>
        <span className="text-stone-100">{endpoint.description}</span>
      </div>
    </>)
  }
  return (<>
    <div className="w-full rounded p-6 bg-stone-300 flex flex-col space-y-2 border-2">
      <span className="text-stone-100">{endpoint.method} {endpoint.uri}</span>
      <span className="text-stone-100">{endpoint.description}</span>
    </div>
  </>);
};
