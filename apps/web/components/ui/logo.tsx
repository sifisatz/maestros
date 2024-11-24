import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link className="font-black text-3xl" href={"/"}>
      Dice
    </Link>
  );
};

export default HeaderLogo;
