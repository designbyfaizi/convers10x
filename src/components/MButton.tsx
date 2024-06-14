import React, { ReactNode } from "react";

function MButton({ children }: { children: ReactNode }) {
  return (
    <button className="btn-23">
      <span className="text">{children}</span>
      <span className="marquee">{children}</span>
    </button>
  );
}

export default MButton;
