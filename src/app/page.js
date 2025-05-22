"use client";
import {
  BANNER_IMGS,
  CARD_IMGS,
  CLOUDINARY_BASE_URL,
} from "@/constants/images";
import ImgCard from "@/components/ImgCard";

import { useDisclosure } from "@/hooks/useDisclosure";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-material-ui-carousel";
import ImgGalleryModal from "@/components/ImgGalleryModal";
import Image from "next/image";
import { preloadImgs } from "@/utils/cdnImage";
// import dynamic from "next/dynamic";
// const ImgGalleryModal = dynamic(() => import("@/components/ImgGalleryModal"), {
//   ssr: false,
// });

const IMG_WIDTH = 920;
const IMG_HEIGHT = 576;
const THUMBNAIL_IMG_WIDTH = 152;
const THUMBNAIL_IMG_HEIGHT = 98;

const PRELOADING_IMGS = [
  { src: CARD_IMGS[0], width: IMG_WIDTH, height: IMG_HEIGHT },
  {
    src: CARD_IMGS[0],
    width: THUMBNAIL_IMG_WIDTH,
    height: THUMBNAIL_IMG_HEIGHT,
  },
  {
    src: CARD_IMGS[1],
    width: THUMBNAIL_IMG_WIDTH,
    height: THUMBNAIL_IMG_HEIGHT,
  },
  {
    src: CARD_IMGS[2],
    width: THUMBNAIL_IMG_WIDTH,
    height: THUMBNAIL_IMG_HEIGHT,
  },
  {
    src: CARD_IMGS[3],
    width: THUMBNAIL_IMG_WIDTH,
    height: THUMBNAIL_IMG_HEIGHT,
  },
  {
    src: CARD_IMGS[4],
    width: THUMBNAIL_IMG_WIDTH,
    height: THUMBNAIL_IMG_HEIGHT,
  },
];

export default function Home() {
  const { isOpen, onOpen, onToggle } = useDisclosure();

  return (
    <div className="w-[1200px] flex flex-col mx-auto">
      <header className="w-full h-20 flex items-center justify-between px-4 md:px-6 text-xl">
        <div className="flex items-center justify-center">
          <span>리액트 로딩 최적화</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <div className="text-sm font-medium hover:underline underline-offset-4">
            이미지
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4">
            폰트
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4">
            코드스플리팅
          </div>
        </nav>
      </header>
      <main className="flex-1">
        {/* 배너 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <Carousel height={384}>
            {BANNER_IMGS.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg h-96"
              >
                {/* <picture>
                  <source srcSet={src.avif.src} type="image/avif" />
                  <img
                    src={src.jpg.src}
                    alt={`cat${idx} 고양이 이미지`}
                    className="w-full h-full object-cover"
                  />
                </picture> */}
                <Image
                  src={src.avif.src}
                  alt={`cat${idx}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  unoptimized
                />
              </div>
            ))}
          </Carousel>
        </section>
        {/* 카드 이미지리스트 섹션 */}
        <section
          // onMouseEnter={() => preloadImgs(PRELOADING_IMGS)}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="cursor-pointer grid gap-6 lg:grid-cols-3 lg:gap-12">
              {CARD_IMGS.map((src) => (
                <ImgCard key={src} src={src} handleClick={onOpen} />
              ))}
            </div>
          </div>
        </section>
        {/* 폰트 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-5">
          <div className="container px-4 md:px-6">
            <p className="text-gray-500 md:text-2xl lg:text-[36px]">
              {"가나다라마바사아자차카타파하"}
              <br />
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
              <br />
              {"abcdefghijklmnopqrstuvwxyz"}
              <br />
              {"0123456789"}
              <br />
              {`~\`!@#$%^&*()-_=+[{]}|'"/?,<.>:;`}
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full h-20 flex items-center justify-center px-4 md:px-6 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Footer Contents Here
        </p>
      </footer>
      {/* 이미지 갤러리 모달 */}
      <ImgGalleryModal
        isOpen={isOpen}
        onOpenChange={onToggle}
        images={CARD_IMGS}
      />
    </div>
  );
}
