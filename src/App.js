import React from 'react';
import './style.css';
import { ContextApiProducer } from './ContextApi';
import ChildA from './ChildA';

export default function App() {
  return (
    <div>
      <div>
        <h1>Context Api Example 1 with single data</h1>
        <ContextApiProducer>
          <ChildA />
        </ContextApiProducer>
      </div>
    </div>
  );
}
