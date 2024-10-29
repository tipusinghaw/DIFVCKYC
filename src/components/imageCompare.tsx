import React from "react";
import { FaceSdk, ImageSource, PersonApi } from '@regulaforensics/facesdk-webclient';
// code sample use it according to your use case
const ImageCompare = () => {
    const sdk = new FaceSdk()
    const aadherImage = ''
    const captureImage = ''
    async function compareFace(){
        const response = await sdk.matchingApi.match({
            images: [
                {type: ImageSource.LIVE, data: aadherImage, index: 1},
                {type: ImageSource.DOCUMENT_RFID, data: captureImage, index: 2}
            ]
          })
          console.log(response) // if the image similarty is greater then 0.95 then consider it as verified
    }
  return (
    <>
    </> 
  );
};

export default ImageCompare;
