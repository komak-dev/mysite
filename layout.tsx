import React from "react";

export default function ProductionLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div className="max-w-screen-md my-0 mx-auto px-6">{children}</div>;
}
