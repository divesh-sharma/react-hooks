import React, { useState } from 'react';
import './style.css';
import { ContextApiProvider } from './ContextApi';
import ChildA from './ChildA';
import { ContextApiMultipleProvider } from './ContextApiMultiple';
import UseState from './UseState';
import LifeCycle from './LifeCycle';

export default function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <div>
        <h1>Context Api Example 1 with single data</h1>
        <ContextApiProvider>
          <ChildA />
        </ContextApiProvider>
      </div>

      <div>
        <h1>Context Api example 2 with multiple data</h1>
        <ContextApiMultipleProvider>
          <ChildA />
        </ContextApiMultipleProvider>
      </div>

      <div>
        <h1>Context Api example 2 with multiple data with use Context hooks</h1>
        <ContextApiMultipleProvider>
          <ChildA />
        </ContextApiMultipleProvider>
      </div>

      <div>
        <UseState />
      </div>

      {!flag ? (
        <div>
          <LifeCycle name="Divesh fjnkjn" />
        </div>
      ) : (
        ''
      )}
      <button onClick={() => setFlag(true)}>Toggle Flag : {flag}</button>
    </div>
  );
}
