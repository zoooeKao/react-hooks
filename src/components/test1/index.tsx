import { useEffect, useState } from 'react';

interface Arr {
  name: string;
  age: number;
}

export const Test1 = () => {
  const arr: Arr[] = [
    { name: 'a', age: 1 },
    { name: 'b', age: 2 },
    { name: 'c', age: 3 },
  ];
  const [arrState, setArrState] = useState<Arr[]>(arr);

  useEffect(() => {
    setTimeout(() => {
      setArrState((data) => {
        data[0] = {
          name: 'test',
          age: 18,
        };

        return data;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    const date = new Date();
    console.log('update', date);
  }, [arrState]);

  return (
    <>
      <h2 className="mt-8 pl-3 text-4xl">object type</h2>
      {arrState.map(({ name, age }) => (
        <div key={name}>
          <div>{`name: ${name}, age: ${age}`}</div>
        </div>
      ))}
    </>
  );
};

const arr = [
  { name: 'a', age: 1 },
  { name: 'b', age: 2 },
  { name: 'c', age: 3 },
];
const arrDuplicate = arr;
arrDuplicate[0] = { name: 'aa', age: 11 };
Object.is(arr, arrDuplicate); //=> true
const deepArr = JSON.parse(JSON.stringify(arr));
Object.is(arr, deepArr); //=> false
