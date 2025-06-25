'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const GameCarossel=()=>{
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <div className="mt-10 w-full px-4 ">
      <h1 className="text-center font-medium mb-10 text-2xl text-black">
        Explore betqix games
      </h1>

      <Slider {...settings}>
        {data.map((da) => (
          <div key={da.id} className="p-2">
            <Card className="rounded-md overflow-hidden">
              <div className="relative">
                <img
                  src={da.image}
                  alt="game"
                  className="h-[350px] w-full object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <Button className="w-full rounded-b-md text-white bg-red-700 hover:bg-red-700">
                    Coming Soon...
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
    )
}
export default GameCarossel;


const data=[
  {
     id:'1',
     image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875148/53644adc1cf6bbe4c3a0d66b80efa286aef97cbc_zif1l2.png',
},
  {
     id:'2',
     image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750876200/0c127471b8d6f365a9f047fd0d3988deae9ec8f9_1_cfgjaz.jpg',
},
  {
     id:'3',
     image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875073/4c1fcc18c89549743fc9a114f66ca40a5bfcdfe5_tyruch.png',
},
  {
     id:'4',
     image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875103/52afda72fe2a371b1abfb73bbf67cb9cbc140767_yjpen9.png',
},
  {
     id:'5',
     image:'https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875364/f32f6efd9fdf7ba4459c09b0f1618c561cf13d92_osnlto.png',
},
 
]