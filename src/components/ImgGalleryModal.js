import ImageGallery from "react-image-gallery";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "react-image-gallery/styles/css/image-gallery.css";
import { getCloudinaryImgUrl } from "@/utils/cdnImage";

export default function ImgGalleryModal({ isOpen, onOpenChange, images }) {
  const IMG_WIDTH = 920;
  const IMG_HEIGHT = 576;
  const THUMBNAIL_IMG_WIDTH = 152;
  const THUMBNAIL_IMG_HEIGHT = 98;

  const items = images.map((src) => {
    return {
      original: getCloudinaryImgUrl({
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        src,
      }),
      thumbnail: getCloudinaryImgUrl({
        width: THUMBNAIL_IMG_WIDTH,
        height: THUMBNAIL_IMG_HEIGHT,
        src,
      }),
    };
  });

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-auto p-4 bg-white">
        <DialogHeader>
          <DialogTitle>이미지 갤러리</DialogTitle>
        </DialogHeader>

        <div className="max-w-[460px]">
          <ImageGallery
            items={items}
            showPlayButton={false}
            showNav={true}
            thumbnailPosition="bottom"
            showThumbnails={true}
          />
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            닫기
          </Button>
          <Button onClick={() => onOpenChange(false)}>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
