/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';

function ImageSlide({ images }) {
  return (
    <Carousel variant="dark" key={Math.random()}>
      {images.map((i) => (
        <Carousel.Item key={Math.random()}>
          <img
            className="slide-image"
            src={i}
            alt="slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlide;
