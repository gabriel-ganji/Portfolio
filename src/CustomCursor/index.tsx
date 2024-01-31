import React, { useEffect, useState } from 'react';
import "./style.css";

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });
      drawLine(x, y);
    };

    const drawLine = (x: number, y: number) => {
      const line = document.createElement('div');
      line.style.position = 'fixed';
      line.style.left = `${x}px`;
      line.style.top = `${y}px`;
      line.style.width = '1.5rem';
      line.style.height = '1.5rem';
      line.style.backgroundColor = 'var(--blue-wave)'; // Red color with transparency
      line.style.borderRadius = '50%';
      line.style.pointerEvents = 'none';
      line.style.zIndex = '9998'; // Lower zIndex to appear behind the cursor
      document.body.appendChild(line);

      // Remove the line after a short delay (you can adjust the delay as needed)
      setTimeout(() => {
        document.body.removeChild(line);
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      style={{
        position: 'fixed',
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: 'var(--blue-wave)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
      }}
    ></div>
  );
};

export default CustomCursor;
