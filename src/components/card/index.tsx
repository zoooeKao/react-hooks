import { UseTheme } from '../custom-hook/ThemeProvider';

interface CardProps {
  title: string;
  price: number;
}

export const Card = ({ title, price }: CardProps) => {
  const { theme } = UseTheme();

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
      } rounded-lg border border-gray-300 p-4 text-center shadow-md `}
    >
      <h2 className="mb-2 text-lg font-bold">{title}</h2>
      <p className="text-xl text-gray-800">${price}</p>
    </div>
  );
};
