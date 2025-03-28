export const ExposeChildMethod = ({ onTrigger }) => {
  return (
    <>
      <h2 className="mt-8 pl-3 text-4xl">ExposeChildMethod</h2>
      <button onClick={onTrigger} className="border-2 border-black">
        Call parent function
      </button>
    </>
  );
};
