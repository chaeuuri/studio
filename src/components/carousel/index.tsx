import React, { type JSX, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import type { EmblaOptionsType } from "embla-carousel";
import "./index.css";

type PropType = {
  slides: JSX.Element[];
  options?: EmblaOptionsType;
  slideHeight?: string;
  slideSpacing?: string;
  slideSize?: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    slideHeight = "334px",
    slideSpacing = "55px",
    slideSize = "267px",
  } = props;

  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  // CSS 변수를 동적으로 생성
  const emblaStyle = useMemo(
    () =>
      ({
        "--slide-height": slideHeight,
        "--slide-spacing": slideSpacing,
        "--slide-size": slideSize,
      } as React.CSSProperties),
    [slideHeight, slideSpacing, slideSize]
  );

  return (
    <div className="embla" style={emblaStyle}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{slide}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
