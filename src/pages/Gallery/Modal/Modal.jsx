import React, {useEffect} from 'react';
import './Modal.css';

const Modal = ({ src, top, left, initialWidth, initialHeight, finalWidth, finalHeight, onClose }) => {
    
    useEffect(() => {
        const handleEscKeyPress = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKeyPress);

        return () => {
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [onClose]);
    
    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent">
                <img
                    src={src}
                    alt="Large Image"
                    style={{
                        width: finalWidth,
                        height: finalHeight,
                    }}
                />
            </div>
        </div>
    );
};

export default Modal;
