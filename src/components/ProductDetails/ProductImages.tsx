import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Fragment } from "react/jsx-runtime";

export const ProductImages = ({ images }: { images: string[] }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ draggable: true }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
          renderBullet: (_, className) => {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        className={"w-[620px] h-[481px]"}
      >
        {images.map((image) => {
          return (
            <Fragment key={image}>
              <SwiperSlide key={image}>
                <img
                  src={image}
                  alt="product image"
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
      <div className="custom-pagination flex justify-center mt-[35px] gap-3" />
    </div>
  );
};

export default ProductImages;
