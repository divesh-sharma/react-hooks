import React,{createContext} from "react";

const data1 = createContext();
const data2 = createContext();

const user = {
  name:"Johnson",
  age:26
};

const message={
  text:"hello this message from context api provider multiple",
  size:200
};

function ContextApiMultipleProvider(props){
  return <data1.Provider value={user}>
    <data2.Provider value={message}>
      {props?.children}
    </data2.Provider>
  </data1.Provider>
}

export {data1,data2,ContextApiMultipleProvider};