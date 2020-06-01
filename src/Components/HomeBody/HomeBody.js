import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  {
    name: "Photo 1",
    url: "/Pictures/backpack-on-tree.jpeg"
  },
  {
    name: "Photo 2",
    url: "/Pictures/black-leather-backpack.jpeg"
  },
  {
    name: "Photo 3",
    url: "/Pictures/tree-and-stars.jpg"
  },
  {
    name: "Photo 4",
    url: "/Pictures/blue-backpack.jpeg"
  },
  {
    name: "Photo 5",
    url: "/Pictures/blue-backpack.jpeg"
  }
]


class HomeBody extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
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
        <p className="text">Lorem</p>
        <div className="skills">
          <span>Bookbags</span>
          <span>Selling</span>
          <span>Design</span>
        </div>
      </div>
    </div>

    <div className="contact-section">
      <div className="inner-contact-container">
        <h1>start shopping now</h1>
        <p className="text">Lorem</p>
        <div className="skills">
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default HomeBody;
