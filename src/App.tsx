import type { EmblaOptionsType } from "embla-carousel";
import logo from "./assets/title.svg";
import EmblaCarousel from "./components/carousel";
import { MorphingText } from "./components/text";
import { Clients } from "./meta/clients";

const OPTIONS: EmblaOptionsType = { loop: true, watchDrag: false };

function App() {
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
            slides={[
              <a href="https://youtube.com/shorts/58cfSW4da_o" target="_blank">
                <img src={"https://i.ytimg.com/vi/58cfSW4da_o/oar2.jpg"} />
              </a>,
              <a href="https://youtube.com/shorts/vp7xJylV5js" target="_blank">
                <img src={"https://i.ytimg.com/vi/vp7xJylV5js/oar2.jpg"} />
              </a>,
              <a href="https://youtube.com/shorts/uCK5Odg74b8" target="_blank">
                <img src={"https://i.ytimg.com/vi/uCK5Odg74b8/oar2.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/watch?v=EgOjFQuQtTE&t=9s"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/EgOjFQuQtTE/0.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/watch?v=xQrnKtdWdzo"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/xQrnKtdWdzo/0.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/watch?v=V11owX4GFy8"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/V11owX4GFy8/0.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/shorts/KECcW5ykulE"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/KECcW5ykulE/oar2.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/shorts/nV1fijqifeQ"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/nV1fijqifeQ/oar2.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/shorts/v1prsRpmA9M"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/v1prsRpmA9M/oar2.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/shorts/IF892wV8SDI"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/IF892wV8SDI/oar2.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/shorts/EH8RAdW7o_U"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/EH8RAdW7o_U/oar2.jpg"} />
              </a>,
              <a
                href="https://www.youtube.com/shorts/CtbVtpADNlQ"
                target="_blank"
              >
                <img src={"https://i.ytimg.com/vi/CtbVtpADNlQ/oar2.jpg"} />
              </a>,
              <a
                href="https://www.instagram.com/reel/DOszmeggV8J/"
                target="_blank"
              >
                <img
                  src={
                    "https://scontent-gmp1-1.cdninstagram.com/v/t51.71878-15/550357270_2367117287079342_3472238436911756980_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzcyMzU3NzkzNjM5ODM0Mzk0NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=qAleqlMSMA8Q7kNvwHgpKtj&_nc_oc=Admj0A6CShXvuykLr4MGOI8UA7USBifVIREEb6aThSpDyRq10KrkGrvsFZPH0TkomPo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_gid=3TgCHE7Yfbm6jPALSrN2yg&oh=00_AfauyvkrMPthyZswUyQ_tnQWS5IpQLNi_MHlTIRqXk2yZQ&oe=68D4DB0E"
                  }
                />
              </a>,
              <a
                href="https://www.instagram.com/reel/DOx3WWAgYIO/"
                target="_blank"
              >
                <img
                  src={
                    "https://scontent-gmp1-1.cdninstagram.com/v/t51.71878-15/551029949_24561335490195779_555672248150961151_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzcyNTAwMTc5NDgyOTUxNzMyNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=nGe1qlaZ0y4Q7kNvwGVIXG-&_nc_oc=AdlkOr0lwR6_O37BEsAOe55SjC0t9RsqgteZAgdsq3_o39QgHYfmN452nITDFyE821g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_gid=Cg_mhgQ9pYtonLv58OrJaA&oh=00_Afaac6nsZZHAHI1gQOvGyBARsvTwftZjey2Cmx4K4ft37A&oe=68D4D406"
                  }
                />
              </a>,
            ]}
            options={OPTIONS}
          />
        </div>
        <div className="px-5 lg:px-14 space-y-14">
          <h2 className="text-4xl font-bold">Design</h2>
          <EmblaCarousel
            slides={[
              <img
                className="design"
                src="https://lh3.googleusercontent.com/d/1XK4aRhgVDUpy9rekZtpYNbUIiLp2SQhN"
                loading="lazy"
              />,
              <img
                className="design"
                src="https://lh3.googleusercontent.com/d/1WgQ7BeXJzcZsDA2_MbuF4rk-cSAwP9GR"
                loading="lazy"
              />,
              <img
                className="design"
                src="https://lh3.googleusercontent.com/d/11mc8IRhnO5EqfM9p2SuicID2Mj0-89nS"
                loading="lazy"
              />,
              <img
                className="design"
                src="https://lh3.googleusercontent.com/d/1npkczf_Y5zKYfv8kQ9xg01SrXVuWx33P"
                loading="lazy"
              />,
              <img
                className="design"
                src="https://lh3.googleusercontent.com/d/11jFA3V-1xjUP1fR95yB2QE8kiMk5nY60"
                loading="lazy"
              />,
            ]}
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
