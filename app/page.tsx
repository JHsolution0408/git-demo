'use client';

import { useState } from 'react';

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '4px 12px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Hello Git!</div>
      <div>
        <p>Count: {count}</p>
        <button
          type="button"
          style={buttonStyle}
          onClick={handleClick}
        >
          Click to add count
        </button>
      </div>
    </>
  );
}
