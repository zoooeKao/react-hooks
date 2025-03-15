import { useState } from 'react';
import { Carousel } from './components/carousel';
import { Navbar } from './components/navbar';

// 元件 re-render 的時機
// 1. state 改變時
// 2. props 改變時
function App(): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="App min-h-screen min-w-[320px] px-4 text-center ">
      <Navbar
        toggleTheme={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}
      />
      <Carousel theme={theme} />
    </div>
  );
}

export default App;
