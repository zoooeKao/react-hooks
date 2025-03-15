import { useEffect, useRef, useState } from 'react';
import { Card } from '../card';

interface Product {
  title: string;
  price: number;
}

export const Carousel = () => {
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const refDom = useRef<HTMLInputElement | null>(null);
  const refValue = useRef(2);

  refValue.current += 1;
  console.log('refValue', refValue.current); //=>3

  const getAllProduct = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://dummyjson.com/products?auth=0&limit=30');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.products || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  // ref.current.value = 'test';

  useEffect(() => {
    getAllProduct().then((products) => {
      setAllProduct(products);
    });

    if (refDom.current) refDom.current.value = 'test';
  }, []);

  // 小心 infinite loop
  useEffect(() => {
    if (allProduct.length > 0) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % allProduct.length);
      }, 1000);

      // cleanFn 執行時機
      // 1. 元件 unmounted
      // 2. 依賴項更動時會先執行上一次 effect 的 cleanFn [https://react.dev/learn/synchronizing-with-effects#fetching-data]
      return () => {
        clearInterval(intervalId);
      };
    }
    // 依賴項
    // 1. 不需要放 ref 和 useState 因為它們是穩定的 [https://react.dev/learn/synchronizing-with-effects#why-was-the-ref-omitted-from-the-dependency-array]
    // 2. 放的通常是 props 和 state。
  }, [allProduct]);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {allProduct.map(({ title, price }, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card title={title} price={price} />
            </div>
          ))}
        </div>
      </div>

      <div>useRef</div>
      <input ref={refDom} type="text" className="bg-yellow-500 pl-3" />
    </>
  );
};
