import React from "react";

export const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);
