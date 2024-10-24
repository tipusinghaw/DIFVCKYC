import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import ButtonPrimary from "./ButtonPrimary";

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
                <img src={imgSrc} alt="webcam" />
            ) : (
                <Webcam
                    height={270}
                    width={300}
                    ref={webcamRef}
                    style={{ objectFit: "cover" }}
                />
            )}
            <ButtonPrimary addClass="cursor-pointer w-full" onClick={capture}>
                Capture
            </ButtonPrimary>
        </div>
    );
};

export default Biometric;
