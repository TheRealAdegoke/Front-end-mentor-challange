import Aside from "./Aside";
import PersonalInfo from "./PersonalInfo"


const Form = () => {
  return (
    <>
      <section className="bg-[hsl(206,94%,87%)] min-h-[100vh] Desktop:flex Desktop:flex-col Desktop:items-center Desktop:justify-center">
        <form
          action=""
          method="get"
          className="Desktop:bg-[white] w-[100%] Desktop:w-[90%] max-w-[800px] mx-auto rounded-[10px] h-[600px]"
        >
          <div className="Desktop:flex Desktop:p-[15px]">
            <div className="Desktop:w-[44%]">
              <Aside />
            </div>

            <div className="Desktop:w-[46%] bg-sidebar-mobile ">
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
              <PersonalInfo />
              <div className="flex justify-end mt-[60px] px-[20px] mobileDevice:hidden">
                <button className="bg-[hsl(213,96%,18%)] rounded-[5px] p-[10px] text-[white] font-[600]">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="flex justify-end mt-[20px] px-[20px] Desktop:hidden">
          <button className="bg-[hsl(213,96%,18%)] rounded-[5px] p-[10px] text-[white] font-[600]">
            Next Step
          </button>
        </div>
      </section>
    </>
  );
}

export default Form