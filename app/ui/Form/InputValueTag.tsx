"use client"

import React, { useRef, useState, useEffect } from "react";


export default function InputValueTag() {
  const [tagValue, setTagValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current && 
        !containerRef.current.contains(event.target as Node) && 
        inputValue.trim() !== ""
      ) {
        setTagValue(prev => [...prev, inputValue.trim()]);
        setInputValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setTagValue(prev => [...prev, inputValue.trim()]);
      setInputValue("");
    }
    // Supprimer le dernier tag avec Backspace si l'input est vide
    if (e.key === 'Backspace' && inputValue === '' && tagValue.length > 0) {
      e.preventDefault();
      setTagValue(prev => prev.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTagValue(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div 
      ref={containerRef}
      className="w-full relative"
    >
      <div className="w-full px-6 py-3 bg-secondary rounded-lg flex flex-wrap gap-2 items-center ">
        {tagValue.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 rounded-md px-2 py-1 text-sm flex items-center gap-1"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="text-gray-200 hover:text-gray-700"
            >
              ×
            </button>
          </span>
        ))}
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          className="flex-1 min-w-[120px] focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
}