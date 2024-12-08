import React, { useState, useEffect, createContext } from 'react';

// Creating a context to manage the custom cursor
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  // State to track the cursor's position on the screen
  const [cursorPos, setCursorPos] = useState({
    x: 0, // Horizontal position
    y: 0, // Vertical position
  });

  // State to manage the background style of the cursor
  const [cursorBG, setCursorBG] = useState('default'); // Starts with the "default" style

  // useEffect to update cursor position as the user moves their mouse
  useEffect(() => {
    // Function that tracks the mouse position
    const move = (e) => {
      setCursorPos({
        x: e.clientX, // Get the X coordinate of the mouse
        y: e.clientY, // Get the Y coordinate of the mouse
      });
    };

    // Attach the event listener for mouse movement
    window.addEventListener('mousemove', move);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []); // Empty dependency array means this runs only once, like when the app starts

  // Variants for different cursor states
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16, // Position the cursor at the center of the pointer
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112', // Default dark color
    },
    text: {
      width: '150px', // Make the cursor larger
      height: '150px',
      x: cursorPos.x - 72, // Adjust the larger size to keep it centered
      y: cursorPos.y - 72,
      backgroundColor: '#fff', // White background for "text" style
      mixBlendMode: 'difference', // Creates a cool "inverted" effect
    },
  };

  // Function to switch the cursor to the "text" style (like when hovering over text)
  const mouseEnterHandler = () => {
    setCursorBG('text'); // Switch to the "text" variant
  };

  // Function to switch the cursor back to the default style
  const mouseLeaveHandler = () => {
    setCursorBG('default'); // Switch to the "default" variant
  };

  // Providing the cursor state and handlers to the rest of the app
  return (
    <CursorContext.Provider
      value={{
        cursorVariants, // The cursor styles based on the state
        cursorBG, // The current background state of the cursor
        mouseEnterHandler, // Function to trigger the "text" style
        mouseLeaveHandler, // Function to reset back to "default" style
      }}
    >
      {children} {/* This wraps the rest of the app, so everything inside can use the cursor context */}
    </CursorContext.Provider>
  );
};

export default CursorProvider;