import { forwardRef, useImperativeHandle, useState } from 'react';

// 定義 ref 能暴露的方法
export type ChildRef = {
  increment: () => void;
  reset: () => void;
};

export const Child = forwardRef<ChildRef>((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment: () => setCount((prev) => prev + 1),
    reset: () => setCount(0),
  }));

  return <div>計數: {count}</div>;
});

Child.displayName = 'ChildComponent'; // 避免警告
