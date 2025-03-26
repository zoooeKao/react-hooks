import { useEffect, useRef, useState } from 'react';

export const UseEffectLifeCycle = () => {
  const [text, setText] = useState('a');
  const renderCount = useRef(0);

  // 每次渲染時增加計數
  renderCount.current += 1;

  useEffect(() => {
    function onTimeout() {
      console.log(`⏰ ${text} (render #${renderCount.current})`);
    }

    const timeoutId = setTimeout(onTimeout, 3000);
    console.log(`🔵 Render #${renderCount.current}: Schedule "${text}" log, timeoutId:`, timeoutId);

    return () => {
      console.log(
        `🟡 Cleanup from render #${renderCount.current}: Cancel "${text}" log, timeoutId:`,
        timeoutId
      );
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{' '}
        <input
          className="border-1 border border-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <h1>
        {text} (render #{renderCount.current})
      </h1>
    </>
  );
};
