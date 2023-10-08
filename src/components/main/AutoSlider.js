import React, { useState, useEffect } from 'react';

function AutoSlider() {
  const initialItems = [1, 2, 3];
  const [items, setItems] = useState(initialItems);
  const delay = 2000; // 슬라이드 간의 딜레이(ms)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 배열의 마지막 요소를 배열의 처음에 추가하여 슬라이드합니다.
      const updatedItems = [items[items.length - 1], ...items.slice(0, items.length - 1)];
      setItems(updatedItems);
    }, delay);

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트되면 인터벌을 정리합니다.
    };
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AutoSlider;
