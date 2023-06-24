import {Link} from "react-router-dom";
import image01 from "../../assets/images/cards/image01.png";
import image02 from "../../assets/images/cards/image02.jpg";
import image03 from "../../assets/images/cards/image03.png";
import image04 from "../../assets/images/cards/image04.png";

export default function Cards() {
    return (
        <Link to="/aimer/gallery">
            <img src={image01} alt="img1"/>
            <img src={image02} alt="img2"/>
            <img src={image03} alt="img3"/>
            <img src={image04} alt="img4"/>
        </Link>
    );
}