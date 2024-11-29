"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import EventCard from "@/components/ui/eventCard";
import { Events } from "@/config/events";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

const Trending = () => {
  return (
    <section>
      <p className="font-mono uppercase text-sm">
        Trending
      </p>

      <Carousel
        opts={{ loop: true }}
        plugins={[
          AutoScroll({
            startDelay: 0,
            speed: 1,
            active: true,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {Events.map((_, index) => (
            <CarouselItem className="basis-auto" key={index}>
              <EventCard event={_} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default Trending;
