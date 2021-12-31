import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createOkAction,
  createGoodAction,
  createBadAction,
  resetCounts,
} from './reducer';

const App = () => {
  const dispatch = useDispatch();
  const goodCount = useSelector((state) => state.good);
  const okCount = useSelector((state) => state.ok);
  const badCount = useSelector((state) => state.bad);

  return (
    <div>
      <button onClick={() => dispatch(createGoodAction())}>good</button>
      <button onClick={() => dispatch(createOkAction())}>ok</button>
      <button onClick={() => dispatch(createBadAction())}>bad</button>
      <button onClick={() => dispatch(resetCounts())}>reset stats</button>
      <div>good: {goodCount}</div>
      <div>ok: {okCount}</div>
      <div>bad: {badCount}</div>
    </div>
  );
};

export default App;
