import Link from "next/link";
import React from "react";
import HeaderLogo from "../../ui/logo";
import { getSession } from "@/lib/session";
import { Button } from "@/public/button";
import { SearchIcon } from "lucide-react";
import AppButton from "../AppButton/AppButton";
const AppBar = async () => {
  const session = await getSession();

  return (
    <div className="p-4  flex gap-3 bg-gradient-to-br align-middle items-center  text-black">
      <HeaderLogo />

      <div className="flex items-center gap-4 ml-auto">
        <Link href={"/dashboard"} className="text-lg">
          Browse events
        </Link>
        <Link href={"/dashboard"} className="text-lg">
          About
        </Link>
        <Link href={"/dashboard"} className="text-lg">
          Careers
        </Link>
        <Link href={"/dashboard"} className="text-lg">
          Help Center
        </Link>
        {!session || !session.user ? (
          <>
            <Link href={"/auth/signin"} className="text-lg">
              Log in
            </Link>
          </>
        ) : (
          <>
            <p>{session.user.name}</p>
            <Link href={"/profile"} className="text-lg">
              Profile
            </Link>
            <a href={"/api/auth/signout"}>Sign Out</a>
          </>
        )}
        <Button
          size={"icon"}
          className="rounded-full  mx-1"
        >
          <SearchIcon size={18} />
        </Button>
        <Link href={"/dashboard"}>
          <AppButton />
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
