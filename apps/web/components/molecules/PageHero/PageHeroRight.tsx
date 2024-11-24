import React from "react";

const PageHeroRight = () => {
  return (
    <div className="sm:order-1">
      <div className="flex justify-end overflow-hidden rounded-md">
        <div className="max-h-[60vh] w-full">
          <div className="relative text-0 leading-none">
            <video
              className="w-auto h-calc-videoCustom max-h-960"
              poster="https://images.prismic.io/dicewebsite/9e11eb0e-8168-46dd-ba14-863fedf0179d_homepage+vid+thumb_4x5_2023_2.png"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              preload="none"
            >
              <source
                src="https://stream.mux.com/Pljp3FQq91tnYt1Qojr6lyVxlar8ZKSKlbBo6brAYGQ.m3u8"
                type="application/x-mpegURL"
              />
              <source
                src="https://stream.mux.com/Pljp3FQq91tnYt1Qojr6lyVxlar8ZKSKlbBo6brAYGQ/capped-1080p.mp4"
                type="video/mp4"
              />
            </video>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeroRight;
