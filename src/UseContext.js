import React, { useContext } from 'react';
import { data1, data2 } from './ContextApiMultiple';

export default function UseContext() {
  const data = useContext(data1);
  const message = useContext(data2);
  return (
    <div>
      <h1>Data by useContext hook</h1>
      <p>
        {data?.name},{data?.age}
      </p>
      <p>
        {message?.text},{message?.size}
      </p>
    </div>
  );
}
