import { useState } from "react";
import AddOn from "./AddOn";
import Aside from "./Aside";
import Completed from "./Completed";
import Finishing from "./Finishing";
import PersonalInfo from "./PersonalInfo"
import SelectPlan from "./SelectPlan";


const Form = () => {
  const [count, setCount] = useState(0)
  const [enabled, setEnabled] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [selectedPlanText, setSelectedPlanText] = useState("")
  const [selectedPlanType, setSelectedPlanType] = useState("")

  const getSelectedPlanText = (id: number) => {
    switch (id) {
      case 1:
        return enabled ? "$90/yr" : "$9/mo";
      case 2:
        return enabled ? "$120/yr" : "$12/mo";
      case 3:
        return enabled ? "$150/yr" : "$15/mo";
      default:
        return "";
    }
  };

  const getSelectedPlanName = (id: number) => {
    switch (id) {
      case 1:
        return "Arcade";
      case 2:
        return "Advance";
      case 3:
        return "Pro";
      default:
        return "";
    }
  };

  const getSelectedPlanType = () => {
    switch (enabled) {
      case false:
        return "monthly";
      case true:
        return "yearly";
      default:
        return "";
    }
  };


  return (
    <>
      <section className="bg-[hsl(206,94%,87%)] min-h-[100vh] Desktop:flex Desktop:flex-col Desktop:items-center Desktop:justify-center">
        <form
          action=""
          method="get"
          className="Desktop:bg-[white] w-[100%] Desktop:w-[95%] max-w-[800px] mx-auto rounded-[10px]"
        >
          <div className="Desktop:flex Desktop:p-[15px]">
            <div className="Desktop:w-[35%]">
              <Aside count={count} />
            </div>

            <div className="Desktop:w-[56%]  bg-sidebar-mobile ">
              <div className="py-[30px] flex gap-[45px] justify-center Desktop:hidden">
                <div className="flex justify-center items-center gap-[10px]">
                  <div
                    className={`${
                      count === 0
                        ? "bg-[hsl(206,94%,87%)]"
                        : "border-[1px] text-[white]"
                    } rounded-full px-[18px] py-[8px] font-[600] cursor-pointer`}
                  >
                    <button className="">1</button>
                  </div>
                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 1</p>
                    <p className="font-[600]">Your Info</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <div
                    className={`${
                      count === 1
                        ? "bg-[hsl(206,94%,87%)]"
                        : "border-[1px] text-[white]"
                    } rounded-full px-[16px] py-[8px] font-[600] cursor-pointer`}
                  >
                    <button className="">2</button>
                  </div>
                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 2</p>
                    <p className="font-[600]">Select Plan</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <div
                    className={`${
                      count === 2
                        ? "bg-[hsl(206,94%,87%)]"
                        : "border-[1px] text-[white]"
                    } rounded-full px-[16px] py-[8px] font-[600] cursor-pointer`}
                  >
                    <button className="">3</button>
                  </div>
                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 3</p>
                    <p className="font-[600]">Add-ons</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[10px]">
                  <div
                    className={`${
                      count === 3
                        ? "bg-[hsl(206,94%,87%)]"
                        : "border-[1px] text-[white]"
                    } rounded-full px-[16px] py-[8px] font-[600] cursor-pointer`}
                  >
                    <button className="">4</button>
                  </div>

                  <div className="text-[white] uppercase mobileDevice:hidden">
                    <p>step 4</p>
                    <p className="font-[600]">summary</p>
                  </div>
                </div>
              </div>
              {count === 0 && <PersonalInfo setCount={setCount} />}
              {count === 1 && (
                <SelectPlan
                  setCount={setCount}
                  getSelectedPlanText={getSelectedPlanText}
                  getSelectedPlanName={getSelectedPlanName}
                  getSelectedPlanType={getSelectedPlanType}
                  enabled={enabled}
                  setEnabled={setEnabled}
                  setSelectedPlanName={setSelectedPlanName}
                  setSelectedPlanText={setSelectedPlanText}
                  setSelectedPlanType={setSelectedPlanType}
                />
              )}
              {count === 2 && <AddOn setCount={setCount} />}
              {count === 3 && (
                <Finishing
                  setCount={setCount}
                  selectedPlanName={selectedPlanName}
                  selectedPlanText={selectedPlanText}
                  selectedPlanType={selectedPlanType}
                />
              )}
              {count === 4 && <Completed />}
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form