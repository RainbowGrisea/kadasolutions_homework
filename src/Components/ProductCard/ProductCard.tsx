import { NavLink } from "react-router-dom";

function ProductCard({
  title,
  description,
  discountPercentage,
  price,
  thumbnail,
  id,
}: {
  title: string;
  description: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  id: number; 
}) {
  return (
    <div className="flex items-center flex-col pt-[10px] pb-[25px] px-3 w-[305px] h-[320px] border-[0.65px] rounded-[6px] bg-white border-[#DBDBDB] text-[#323232]">
      <div className="relative w-[282px] h-[150px] rounded-[6.46px]">
        <img
          className="rounded-[6.46px] object-cover w-full h-full"
          src={thumbnail}
          alt={`product ${title}`}
        />
        <div className="absolute right-[9px] top-[10px] flex items-center justify-center w-[83px] h-[30px] rounded-[14px] bg-[#6100FF] text-white text-[14px] leading-[19px] font-semibold">
          -{discountPercentage}%
        </div>
      </div>
      <div className="flex w-[100%] justify-between">
        <span className="h-[27px] text-[20px] mt-[9px] font-semibold leading-[27px] line-clamp-1">
          {title}
        </span>
        <span className="whitespace-nowrap h-[41px] text-[24px] mt-[6px] font-semibold leading-[32px]">
          {price} $
        </span>
      </div>
      <div className="flex w-[100%]">
        <span className="w-[194px] h-[40px] mb-[13px] text-[14px] leading-[19px] line-clamp-2">
          {description}
        </span>
      </div>
      <NavLink to={`/products/${id}`} className="w-[282px] h-[41px] rounded-[26px] bg-black flex items-center justify-center">
        <span className="text-white font-semibold text-[16px] leading-[22px]">
          See details
        </span>
      </NavLink>
    </div>
  );
}

export default ProductCard;
