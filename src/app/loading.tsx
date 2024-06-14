import React from "react";

function loading() {
  return (
    <div className="group">
      <div className="backdrop backdrop-blur-2xl fixed flex items-center justify-center w-screen h-dvh bg-neutral-950/70 z-[70]">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    </div>
  );
}

export default loading;
