import { Button } from "@nextui-org/button";
import { useEffect, useRef } from "react";

import { CameraSearchIcon } from "@/components/Icons.tsx";

export const Camera = () => {
  const videoElement = useRef<HTMLVideoElement>(null);

  const init = async () => {
    if (!videoElement.current) {
      return;
    }
    console.log("Init video!");
    const st = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: {
          ideal: "environment",
        },
      },
      audio: false,
    });

    videoElement.current.srcObject = st;
    await videoElement.current.play();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <video
        ref={videoElement}
        autoPlay
        muted
        playsInline
        className={"w-screen h-dvh object-cover"}
      />

      <div
        className={
          "control-camera-wrapper fixed w-full h-44 flex items-center justify-center flex-col gap-3"
        }
        style={{ bottom: "35px" }}
      >
        <Button
          isIconOnly
          radius={"full"}
          style={{ width: "85px", height: "85px" }}
          variant={"shadow"}
        >
          <CameraSearchIcon size={36} />
        </Button>
      </div>
    </>
  );
};
