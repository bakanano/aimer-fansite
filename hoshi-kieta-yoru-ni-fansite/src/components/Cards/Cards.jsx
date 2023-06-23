import {Link} from "react-router-dom";
import image01 from "../../assets/images/cards/image01.png"

export default function Cards() {
    return (
        <Link to="/">
            <img src={image01} alt="img1"/>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </Link>
    );
}