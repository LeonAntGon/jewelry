import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../data/slide.css"
import { dataNews } from "../data/news";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#636363", zIndex:"10",
        borderRadius: "50px", filter: "drop-shadow(2px 4px 6px gray)"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#636363", zIndex:"10",
        borderRadius: "50px", filter: "drop-shadow(2px 4px 6px gray)"}}
        onClick={onClick}
      />
    );
  }

  
export default function News() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
            breakpoint: 782,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      return (
        <div className="text-center bg-coolwhite-100 pt-[40px] pb-[100px] border-t border-b border-black mt-[60px] ">
         <h2 className='text-xl font-semibold'>Novedades</h2>
            <div class="inline-block relative top-[-14px] w-3 h-1 bg-neutral-900 rounded-full "></div>
            <div className=" w-[80%] mx-auto mt-[50px]">
                <Slider {...settings}>
                    {dataNews.map((item) => (
                        <div className=" bg-gray- overflow-hidden">
                            <div className="">
                              <img  className="w-full rounded-lg" src={item.image} alt="imagen de novedad"/>
                            </div> 
                            <div className=" pt-2">
                               <p className="font-stylish opacity-50 text-sm">{item.category}</p>
                               <p className="font-stylish tracking-wider text-[14px]">{item.title}</p> 
                               <p className="font-stylish tracking-wider text-xs">{item.element}</p>
                               <p className="font-stylish font-bold text-[10px] pt-1">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}