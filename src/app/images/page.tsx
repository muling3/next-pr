"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useRouter, useSearchParams } from "next/navigation";

const ImagesList = () => {
  const searchParams = useSearchParams();

  const getImages = () => {
    let images: { altText: string; src: StaticImport }[] = [];
    for (let i = 1; i <= 4; i++) {
      images.push({
        altText: `Alternate text for ${i}`,
        src: require(`public/img/pic_${i}.jpg`),
      });
    }
    return images;
  };

  return (
    <>
      {searchParams.get("imageId") && (
        <Modal imageId={parseInt(searchParams.get("imageId") as string)} />
      )}

      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-slate-400">
        <p> </p>
        {getImages().map(
          (img: { altText: string; src: StaticImport }, index: number) => (
            <div className="border rounded-xl h-80 w-60 flex justify-center items-center overflow-hidden m-2">
              <Link href={`/images?imageId=${index + 1}`}>
                <Image
                  src={img.src}
                  alt={img.altText}
                  height={264}
                  width={`320`}
                />
              </Link>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ImagesList;
