import "./Hero.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://script.googleusercontent.com/macros/echo?user_content_key=yclbUNldSPsa0oAUKC9jWEzqQNWp8ZGZEu5_kXNqKrKqoDp_gDLk9C5mFNb46dWRI-gzQyc7A4Fy8f3reGyfiLIsFBvP0P3Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKsORVVyoiQ3KY32n3MaYMzgtFI5w7v4L96v9R0JNI7okXCDfwR2JJXF-yAcMPZ8A0PEPhDCxRYF8t5-lo8BDbcwjA6VEB33z9z9Jw9Md8uu&lib=M0jHt_B525Jy2_aU5lm9lwJt9lTww6_9M"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setImages(data.data); // Store the image data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="cont">
      <div className="disimg">
        {images.map((image, index) => (
          <div key={index}>
            <a
              href={`https://drive.google.com/thumbnail?id=${image.img_id}&sz=w600`}
              target="_blank"
            >
              <img
                src={`https://drive.google.com/thumbnail?id=${image.img_id}&sz=w500`}
                alt={`Image ${index + 1}`}
                className="img"
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
