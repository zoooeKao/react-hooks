// Define the shape of our context value
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
