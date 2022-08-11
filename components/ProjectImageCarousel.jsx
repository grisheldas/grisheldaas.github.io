import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";

const projects = require("../data/projects.json");

function ProjectImageCarousel() {
  function NextArrow({ onClick }) {
    return (
      <div
        className="p-1 rounded-full bg-white drop-shadow-md border-slate-50 border-[2px] text-2xl absolute bottom-[110px] -right-[70px]"
        onClick={onClick}
      >
        <HiOutlineChevronRight className="text-3xl text-primary" />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div
        className="p-1 rounded-full bg-white drop-shadow-md border-slate-50 border-[2px] text-2xl absolute bottom-[110px] -left-[70px]"
        onClick={onClick}
      >
        <HiOutlineChevronLeft className="text-3xl text-primary" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="w-100">
        <ul className="list-unstyled flex-row justify-content-center align-items-center mb-4">
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="mx-auto lg:w-[600px]">
      <Slider {...settings}>
        <div className="h-[260px] lg:h-[360px] dark:bg-indigo-200 bg-gray-900 rounded-lg overflow-hidden relative">
          <Image
            src={projects.projectList[0].imageLink}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ProjectImageCarousel;
