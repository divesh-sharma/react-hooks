import React from 'react';
import { data } from './ContextApi';

export default function ChildC() {
  return (
    <div>
      <data.Consumer>
        {(data) => {
          return <p>Hi {data}</p>;
        }}
      </data.Consumer>
    </div>
  );
}
