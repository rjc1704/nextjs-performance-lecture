import { CLOUDINARY_BASE_URL } from "@/constants/images";

export const changeImgFormat = ({ src, format }) => {
  return src.replace(/\.[^/.]+$/, `.${format}`);
};

export const getCloudinaryImgUrl = ({ width, height = undefined, src }) => {
  const heightStr = height ? `,h_${height}` : "";
  return `${CLOUDINARY_BASE_URL}/w_${width}${heightStr},c_fill,q_auto,f_auto/${src}`;
};

export const preloadImgs = (imgs) => {
  return Promise.all(
    imgs.map((img) => {
      const { width, height, src } = img;
      return new Promise((resolve, reject) => {
        const image = new Image();
        const imgUrl = getCloudinaryImgUrl({
          width,
          height,
          src,
        });

        image.onload = () => resolve(image);
        image.onerror = () =>
          reject(new Error(`Failed to load image: ${image.src}`));
        image.src = imgUrl;
      });
    }),
  );
};
