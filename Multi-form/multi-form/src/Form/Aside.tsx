import React from "react";

interface MyComponentProps {
  count: number;
}

const Aside: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      <aside className="aside h-[568px] mobileDevice:hidden">
        <div className="pt-[30px] flex gap-[25px] flex-col items-start pl-[40px]">
          <div className="flex justify-center items-center gap-[10px]">
            <div
              className={`${
                count === 0
                  ? "bg-[hsl(206,94%,87%)]"
                  : "border-[1px] text-[white]"
              } rounded-full px-[17px] py-[8px] font-[600] cursor-pointer`}
            >
              <button className="">1</button>
            </div>
            <div className="text-[white] uppercase">
              <p>step 1</p>
              <p className="font-[600]">Your Info</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[10px]">
            <div className={`${
                count === 1
                  ? "bg-[hsl(206,94%,87%)]"
                  : "border-[1px] text-[white]"
              } rounded-full px-[16px] py-[8px] font-[600] cursor-pointer`}>
              <button className="">2</button>
            </div>
            <div className="text-[white] uppercase">
              <p>step 2</p>
              <p className="font-[600]">Select Plan</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[10px]">
            <div className={`${
                count === 2
                  ? "bg-[hsl(206,94%,87%)]"
                  : "border-[1px] text-[white]"
              } rounded-full px-[16px] py-[8px] font-[600] cursor-pointer`}>
              <button className="">3</button>
            </div>
            <div className="text-[white] uppercase">
              <p>step 3</p>
              <p className="font-[600]">Add-ons</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[10px]">
            <div className={`${
                count === 3
                  ? "bg-[hsl(206,94%,87%)]"
                  : "border-[1px] text-[white]"
              } rounded-full px-[16px] py-[8px] font-[600] cursor-pointer`}>
              <button className="">4</button>
            </div>

            <div className="text-[white] uppercase">
              <p>step 4</p>
              <p className="font-[600]">summary</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
