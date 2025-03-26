import { useState } from 'react';
import { UseEffectLifeCycle } from './useEffectLifeCycle';

export const Test2 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2 className="mt-8 pl-3 text-4xl">useEffectLifeCycle</h2>
      <button className="border border-2 border-black" onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      {show && <UseEffectLifeCycle />}
    </>
  );
};
