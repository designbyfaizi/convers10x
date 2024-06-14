import React from "react";
import { cn } from "@/lib/utils";
import SiteLogo from "./SiteLogo";

function Footer({ className }: { className: string }) {
  return (
    <footer
      className={cn(
        "p-6 bg-neutral-900/30 rounded-t-[48px] mt-auto",
        className
      )}
    >
      <div className="inner conversion-container flex flex-col items-center gap-4">
        <SiteLogo />
        <p>Copyright © 2024 Conversion 10x. | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
