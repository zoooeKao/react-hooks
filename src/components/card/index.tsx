interface CardProps {
  title: string;
  price: number;
  theme: 'light' | 'dark';
}

export const Card = ({ title, price, theme }: CardProps) => {
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
