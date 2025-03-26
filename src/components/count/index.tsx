import { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

const countReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
};

export const Count = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  const decrease = () => {
    dispatch({ type: 'DECREASE' });
  };

  const increase = () => {
    dispatch({ type: 'INCREASE' });
  };

  return (
    <>
      <div className="mt-10">
        <h2 className="mt-8 pl-3 text-4xl">useReducer</h2>
        <div className="align-center flex justify-center">
          <button onClick={decrease} className="h-10 w-10 border border-black text-lg">
            -
          </button>
          <span className="mx-4 text-lg">{count}</span>
          <button onClick={increase} className="h-10 w-10 border border-black text-lg">
            +
          </button>
        </div>
      </div>
    </>
  );
};
