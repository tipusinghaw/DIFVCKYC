import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

interface BiometricProps {
  onCapture: (imageSrc: string) => void;
}

const Biometric: React.FC<BiometricProps> = ({ onCapture }) => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      setTimeout(() => {
        setImgSrc(imageSrc);
        if (imageSrc) {
          onCapture(imageSrc);
        }
      }, 1000);
    }
  }, [webcamRef, onCapture]);

  return (
    <div className="container flex gap-8 flex-col justify-center items-center">
      {imgSrc ? (
        <img src={imgSrc} alt="Captured" />
      ) : (
        <div className="w-64 h-64 overflow-hidden rounded-full border-2 border-blue-500">
          <Webcam
            height={270}
            width={300}
            ref={webcamRef}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              transform: "translateX(-15%)", // Adjust for centering if needed
            }}
          />
        </div>
      )}
      <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={capture}
      >
        Capture
      </button>
    </div>
  );
};

export default Biometric;
