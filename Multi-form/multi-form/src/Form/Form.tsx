import Aside from "./Aside";
import PersonalInfo from "./PersonalInfo"
import SelectPlan from "./SelectPlan";


const Form = () => {
  return (
    <>
      <section className="bg-[hsl(206,94%,87%)] min-h-[100vh] Desktop:flex Desktop:flex-col Desktop:items-center Desktop:justify-center">
        <form
          action=""
          method="get"
          className="Desktop:bg-[white] w-[100%] Desktop:w-[95%] max-w-[800px] mx-auto rounded-[10px]"
        >
          <div className="Desktop:flex Desktop:p-[15px]">
            <div className="Desktop:w-[44%]">
              <Aside />
            </div>

            <div className="Desktop:w-[%]  bg-sidebar-mobile ">
              <div className="py-[30px] flex gap-[45px] justify-center Desktop:hidden">
                <div className="flex justify-center items-center gap-[10px]">
                  <div className="bg-[hsl(206,94%,87%)] rounded-full px-[18px] py-[8px] font-[600] cursor-pointer">
                    <button className="">1</button>
                  </div>
                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 1</p>
                    <p className="font-[600]">Your Info</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <div className="rounded-full px-[16px] py-[8px] border-[1px] font-[600] text-[white] cursor-pointer">
                    <button className="">2</button>
                  </div>
                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 2</p>
                    <p className="font-[600]">Select Plan</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <div className="rounded-full px-[16px] py-[8px] border-[1px] font-[600] text-[white] cursor-pointer">
                    <button className="">3</button>
                  </div>
                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 3</p>
                    <p className="font-[600]">Add-ons</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <div className="rounded-full px-[16px] py-[8px] border-[1px] font-[600] text-[white] cursor-pointer">
                    <button className="">4</button>
                  </div>

                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 4</p>
                    <p className="font-[600]">summary</p>
                  </div>
                </div>
              </div>
              {/* <PersonalInfo /> */}
              <SelectPlan />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form