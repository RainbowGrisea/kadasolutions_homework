import { DetailsProps } from "../../types/DetailsProps";
import Rating from "./Rating";

function Details ({ title, description, price, discountPercentage, rating, stock, brand, category }: DetailsProps) {
  return (
    <div className="flex flex-col justify-center w-[619px] h-[481px]">
      <div className="flex items-center">
        <span className="h-[65px] font-semibold text-[48px] leading-[65px] text-[#323232] line-clamp-1">{title}</span>
        <Rating rating={rating} />
      </div>      
      <div className="w-[400px] font-medium text-[24px] leading-[32px] line-clamp-2 mb-[16px]">{description}</div>
      <div className="flex flex-col font-medium text-[24px] leading-[32px] line-clamp-2 text-black/60 mb-[27px]">
        <div className="mb-[13px]">Stock: {stock}</div>
        <div className="mb-[10px]">Brand: {brand}</div>
        <div>Category: {category}</div>
      </div>
      <div className="w-[122px] h-[44px] flex items-center justify-center rounded-[20px] bg-[#6100FF] text-white text-[20px] leading-[27px] font-semibold mb-[6px]">
        -{discountPercentage}%
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[64px] font-semibold leading-[86px]">
          {price} $
        </span>
        <button type="button" className="w-[267px] h-[65px] rounded-[30px] bg-black flex items-center justify-center text-white font-semibold text-[28px] leading-[38px]">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Details;
