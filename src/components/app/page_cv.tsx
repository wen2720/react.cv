"use client";
import { LeftColumn, RightColumn } from "@/components";
import TestParticles from "@/components/app/particles_test";
import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';


const CvPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="h-screen w-full ">
      <TestParticles />
      {
        isMobile ? 
        (
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
          <div className="p-6 h-screen overflow-y-auto z-10">
            <LeftColumn />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="p-6 h-screen overflow-y-auto z-10">
            <RightColumn />
          </div>
          </SwiperSlide>
        </Swiper>
        ) 
        : 
        (
          <div className="flex h-screen w-full">
            <aside className="w-[33%] p-6 z-10">
              <LeftColumn />
            </aside>
            <main className="w-[67%] p-6 z-10">
              <RightColumn />
            </main>
          </div>
        )
      }
    </div>
  );
};

export default CvPage;
