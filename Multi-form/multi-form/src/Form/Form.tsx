import Aside from "./Aside";
import PersonalInfo from "./PersonalInfo"


const Form = () => {
  return (
    <>
      <section className="bg-[hsl(206,94%,87%)] min-h-[100vh] Desktop:flex Desktop:flex-col Desktop:items-center Desktop:justify-center">
        <form
          action=""
          method="get"
          className="Desktop:bg-[white] w-[100%] max-w-[800px] mx-auto rounded-[10px] h-[600px]"
        >
          <div className="Desktop:flex Desktop:p-[15px]">
            <div className="Desktop:w-[44%]">
              <Aside />
            </div>

            <div className="Desktop:w-[46%]">
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