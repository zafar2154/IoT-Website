import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './kepengurusan.css';


const images = [
  {
    src: 'src/public/chairman.webp',
    href: 'https://www.instagram.com/p/DMNGCGvx6oq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/vice chairman.webp',
    href: 'https://www.instagram.com/p/DMNFizGxH8n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/academic advisor.webp',
    href: 'https://www.instagram.com/p/DMNFxi8RXV2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/chairman.webp',
    href: 'https://www.instagram.com/p/DMNGCGvx6oq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/vice chairman.webp',
    href: 'https://www.instagram.com/p/DMNFizGxH8n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/academic advisor.webp',
    href: 'https://www.instagram.com/p/DMNFxi8RXV2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];


const ImageSliderBPH = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const [swiperReady, setSwiperReady] = useState(false); // add trigger

  useEffect(() => {
    // Ensure refs are available before rendering Swiper
    setSwiperReady(true);
  }, []);

  useEffect(() => {
    // Paksa update swiper ketika semua gambar sudah dimuat
    if (imagesLoaded === images.length && swiperRef.current) {
      swiperRef.current.update();
    }
  }, [imagesLoaded]);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden relative h-[655px]">
      <div className='w-[95%]'>
        {swiperReady && (
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            speed={800}
            loop={true}
            centeredSlides={true}
            loopedSlides={images.length}
            watchSlidesProgress={true}
            watchSlidesVisibility={true}
            effect="coverflow"
            coverflowEffect={{
            rotate: 67.5,
            stretch: -20,
            depth: 100,
            modifier: 1,
            slideShadows: false
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
           onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible pb-10"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-[515px] w-[472px] rounded-[15px] overflow-hidden hover:scale-[1.02]  duration-[0.2s] bg-abu-sedang transition-transform">
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={`slide-${idx}`} className="w-full h-full object-fill" onLoad={() => setImagesLoaded(prev => prev + 1)} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      

      <div className="absolute h-[50%] px-[30px] top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-50 pointer-events-none">
        <div className='relative flex items-center justify-end h-full w-[200px] pointer-events-auto z-0 duration-[1s] translate-x-[-160px] group'>
          <img src="src/public/Chevron/chevron-left.webp" alt='kiri' className="top-1/2 -translate-y-1/2 absolute translate-x-[-50px] w-auto h-auto group-hover:translate-x-[40px] duration-[1s]"></img>
          <button ref={prevRef} className=" hover:cursor-pointer pointer-events-auto h-[80px] w-[50px] z-60"> 
          </button>
        </div>
        <div className='relative flex items-center  h-full w-[200px] pointer-events-auto z-0 duration-[1s] translate-x-[160px] group'>
          <img src="src/public/Chevron/chevron-right.webp" alt='kanan' className="top-1/2 -translate-y-1/2 absolute translate-x-[50px] w-auto h-auto group-hover:translate-x-[-40px] duration-[1s]"></img>
          <button ref={nextRef} className="hover:cursor-pointer h-[80px] w-[50px] z-60 pointer-events-auto">
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderBPH;
