'use client';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

export default function SearchBar({
  placeholder = 'Search...',
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full max-w-sm p-2">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:text-black focus:ring-[var(--lilac)] focus:shadow-[0_0_15px_var(--dark-purple)] transition bg-[var(--off-white)] text-sm placeholder-gray-500 transition"
      />
    </div>
  );
}
