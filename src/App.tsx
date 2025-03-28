import { useEffect, useRef } from 'react';
import { Carousel } from './components/carousel';
import { Child } from './components/child';
import { Count } from './components/count';
import { ThemeProvider } from './components/custom-hook/ThemeProvider';
import { ExposeChildMethod } from './components/exposeChildMethod';
import { Navbar } from './components/navbar';
import { Test1 } from './components/test1';
import { Test2 } from './components/test2';

// 元件 re-render 的時機
// 1. state 改變時
// 2. props 改變時
function App(): JSX.Element {
  const childDom = useRef<ChildRef | null>(null);

  useEffect(() => {
    console.log(childDom.current);
    console.log(childDom.current?.increment());
  });

  const reset = () => {
    childDom.current?.reset();
  };

  return (
    <div className="App min-h-screen min-w-[320px] px-4 text-center ">
      <ThemeProvider>
        <Child ref={childDom} />
        <button onClick={reset}>reset</button>
        <button onClick={() => childDom.current?.increment()}>+</button>
        <Navbar />
        <Carousel />
        <Count />
        <Test1 />
        <Test2 />
        <ExposeChildMethod
          onTrigger={() => {
            alert('Parent got triggered by child!');
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
