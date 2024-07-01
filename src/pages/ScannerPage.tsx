import { useMemo, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

import { BackIcon } from "@/components/Icons.tsx";
import { Camera } from "@/components/Camera.tsx";
import { File } from "@/components/File.tsx";
import { routesUrl } from "@/router/router.tsx";

type ModeType = "camera" | "file";

export default function ScannerPage() {
  const [mode, setMode] = useState<ModeType>("camera");

  const isCamera = useMemo(() => mode == "camera", [mode]);

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-dvh w-full content-wrapper">
      {isCamera && <Camera />}
      {!isCamera && <File />}

      <div
        className={
          "control-camera-wrapper fixed w-full flex items-center justify-end flex-col"
        }
        style={{ bottom: "20px" }}
      >
        <ButtonGroup variant={"shadow"}>
          <Button
            color={isCamera ? "primary" : "default"}
            onClick={() => {
              setMode("camera");
            }}
          >
            Камера
          </Button>
          <Button
            color={!isCamera ? "primary" : "default"}
            onClick={() => {
              setMode("file");
            }}
          >
            Файл
          </Button>
        </ButtonGroup>
        <Button
          isIconOnly
          className={"absolute"}
          color={"danger"}
          radius={"full"}
          style={{
            left: "20px",
            bottom: "15px",
            width: "50px",
            height: "50px",
          }}
          variant={"shadow"}
          onClick={() => {
            navigate(routesUrl.main);
          }}
        >
          <BackIcon size={24} />
        </Button>
      </div>
    </div>
  );
}
