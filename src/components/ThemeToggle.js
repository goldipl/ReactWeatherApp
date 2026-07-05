import React from 'react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode">
      {isDark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.657-7.657l-4.242 4.242m-6.728 6.728l-4.242 4.242m0-19.798l4.242 4.242m6.728 6.728l4.242 4.242"></path>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;