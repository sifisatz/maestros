import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "../../public/button";
import Image from "next/image";

export default function EventCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="relative  w-full h-[200px] mb-4">
          <Image
            src="/images/img-1.jpg?height=200&width=350"
            alt="Card image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardTitle>
          Eleazaro - Grande figlio di p***a - Roma
        </CardTitle>

      </CardHeader>
      <CardContent>
        <p className="text-yellow-500">Fri, 29 Nov</p>
        <p>Hacienta</p>
        <p>€11.90</p>
      </CardContent>
      <CardFooter>
        <Button>Action Button</Button>
      </CardFooter>
    </Card>
  );
}
