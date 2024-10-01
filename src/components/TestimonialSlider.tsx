'use client'
import dynamic from 'next/dynamic';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      style={{ ...style, right: '10px', background: 'transparent' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      style={{ ...style, left: '10px', zIndex: 1, background: 'transparent' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Slider {...settings}>
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <video
              src="/video1.mp4" 
              controls
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">NAVIGATE</h3>
              <p>"ClickUp has made collaboration really easy."</p>
              <span className="text-sm text-gray-500">Kelli Williams, SVP Consumer Insights</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <video
              src="/video2.mp4" 
              controls
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Vela</h3>
              <p>"ClickUp made our production team two-thirds more efficient."</p>
              <span className="text-sm text-gray-500">Justin Kosmides, CEO & Co-Founder</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <video
              src="/video3.mp4" 
              controls
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Convene</h3>
              <p>"We have all of our tasks in one place."</p>
              <span className="text-sm text-gray-500">Briana Conetta, Sr. Event Production Manager</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
