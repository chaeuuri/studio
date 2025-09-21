import type { EmblaOptionsType } from "embla-carousel";
import logo from "./assets/title.svg";
import EmblaCarousel from "./components/carousel";
import { MorphingText } from "./components/text";
import { Clients } from "./meta/clients";
import { PlatForm, videoList, type IVideo } from "./meta/videos";
import { designList } from "./meta/design";

const OPTIONS: EmblaOptionsType = { loop: true, watchDrag: false };

function App() {
  // 썸네일 이미지
  const getThumbnails = (item: IVideo) => {
    const { target, source, id } = item;
    let href = "";
    let src = "";
    switch (target) {
      case PlatForm.SHORTS:
        href = `https://youtube.com/shorts/${id}`;
        src = `https://i.ytimg.com/vi/${id}/oar2.jpg`;
        break;
      case PlatForm.YOUTUBE:
        href = `https://www.youtube.com/watch?v=${id}`;
        src = `https://i.ytimg.com/vi/${id}/0.jpg`;
        break;
      case PlatForm.REELS:
        href = `https://www.instagram.com/reel/${id}/`;
        if (source) src = source;
        break;
    }
    return (
      <a href={href} target="_blank">
        <img src={src} />
      </a>
    );
  };

  return (
    <div className="min-h-screen w-screen bg-[#e5e7eb] relative pb-14 ">
      <div
        className="absolute z-0 inset-0 w-screen "
        style={{
          opacity: 0.5,
          backgroundImage: `
        repeating-linear-gradient(135deg, #cbd5e133 0 8px, transparent 8px 20px),
        repeating-linear-gradient(-135deg, #d1fae533 0 8px, transparent 8px 20px)
      `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className=" flex justify-start items-center px-10 py-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center h-[70vh]">
        <div className="flex w-full pt-36 md:pt-50 pb-5 lg:pb-10 gap-x-2">
          <MorphingText
            texts={[
              "우리의 이야기를 채우리",
              "꿈을 현실로 채우리",
              "브랜드 가치를 채우리",
              "감동있는 스토리를 채우리",
              "나만의 이야기를 채우리",
              "무한한 가능성을 채우리",
            ]}
            className="font-suit !text-3xl md:!text-5xl lg:!text-7xl "
          />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl px-10 text-center">
          채우리스튜디오는 브랜드의 색으로 콘텐츠를 채우고, 기억에 남을 이야기를
          이어갑니다.
        </p>
      </div>
      <div className="space-y-24">
        <div className="px-5 lg:px-14 space-y-14">
          <h2 className="text-4xl font-bold">Video</h2>
          <EmblaCarousel
            slides={videoList.map((video) => getThumbnails(video))}
            options={OPTIONS}
          />
        </div>
        <div className="px-5 lg:px-14 space-y-14">
          <h2 className="text-4xl font-bold">Design</h2>
          <EmblaCarousel
            slides={designList.map((design) => (
              <img
                className="design"
                src={`https://lh3.googleusercontent.com/d/${design}`}
                loading="lazy"
              />
            ))}
            options={OPTIONS}
          />
        </div>
        <div className="px-5 lg:px-14 space-y-2">
          <h2 className="text-4xl font-bold">Clients</h2>
          <EmblaCarousel
            slides={Clients}
            options={OPTIONS}
            slideHeight="55px"
          />
        </div>
      </div>
      <footer className="text-center pt-50 text-lg space-y-5 z-50">
        <h3 className="font-bold text-xl">채우리스튜디오</h3>
        <ul>
          <li>제작문의 | chaeuuri@naver.com</li>
          <li>사무실 주소 | 경기 수원시 영통구 광교중앙로 240 KJ프라자 3층</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
