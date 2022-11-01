import React from 'react';
import { data } from './ContextApi';
import UseContext from "./UseContext";

export default function ChildC() {
  return (
    <div>
      <data.Consumer>
        {(data) => {
          return <p>Hi {data}</p>;
        }}
      </data.Consumer>
      <UseContext />
    </div>
  );
}
