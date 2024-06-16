import React, { createContext, useReducer, useState } from "react";
export const CountContext = createContext(null);
function ProductCountContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [test,setTest]=useState('test')
  return (
    <CountContext.Provider value={{ state,test, dispatch ,setTest }}>
      {children}
    </CountContext.Provider>
  );
}

const initialState = {
  count: 0,
  updateAnimation: false,
};
const reducer = (state, action) => {
  // console.log("state", state);
  switch (action) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        updateAnimation: true,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        updateAnimation: true,
      };
    case "UPDATE_ANIMATION":
      return {
        ...state,
        updateAnimation: false,
      };
    default:
      return state;
  }
};

export default ProductCountContext;
