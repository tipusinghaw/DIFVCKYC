import { FaceSdk, ImageSource } from '@regulaforensics/facesdk-webclient';

const sdk = new FaceSdk();

export const imageCompare = async (aadhaarImage: any, captureImage: any) => {
  console.log('aadhaarImage5678:::', aadhaarImage)
  console.log('captureImage56789:::', captureImage)

  const response = await sdk.matchingApi.match({
    images: [
      { type: ImageSource.DOCUMENT_RFID, data: aadhaarImage, index: 1 },
      { type: ImageSource.LIVE, data: captureImage, index: 2 }
    ]
  });
   
  console.log('response34567::::', response)
  return response;; // Adjust according to your actual response structure
};