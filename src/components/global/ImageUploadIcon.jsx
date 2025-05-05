import { useRef } from "react";
import { FiImage } from "react-icons/fi";

function ImageUploadIcon({ onFileChange }) {
    const fileInputRef = useRef(null);

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <button
                onClick={handleIconClick}
                className="text-xl p-2 rounded hover:bg-gray-100"
                title="Upload Image"
            >
                <FiImage />
            </button>

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={onFileChange}
                className="hidden"
            />
        </>
    );
}

export default ImageUploadIcon;
