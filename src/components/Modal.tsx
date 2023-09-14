import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ModalProps = {
  imageId: number;
};

const Modal: FC<ModalProps> = ({ imageId }) => {
  const router = useRouter();
  return (
    <div
      className="w-screen h-screen absolute flex justify-center items-center transition-all duration-1000"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <div className="flex justify-start items-start">
        <Image
          src={require(`public/img/pic_${imageId}.jpg`)}
          alt={"some image"}
          width={350}
          height={400}
          objectFit="fit"
          className="rounded-xl shadow-2xl m-5"
        />
        <button
          className="bg-black text-white p-2 rounded-lg text-xl"
          onClick={() => router.back()}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
