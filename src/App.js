import React from 'react';
import './style.css';
import { ContextApiProvider } from './ContextApi';
import ChildA from './ChildA';
import { ContextApiMultipleProvider } from './ContextApiMultiple';

export default function App() {
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
    </div>
  );
}
