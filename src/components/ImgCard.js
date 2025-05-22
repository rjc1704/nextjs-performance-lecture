import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CLOUDINARY_BASE_URL } from "@/constants/images";
import { getCloudinaryImgUrl } from "@/utils/cdnImage";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

const cloudinaryLoader = ({ src, width, height }) => {
  return getCloudinaryImgUrl({ width, height, src });
};

export default function ImgCard({ src, handleClick = () => {} }) {
  return (
    <div onClick={() => handleClick(src)}>
      <Card className="py-4 max-w-[294px] hover:scale-105">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
        </CardHeader>
        <CardContent className="overflow-hidden py-2 rounded-xl h-[185px]">
          {/* <img src={`${CLOUDINARY_BASE_URL}/${src}`} width={270} height={175} alt="Card background" /> */}
          <Image
            src={src}
            loader={cloudinaryLoader}
            width={270}
            height={175}
            alt="Card background"
            className="w-full h-full object-cover"
          />
          {/* <LazyLoadImage
            src={`${CLOUDINARY_BASE_URL}/${src}`}
            width={270}
            height={175}
            alt="Card background"
            className="w-full h-full object-cover"
          /> */}
        </CardContent>
      </Card>
    </div>
  );
}
