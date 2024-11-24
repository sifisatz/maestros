import { Button } from "@/public/button";
import React from "react";
import AppButton from "../AppButton/AppButton";

export default function PageHeroLeft() {
  return (
    <div className="md:order-1 sm:order-2 flex ">
      <div className="flex flex-col justify-end gap-4">
        <h1 className=" text-8xl leading-11 font-foggy uppercase">
          Find more of the events you love
        </h1>
        <p className="text-xl">
          Incredible live shows. Upfront pricing. Relevant
          recommendations. We make going out easy.
        </p>
        <AppButton />
      </div>
    </div>
  );
}
