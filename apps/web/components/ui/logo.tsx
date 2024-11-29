import { Dices } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link
      className=" flex flex-row align-middle justify-center font-black text-3xl"
      href={"/"}
    >
      <Dices />
      Dice
    </Link>
  );
};

export default HeaderLogo;
