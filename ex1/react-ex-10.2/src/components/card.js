import { useRef } from "react";
import "./hover.css";
import blackAndWhiteImg from "../assests/blackandwhite.jpg";
import modifiedImg from "../assests/blackandwhite-modified.jpg";

const Video = () => {
    const currentImg = useRef(null);

    const toggleimgs = ({ firstImg, secondImg }) => {
      

        if (secondImg) {
            currentImg.current.src = blackAndWhiteImg;
        }
        if (firstImg) {
            currentImg.current.src = modifiedImg;
        }
    };

    return (
        <img
            ref={currentImg}
            src={modifiedImg}
            onMouseOver={() => toggleimgs({ firstImg: true })}
            onMouseOut={() => toggleimgs({ secondImg: true })}
        />
    );
};

export default Video;