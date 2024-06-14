"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function SiteLogo() {
  const [light, setLight] = useState(true);

  const logoName = light ? "/Conversion_Dark.png" : "/Conversion_Light.png";

  return (
    <Link href="/">
      <Image
        onMouseEnter={() => setLight(false)}
        onMouseLeave={() => setLight(true)}
        src={logoName}
        alt={"Conversion 10X"}
        width={200}
        height={50}
        className="hover:scale-95 transition-transform duration-75 cursor-pointer rounded-full"
      />
    </Link>
  );
}

export default SiteLogo;
