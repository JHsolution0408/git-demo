'use client';

import { useState } from 'react';

const buttonStyle = {
  margin: '12px 8px 0 0',
  padding: '4px 12px',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}

export default function Home() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 0) {
      alert('Count cannot be less than 0');
      return;
    }

    setCount(count - 1);
  };


  return (
    <>
      <div>Hello Git! Current count is {count}</div>

      <div>
        <button
          type="button"
          style={buttonStyle}
          onClick={addCount}
        >
          Click to add count
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={decreaseCount}
        >
          Click to decrease count
        </button>
      </div>
    </>
  );
}
