import { Carousel } from './components/carousel';
import { Count } from './components/count';
import { ThemeProvider } from './components/custom-hook/ThemeProvider';
import { Navbar } from './components/navbar';

// 元件 re-render 的時機
// 1. state 改變時
// 2. props 改變時
function App(): JSX.Element {
  return (
    <div className="App min-h-screen min-w-[320px] px-4 text-center ">
      <ThemeProvider>
        <Navbar />
        <Carousel />
        <Count />
      </ThemeProvider>
    </div>
  );
}

export default App;
