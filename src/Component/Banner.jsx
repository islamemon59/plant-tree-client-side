import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/002/183/731/non_2x/set-of-illustrations-of-caring-for-a-tangerine-tree-vector.jpg",
    title: "Plant Trees, Save Earth",
    subtitle: "Join our green mission to restore nature.",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/043/422/151/non_2x/weekend-activity-flat-illustration-design-vector.jpg",
    title: "One Tree at a Time",
    subtitle: "Every small step makes a big impact.",
  },
  {
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/tree-plantation-by-kids-illustration-download-in-svg-png-gif-file-formats--gardening-on-garden-planting-trees-watering-ecology-pack-environments-illustrations-4177944.png?f=webp",
    title: "Green Today, Clean Tomorrow",
    subtitle: "Let’s build a greener future together.",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full h-[70vh] relative mt-4 rounded-xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center text-white px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
