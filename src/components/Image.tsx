import { AsyncImage } from "loadable-image";
import { FC } from "react";
import { Blur } from "transitions-kit";

interface ImageProps {
  src: string;
}
export const Image = ({ src }: ImageProps) => {
  return (
    <AsyncImage
      src={src}
      style={{ width: "100%", height: "auto", aspectRatio: "3 / 4" }}
      Transition={Blur}
    />
  );
};
