import starEmpty from "../../assets/icons/star_empty.svg";
import starFilled from "../../assets/icons/star_filled.svg";

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center w-[210px]">
      <span className="flex min-w-[148px] h-[26px] gap-[4px] items-center mr-[14px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={index < Math.floor(rating) ? starFilled : starEmpty}
            alt={index < Math.floor(rating) ? "Filled star" : "Empty star"}
            width={26}
            height={26}
          />
        ))}
      </span>
      <span className="font-semibold text-[24px] leading-[32px]">{rating}</span>
    </div>
  );
}

export default Rating;
