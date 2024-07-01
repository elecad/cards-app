import { Button } from "@nextui-org/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CameraIcon, CameraSearchIcon } from "@/components/Icons.tsx";
import { useBarcode } from "@/hooks/useBarcode.ts";
import { routesUrl } from "@/router/router.tsx";

export const Camera = () => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const [cameraReady, setCameraReady] = useState(false);

  const [stream, setStream] = useState<MediaStream | null>(null);

  const navigate = useNavigate();

  const { isScanning, scanning} = useBarcode();
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
    setStream(st);

    setCameraReady(true);

    return st;
  };

  useEffect(() => {
    let streamOff: MediaStream | undefined = undefined;

    init().then((value) => {
      streamOff = value;
    });

    return () => {
      if (streamOff) {
        console.log("Отключение стрима");
        streamOff.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const scanningHandler = async () => {
    if (!videoElement.current || !stream) return;
    const videoTracks = stream.getVideoTracks();
    const imageCapture = new ImageCapture(videoTracks[0]);

    await videoElement.current.pause();
    const blob = await imageCapture.takePhoto();
    const codes = await scanning(blob);

    if (codes.length === 0) {
      await videoElement.current.play();
    } else {
      navigate(routesUrl.create, { state: codes[0] });
    }
  };

  return (
    <>
      <video
        ref={videoElement}
        autoPlay
        muted
        playsInline
        className={"w-screen h-dvh object-cover"}
        style={{ opacity: cameraReady ? "1" : "0" }}
      />

      {!cameraReady && (
        <div
          className={
            "absolute w-full min-h-dvh flex items-center justify-center"
          }
        >
          <CameraIcon size={72} />
        </div>
      )}

      <div
        className={
          "control-camera-wrapper fixed w-full h-44 flex items-center justify-center flex-col gap-3"
        }
        style={{ bottom: "35px" }}
      >
        <Button
          isIconOnly
          isLoading={isScanning}
          radius={"full"}
          style={{ width: "85px", height: "85px" }}
          variant={"shadow"}
          onClick={scanningHandler}
        >
          <CameraSearchIcon size={36} />
        </Button>
      </div>
    </>
  );
};
