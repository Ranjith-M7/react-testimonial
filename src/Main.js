import React, { useState } from "react";
import "./style.css";

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Leo das",
    },
    {
      quote:
        "The blue color and the design makes this product even more beautiful",
      author: "Granny Tsunade",
    },
    {
      quote: "I have been using the product more than a year!",
      author: "Thamizhini Akilan",
    },
  ];

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  const handleClickPrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  return (
    <>
      <div className="container">
        <div className="testimonials">
          <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
          </div>
          <div className="testimonials-author">
            - {testimonials[currentIndex].author}
          </div>
          <div className="testimonials-nav">
            <button onClick={handleClickPrev} className="prev-btn">
              Prev
            </button>
            <button onClick={handleClickNext} className="next-btn">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
