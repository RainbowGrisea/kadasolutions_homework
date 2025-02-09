function ProductCard() {
  return (
    <div className='flex items-center flex-col pt-2.5 px-3 w-[305px] h-[320px] border-[0.65px] rounded-[6px] bg-white border-[#DBDBDB] text-[#323232]'>
      <div className="relative bg-amber-500 w-[282px] h-[150px] rounded-[6.46px]">
        <div className="absolute right-[9px] top-[10px] flex items-center justify-center w-[83px] h-[30px] rounded-[14px] bg-[#6100FF] text-white text-[14px] leading-[19px] font-semibold">-12.96%</div>
      </div>
      <div className="flex w-[100%] justify-between">
        <span className="text-[20px] mt-[9px] font-semibold leading-[27px]">iPhone 9</span>
        <span className="text-[24px] mt-[6px] font-semibold leading-[32px]">549 $</span>
      </div>
      <div className="flex w-[100%]">
        <span className="w-[194px] h-[40px] mb-[13px] text-[14px] leading-[19px]">An apple mobile which is nothing like apple</span>
      </div>
      <button type="button" className="w-[282px] h-[41px] rounded-[26px] bg-black">
        <span className="text-white font-semibold text-[16px] leading-[22px]">See details</span>
      </button>
    </div>
  );
}

export default ProductCard;