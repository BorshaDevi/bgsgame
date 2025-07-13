"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
const CustomeLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="arrow prev absolute right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    >
      <BiSolidLeftArrow className="text-white bg-fuchsia-800 bg-opacity-80	p-1 text-xl"></BiSolidLeftArrow>
    </div>
  );
};
const CustomeRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="arrow next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    >
      <BiSolidRightArrow className="text-white bg-fuchsia-800	p-1 bg-opacity-80	 text-xl"></BiSolidRightArrow>
    </div>
  );
};
const GameCarossel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomeRight />,
    prevArrow: <CustomeLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
   <div className="mt-16 max-w-6xl mx-auto px-4">
      <h1 className="text-center font-medium mb-10 text-3xl text-black">
        Explore betquix games
      </h1>
      <div className="relative">
        <Slider {...settings}>
          {data.map((da) => (
            <div key={da.id} className="">
              <Card className="overflow-hidden mx-auto w-52">
                <div className="relative">
                  <img
                    src={da.image}
                    alt="game"
                    className="object-cover w-52 h-64 rounded-md"
                  />
                  {da.live ? (
                    <div className="text-center py-3 text-white bg-cyan-700 font-semibold">
                      <div>{da.label}</div>
                      <div className="text-xs mt-1">{da.countdown}</div>
                    </div>
                  ) : (
                    <div className="absolute bottom-0 left-0 right-0">
                      <Button className="w-full rounded-b-md text-white bg-red-700 hover:bg-red-700 text-sm">
                        Coming Soon...
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default GameCarossel;

const data = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379852/WhatsApp_Image_2025-07-11_at_23.06.26_c8ff9d1e_nxysh2.jpg",
    //   label: "USD 241 Million",
    // live: true,
    // countdown: "05:10:10",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379821/WhatsApp_Image_2025-07-11_at_23.05.23_3bca24d2_jw8pjp.jpg",
      
    
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379841/WhatsApp_Image_2025-07-11_at_23.05.56_3a48e1d9_vl1erg.jpg",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379829/WhatsApp_Image_2025-07-11_at_23.05.42_2679e630_w87fuu.jpg",
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png",
  },
];
