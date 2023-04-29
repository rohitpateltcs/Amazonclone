"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Poster = () => {
  return (
    <div className="">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/213/429/111/5bd31f6711946-wallpaper-preview.jpg"
            alt=""
            className="h-[500px]"
          />
        </div>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/371/371/613/laptop-cat-wallpaper-preview.jpg"
            alt=""
            className="h-[500px]"
          />
        </div>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/362/193/295/5bd35c821d939-wallpaper-preview.jpg"
            alt=""
            className="h-[500px]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Poster;
