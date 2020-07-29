import { useState, useRef, useEffect } from 'react';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const searchInput = useRef(null);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${searchValue}`;
    window.location.href = searchUrl;
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <form onSubmit={e => handleSubmit(e)} className="flex w-full max-w-xl px-4">
      <div className="w-full">
        <label htmlFor="search">
          <span className="sr-only">Search</span>
          <div className="relative flex">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              onChange={handleChange}
              value={searchValue}
              ref={searchInput}
              className="w-full py-3 pl-12 pr-5 text-xl text-gray-100 placeholder-gray-400 bg-gray-800 bg-opacity-50 border-2 border-r-0 border-gray-600 rounded rounded-r-none outline-none focus:border-orange-up focus:shadow-none"
              placeholder="I'm looking for..."
            />
          </div>
        </label>
      </div>
      <button
        className="px-6 py-3 text-xl font-bold text-gray-900 rounded rounded-l-none bg-orange-up hover:bg-yellow-up"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
