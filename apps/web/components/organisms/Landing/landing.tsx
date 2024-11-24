import PageHeroLeft from "@/components/molecules/PageHero/pageHeroLeft";
import PageHeroRight from "@/components/molecules/PageHero/PageHeroRight";
import Trending from "@/components/molecules/Trending/Trending";
import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-12 gap-y-0">
        <PageHeroLeft />
        <PageHeroRight />
      </div>
      <Trending />
    </div>
  );
}
