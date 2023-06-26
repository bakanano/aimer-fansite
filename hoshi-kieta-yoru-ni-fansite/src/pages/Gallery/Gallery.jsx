import Picture from "../../components/Picture/Picture";
import "./Gallery.css";
export default function Gallery({images}) {
    console.log(images);
    return (
        <div className="imagesContainer">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.thumbnail} alt={`Image ${index}`}/>
                </div>
            ))}
        </div>
    );
}