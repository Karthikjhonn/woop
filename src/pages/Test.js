import React, { useContext, useState } from "react";
import { CountContext } from "../context/ProductCountContext";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  console.log("main component");
  const [state, setState] = useState({
    name: "tester",
    age: 12,
    loader: true,
  });

  const handelState = () => {
    setState({ ...state, age: 22, loader: !state.loader });
  };
  // const {
  //   state: stateValue,
  //   test,
  //   dispatch,
  //   setTest,
  // } = useContext(CountContext);
  // console.log(stateValue.count);
  // console.log(test);
  return (
    <div className="p-4">
      <p onClick={() => navigate("/")}>home</p>
      <div className="flex gap-2">
        <span>{state.name}</span>
        <span>{state.age}</span> <span>{state.loader ? "true" : "false"}</span>{" "}
      </div>
      <div className="flex gap-4">
        <button onClick={handelState}>click</button>
        {/* <button
          onClick={() => {
            dispatch("INCREMENT");
          }}
        >
          +
        </button> */}
      </div>
      <hr></hr>
      {/* <div>{stateValue.count}</div>
      <div>{test}</div> */}
      <hr></hr>
      <Example />
      <Example2 />
    </div>
  );
}

export default Test;

function Example() {
  const {
    state: stateValue,
    test,
    dispatch,
    setTest,
  } = useContext(CountContext);
  console.log("example component");
  return (
    <div>
      <p> example</p>
      <div className="flex gap-6">
        <button
          onClick={() => {
            setTest("INCREMENT");
          }}
        >
          set test
        </button>
        <button
          onClick={() => {
            dispatch("INCREMENT");
          }}
        >
          increment
        </button>
      </div>
    </div>
  );
}
function Example2() {
  const {
    state: stateValue,
    test,
    dispatch,
    setTest,
  } = useContext(CountContext);
  console.log("example component2");
  return (
    <div>
      <p>example2</p>
      <div className="flex gap-6">
        <button
          onClick={() => {
            setTest("INCREMENT");
          }}
        >
          set test
        </button>
      </div>
    </div>
  );
}
