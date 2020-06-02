import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const photos = [
  {
    name: "Photo 1",
    url: "/HomePagePictures/backpack-in-snow.jpg"
  },
  {
    name: "Photo 2",
    url: "/HomePagePictures/mountain-backpack.jpg"
  },
  {
    name: "Photo 3",
    url: "/HomePagePictures/mountains-snow-picture.jpg"
  },
  {
    name: "Photo 4",
    url: "/HomePagePictures/school-backpack.jpg"
  },
  {
    name: "Photo 5",
    url: "/HomePagePictures/Trail-backpack.jpg"
  }
]


class HomeBody extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      className: "slide"
    };
    return (
      <div>
        <section className="container">
        <Slider {...settings}>
          {photos.map((photos) => {
            return(
              <div>
                <img width="100%" height="700rem" src={photos.url} alt="photos" />
              </div>
            )
          })}
        </Slider>
        </section>

    <div className="about-section">
      <div className="inner-container">
        <h1>About us</h1>
        <p className="text">Here at Leo's backpacks, we strive to bring you a varity of backpacks to choose from. To learn more about what we offer; check out our products page and explore.</p>
        <Link className="homeButton" to="/Products">Products</Link>
      </div>
    </div>

    <div className="contact-section">
      <div className="inner-container">
        <h1>Contact us</h1>
        <p className="text">If you have any questions for concerns, feel free to contact us!</p>
        <Link className="homeButton" to="/Contact">Contact Us</Link>
      </div>
    </div>
      </div>
    );
  }
}

export default HomeBody;
