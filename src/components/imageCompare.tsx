import { FaceSdk, ImageSource } from '@regulaforensics/facesdk-webclient';

const sdk = new FaceSdk();

export const imageCompare = async (aadhaarImage: any, captureImage: any) => {

  const response = await sdk.matchingApi.match({
    images: [
      { type: ImageSource.DOCUMENT_RFID, data: aadhaarImage, index: 1 },
      { type: ImageSource.LIVE, data: captureImage, index: 2 }
    ]
  });
   
  return (response as any).similarity as number;
};