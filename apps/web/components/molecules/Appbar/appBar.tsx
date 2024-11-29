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
        {!session || !session.user ? (
          <>
            <Link href={"/dashboard"} className="text-sm">
              Browse events
            </Link>
            <Link href={"/dashboard"} className="text-sm">
              About
            </Link>
            <Link href={"/dashboard"} className="text-sm">
              Help Center
            </Link>
            <Link href={"/auth/signin"} className="text-sm">
              Log in
            </Link>
          </>
        ) : (
          <>
            <Link href={"/dashboard"} className="text-sm">
              Picked for you
            </Link>
            <Link href={"/profile"} className="text-sm">
              Profile
            </Link>
            <a href={"/api/auth/signout"} className="text-sm">Sign out</a>
            <p>{session.user.name}</p>

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
