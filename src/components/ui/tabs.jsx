import React from "react";

export function Tabs({ defaultValue, children, className }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, children }) {
  return <button className="px-4 py-2 border rounded">{children}</button>;
}

export function TabsContent({ value, children }) {
  return <div className="mt-4">{children}</div>;
}