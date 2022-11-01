import React from 'react';
import ChildC from './ChildC';
import { data1, data2 } from './ContextApiMultiple';

export default function ChildB() {
  return (
    <div>
      <h1>Child B Component</h1>

      <data1.Consumer>
        {(data) => {
          return (
            <data2.Consumer>
              {(message) => {
                return (
                  <div>
                    <h1>
                      Name:{data?.name} ,Age: {data?.age}
                    </h1>
                    <p>
                      {' '}
                      Message: {message?.text}, Size: {message?.size}
                    </p>
                  </div>
                );
              }}
            </data2.Consumer>
          );
        }}
      </data1.Consumer>
      <ChildC />
    </div>
  );
}
