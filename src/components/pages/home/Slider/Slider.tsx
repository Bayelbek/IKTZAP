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
      "Эксплуатационная масса: 50т",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "/img/Cars/Экскаватор.png",
  },
  {
    title: "SANY SY111111500H или аналог",
    specs: [
      "Эксплуатационная масса: 50т",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "/img/Cars/Экскаватор.png",
  },
  {
    title: "SANY SY500H или аналог",
    specs: [
      "Эксплуатационная масса: 50т",
      "Длина стрелы: 7м",
      "Длина рукояти: 3м",
      "Объем ковша: 2,5 м3",
    ],
    imageUrl: "/img/Cars/Экскаватор.png",
  },
];

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
    <div
      className="slider-container"
      style={{
        backgroundImage: "url('/img/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="slider">
        <button className="slider-button prev" onClick={handlePrev}>
          {"<"}
        </button>
        <div className="slide-content">
          <h2>{currentSlide.title}</h2>
          <ul>
            {currentSlide.specs.map((spec, index) => (
              <li key={index}>
                <img src="/img/done.png" alt="done" className="icon" />
                {spec}
              </li>
            ))}
          </ul>
          <button className="details-button">Подробнее...</button>
        </div>
        <div className="slide-image-container">
          <img
            className="slide-image"
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
          />
        </div>
        <button className="slider-button next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
