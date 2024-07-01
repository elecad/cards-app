import {
  BarcodeDetector as BarcodeDetectorPolyfill,
  setZXingModuleOverrides,
} from "barcode-detector";
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";
import { useState } from "react";

const BARCODES: { [key: string]: string } = {
  // detected: generated
  code_128: "CODE128",
  code_39: "CODE39",
  codabar: "codabar",
  ean_13: "EAN13",
  ean_8: "EAN8",
  itf: "ITF", //???
  qr_code: "qr_code",
  upc_a: "UPC", //???
  upc_e: "UPC", // ???
};

export const useBarcode = () => {
  const [isScanning, setIsScanning] = useState(false);
  const setWasm = () => {
    setZXingModuleOverrides({
      locateFile: () => {
        console.log("WASM Set!");

        return "/zxing_reader.wasm";
      },
    });
  };
  const scanning = async (data: Blob) => {
    setWasm();
    const barcodeDetector = new BarcodeDetectorPolyfill();
    setIsScanning(true);
    const codes = await barcodeDetector.detect(data);
    const supportCodes = codes.filter((card) => hasSupport(card.format))

    setIsScanning(false);

    return supportCodes;
  };

  const hasSupport = (detectedType: string) => {
    return BARCODES[detectedType] !== undefined;
  };

  const createBarcode = async (data: string, type: string) => {
    if (!hasSupport(type)) throw new Error("This Barcode is not supported");

    const generatedType = BARCODES[type];
    let src = "";

    if (generatedType === "qr_code") {
      src = await QRCode.toDataURL(data);
    } else {
      const placeholderElement = document.createElement("img");

      JsBarcode(placeholderElement, data, {
        format: BARCODES[type],
        flat: true,
        displayValue: false,
        margin: 20,
      });
      src = placeholderElement.src;
    }

    return src;
  };

  return { scanning, createBarcode, hasSupport, setWasm, isScanning };
};
