import { useEffect, useRef } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

import { BackIcon, CameraSearchIcon } from "@/components/Icons.tsx";

export default function ScannerPage() {

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
    <div className="relative flex flex-col min-h-dvh w-full content-wrapper">
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
        style={{ bottom: 0 }}
      >
        <Button
          isIconOnly
          radius={"full"}
          style={{ width: "85px", height: "85px" }}
          variant={"shadow"}
        >
          <CameraSearchIcon size={36} />
        </Button>
        <Button
          isIconOnly
          className={"absolute"}
          color={"danger"}
          radius={"full"}
          style={{ left: "40px", top: "39px", width: "50px", height: "50px" }}
          variant={"shadow"}
        >
          <BackIcon size={24} />
        </Button>
        <ButtonGroup variant={"shadow"}>
          <Button color={"primary"}>Камера</Button>
          <Button>Файл</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
