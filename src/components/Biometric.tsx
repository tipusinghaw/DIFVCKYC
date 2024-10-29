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
                <Webcam
                    height={270}
                    width={300}
                    ref={webcamRef}
                    style={{ objectFit: "cover" }}
                />
            )}
            <button
                className="cursor-pointer py-2 px-6 mt-4 text-white font-semibold rounded-lg transition duration-300 bg-indigo-500 hover:bg-indigo-600 w-[200px]"
                onClick={capture}
            >
                Capture
            </button>
        </div>
    );
};

export default Biometric;
