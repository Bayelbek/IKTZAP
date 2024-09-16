import React, { useState } from "react";
import "./slider.scss";

interface Slide {
  title: string;
  specs: string[];
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "SANY SY124543500H или аналог",
    specs: [
      "Эксплуатационная масса: 50т",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "img/Cars/Экскаватор.png",
  },
  {
    title: "SANY SY111111500H или аналог",
    specs: [
      "Эксплуатационная масса: 50т",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "img/Cars/Экскаватор.jpg",
  },
  {
    title: "SANY SY500H или аналог",
    specs: [
      "Эксплуатационная масса: 50т",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "img/Cars/Экскаватор.jpg",
  },
];

interface SlideDetailsProps {
  slide: Slide;
}

const SlideDetails: React.FC<SlideDetailsProps> = ({ slide }) => (
  <div className="text">
    <h1 className="title">{slide.title}</h1>
    <div className="slider_flex">
      <ul>
        {slide.specs.map((spec, index) => (
          <li key={index}>
            <img src="img/done.png" alt="done" />
            {spec}
          </li>
        ))}
      </ul>
      <img className="ekskovator" src={slide.imageUrl} alt="эксковатор" />
    </div>
    <button>Подробнее...</button>
  </div>
);

interface SliderControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({ onNext, onPrev }) => (
  <div className="button">
    <img className="left" src="img/right.svg" alt="prev" onClick={onPrev} />
    <img className="right" src="img/right.svg" alt="next" onClick={onNext} />
  </div>
);

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="home_slider">
      <div className="container">
        <div className="slider">
          <SlideDetails slide={currentSlide} />
          <SliderControls onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
