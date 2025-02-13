import React, { ReactNode } from "react";

export default function TextArea({placeholder} : {placeholder : string}): ReactNode {
  return (
    <div className="w-full">
      <textarea
        id=""
        className="w-full px-6 py-3 focus:outline-none focus:ring-0 focus:border-none bg-secondary rounded-lg"
        placeholder={placeholder}
      />
    </div>
  );
}
