import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "../../public/button";
import Image from "next/legacy/image";
import { Event } from "@/config/events";

interface EventCardProps {
  event: Event;
}
export default function EventCard({
  event,
}: EventCardProps) {
  return (
    <Card className="w-[350px] cursor-pointer">
      <CardHeader>
        <div className="relative  w-full h-[200px] mb-4">
          <Image
            src={event.imgSrc}
            alt="Card image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-yellow-500">{event.date}</p>
        <p>{event.location}</p>
        <p>€{event.price}</p>
      </CardContent>
    </Card>
  );
}
