import { Carousel } from "react-bootstrap";
import "./Slider.scss";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="slider">
          <img
            className="b-block w-100"
            src="/vite-test-amida/media/slider/slider_picture_3.jpg"
            alt="shoes"
          />
          <Carousel.Caption>
            <h2> Best brands of sport shoes</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider">
          <img
            className="b-block w-100"
            src="/vite-test-amida/media/slider/slider_picture_1.jpg"
            alt="shoes"
          />
          <Carousel.Caption>
            <h2> Best brands of sport shoes</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider">
          <img
            className="b-block w-100"
            src="/vite-test-amida/media/slider/slider_picture_2.jpg"
            alt="shoes"
          />
          <Carousel.Caption>
            <h2> Best brands of sport shoes</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
