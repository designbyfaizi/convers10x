import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Button({
  _className,
  children,
  props,
}: {
  _className?: string;
  children: ReactNode;
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}) {
  return (
    <button className={cn("px-4 py-2 rounded-full text-white bg-accent hover:bg-accent/80 backdrop-blur-xl font-black uppercase border-[1px] border-accent/70", _className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
