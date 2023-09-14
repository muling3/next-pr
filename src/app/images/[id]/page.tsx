import React from "react";
import Image from "next/image";

const ImageDetail = ({ params: { id } }: { params: { id: number } }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-400">
      <Image
        src={require(`public/img/pic_${id}.jpg`)}
        alt={"some image"}
        width={250}
        height={100}
        objectFit="fit"
        className="rounded-xl shadow-2xl m-5"
      />
    </div>
  );
};

export default ImageDetail;
