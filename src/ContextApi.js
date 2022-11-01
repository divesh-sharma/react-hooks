import React, { createContext } from 'react';

const data = createContext();
const name = 'Namaste React With Context Api';
function ContextApiProvider(props) {
  return <data.Provider value={name}>{props.children}</data.Provider>;
}

export { data, ContextApiProvider };
