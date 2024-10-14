import React, { useState } from "react";
import "./slider.scss";

interface Slide {
  title: string;
  specs: string[];
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "SANY SY124543500H или аналог 0001",
    specs: [
      "Эксплуатационная",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем коasdaв",
    ],
    imageUrl: "img/Cars/Экскаватор.png",
  },
  {
    title: "SANY SY111111500H или аналог",
    specs: [
      "Эксплуатационная : 50т",
      "Длина стрелы: 7м",
      "Длина рукоasdяти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "img/Cars/Экскаватор.jpg",
  },
  {
    title: "SANY SY500H или аналог",
    specs: [
      "Эксплуатационная : 50т",
      "Длина стрелы: ",
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
  <div className="flex_container">
    <span className="title_name">{slide.title}</span>
    <ul>
      {slide.specs.map((spec, index) => (
        <li key={index}>
          <img src="img/done.png" alt="done" className="img_t" />
          <span className="title_s">{spec}</span>
        </li>
      ))}
    </ul>
    <img className="ekskovator" src={slide.imageUrl} alt="эксковатор" />
    <button>Подробнее...</button>
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
      <div className="slider">
        <div className="button_pn" onClick={handlePrev}>
          <img className="left" src="img/right.svg" alt="prev" />
        </div>
        <SlideDetails slide={currentSlide} />
        <div className="button_pn" onClick={handleNext}>
          <img className="right" src="img/right.svg" alt="next" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
