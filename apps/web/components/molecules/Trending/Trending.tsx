import EventCard from "@/components/ui/eventCard";
import Image from "next/image";
import React from "react";

const Trending = () => {
  return (
    <section>
      <p className="font-mono">Trending</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="overflow-auto whitespace-normal ">
          <div className="inline-block w-full overflow-hidden">
            <div className="relative mb-4">
              <Image
                src="/images/img-1.jpg?height=200&width=350"
                alt="Card image"
                layout="fill"
                objectFit="cover"
                className=" w-full block h-auto object-cover rounded-t-lg"
              />
              
            </div>
          </div>
        </div>

    
        <EventCard />
      </div>
      <EventCard />
    </section>
  );
};
export default Trending;
