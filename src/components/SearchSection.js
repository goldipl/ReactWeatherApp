import React from 'react';

const SearchSection = ({ value, onChange, onSubmit, loading }) => {
  return (
    <div className="search-section">
      <div className="header-content">
        <h1 className="app-title">Weather</h1>
        <p className="app-subtitle">Get current weather anywhere in the world</p>
      </div>

      <form onSubmit={onSubmit} className="search-form">
        <div className="input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search city..."
            value={value}
            onChange={onChange}
            disabled={loading}
          />
          <button
            type="submit"
            className={`search-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loader"></span>
                Searching...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                Search
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;