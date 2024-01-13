import {useState} from "react";
import "./Gallery.css";
import Modal from "./Modal/Modal";

export default function Gallery({images}) {
    const [currentImage, setCurrentImage] = useState(null);

    function handleImageClick(e, src, index) {
        const img = e.target;
        const rect = img.getBoundingClientRect();
        const sizesImage = new Image();
        const top = `${rect.top}px`;
        const left = `${rect.left}px`;
        const width = `${rect.width}px`;
        const height = `${rect.height}px`;
        const currentImage = {top, left, initialWidth: width, initialHeight: height};

        currentImage.src = src;
        sizesImage.src = src;
        sizesImage.addEventListener("load", () => {
            currentImage.finalWidth = `${sizesImage.width}px`;
            currentImage.finaHeight = `${sizesImage.height}px`;
            currentImage.index = index;

            setCurrentImage(currentImage);
        })
    }

    return (
        <div className="mainContainer">
            <div className="galleryContainer">
                {images.map(({original, thumbnail}, index) => (
                    <div key={index}>
                        <img src={thumbnail} alt={`Image ${index}`} className="galleryImage" onClick={(e) => handleImageClick(e, original, index)}/>
                    </div>
                ))}
            </div>
            {currentImage && (
                <Modal
                    src={currentImage.src}
                    top={currentImage.top}
                    left={currentImage.left}
                    initialWidth={currentImage.initialWidth}
                    initialHeight={currentImage.initialHeight}
                    finalWidth={currentImage.finalWidth}
                    finalHeight={currentImage.finalHeight}
                    onClose={() => setCurrentImage(null)} // Add onClose prop to close the modal
                />
            )}
        </div>
    );
}
