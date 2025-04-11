import { useState, useEffect } from "react";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const slides = [
  {
    src: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    src: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    src: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    src: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

export default function LightboxComponent() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const plugins = isMobile ? [] : [Fullscreen, Slideshow, Thumbnails];

  return (
    <div className="xs:max-w-[33.75rem] lg:max-w-[27.8125rem]">
      <div className="relative sm:overflow-hidden sm:rounded-2xl">
        <img
          src={slides[index].src}
          alt={`Product ${index + 1}`}
          className="w-full cursor-pointer sm:rounded-2xl"
          onClick={() => setOpen(true)}
        />

        <button
          className="absolute top-1/2 left-2 flex size-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white shadow sm:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setIndex((prev) => (prev - 1 + slides.length) % slides.length);
          }}
        >
          <img src={previous} alt="" />
        </button>

        <button
          className="absolute top-1/2 right-2 flex size-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white shadow sm:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setIndex((prev) => (prev + 1) % slides.length);
          }}
        >
          <img src={next} alt="" />
        </button>
      </div>

      {!isMobile && (
        <div className="mt-4 hidden justify-between gap-4 sm:flex">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.thumbnail}
              alt={`Thumbnail ${i + 1}`}
              className={`xs:size-[5.5rem] size-20 cursor-pointer rounded-lg border-2 ${
                i === index
                  ? "border-orange-500 opacity-70"
                  : "border-transparent"
              } hover:opacity-70`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={plugins}
        thumbnails={{ showToggle: true }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
        render={{
          slide: ({ slide }) => (
            <img
              src={slide.src}
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "1rem",
                objectFit: "contain",
              }}
            />
          ),
        }}
      />
    </div>
  );
}
