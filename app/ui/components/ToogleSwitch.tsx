"use client"
import { useState } from 'react';

const ToogleSwitch = ({ label  } : { label : string } ) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="flex items-center cursor-pointer gap-3">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div className={`
          w-14 h-7 
          rounded-full 
          transition-colors duration-300 ease-in-out
          ${isChecked ? 'bg-blue-700' : 'bg-blue-400'}
        `}>
          <div className={`
            absolute top-1 left-1
            w-5 h-5 
            bg-white 
            rounded-full 
            shadow-md
            transition-transform duration-300 ease-in-out
            ${isChecked ? 'translate-x-7' : 'translate-x-0'}
          `}/>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-400">
        {label}
      </span>
    </label>
  );
};

export default ToogleSwitch;