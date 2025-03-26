import { useTheme } from '../custom-hook/ThemeProvider';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={toggleTheme}
          className="rounded border border-gray-300 px-4 py-2.5 transition-colors duration-200"
        >
          主題
        </button>
      </div>
    </>
  );
};
