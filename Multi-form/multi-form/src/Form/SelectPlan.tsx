import Arcade from "./images/icon-arcade.svg"
import Advance from "./images/icon-advanced.svg";
import Pro from "./images/icon-pro.svg";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

interface MyComponentProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  enabled: boolean;
  selectedPlanName: string;
  setSelectedPlanName: React.Dispatch<React.SetStateAction<string>>;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  getSelectedPlanText: (id: number) => string;
  getSelectedPlanName: (id: number) => string;
}

const SelectPlan: React.FC<MyComponentProps> = ({
  setCount,
  enabled,
  selectedPlanName,
  setEnabled,
  setSelectedPlanName,
  getSelectedPlanText,
  getSelectedPlanName,
}) => {
  const [plan, setPlan] = useState([
    { id: 1, isChosen: false },
    { id: 2, isChosen: false },
    { id: 3, isChosen: false },
  ]);

  const handleSelectedPlan = (id: number) => {
    const planName = getSelectedPlanName(id);
    const updatedPlan = plan.map((item) => ({
      ...item,
      isChosen: item.id === id,
    }));

    setPlan(updatedPlan);
    setSelectedPlanName(planName)

    // Console log the selected plan text
    console.log("Selected Plan Text:", getSelectedPlanText(id));
    console.log("Selected Plan Name:", getSelectedPlanName(id));
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

  console.log(getSelectedPlanType());

  return (
    <>
      <section className="pb-[40px]">
        <div className="mobileDevice:bg-[white] mobileDevice:w-[90%] mx-auto rounded-[10px] pb-[20px] px-[20px]">
          <div className="max-w-[450px] mb-[20px]">
            <h1 className="font-[600] text-[2rem] text-[hsl(213,96%,18%)] pt-[20px] mb-[10px]">
              Select your plan
            </h1>

            <p className="text-[1.45rem] text-[hsl(231,11%,63%)]">
              You have the option of monthly or yearly billing.
            </p>
          </div>

          <p>{selectedPlanName}</p>

          <div className="flex gap-[20px] mobileDevice:flex-col">
            {plan.map((item) => (
              <div
                key={item.id}
                className={`flex Desktop:flex-col gap-[10px] Desktop:min-w-[130px] border-[1px] ${
                  item.isChosen
                    ? "border-[hsl(243,100%,62%)] rounded-[8px] cursor-pointer bg-[hsl(217,100%,97%)]"
                    : "rounded-[8px] cursor-pointer"
                } p-[20px] mobileDevice:p-[10px]`}
                onClick={() => handleSelectedPlan(item.id)}
              >
                <div>
                  {item.id === 1 && (
                    <img src={Arcade} alt="" className="block" />
                  )}
                  {item.id === 2 && (
                    <img src={Advance} alt="" className="block" />
                  )}
                  {item.id === 3 && <img src={Pro} alt="" className="block" />}
                </div>

                <div>
                  <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                    {item.id === 1 && "Arcade"}
                    {item.id === 2 && "Advance"}
                    {item.id === 3 && "Pro"}
                  </p>
                  <p className="text-[hsl(231,11%,63%)] font-[500]">
                    <span className={`${enabled ? "hidden" : "block"}`}>
                      {item.id === 1 && "$9/mo"}
                    </span>
                    <span className={`${enabled ? "block" : "hidden"}`}>
                      {item.id === 1 && "$90/yr"}
                    </span>

                    <span className={`${enabled ? "hidden" : "block"}`}>
                      {item.id === 2 && "$12/mo"}
                    </span>
                    <span className={`${enabled ? "block" : "hidden"}`}>
                      {item.id === 2 && "$120/yr"}
                    </span>

                    <span className={`${enabled ? "hidden" : "block"}`}>
                      {item.id === 3 && "$15/mo"}
                    </span>
                    <span className={`${enabled ? "block" : "hidden"}`}>
                      {item.id === 3 && "$150/yr"}
                    </span>
                  </p>
                  <p
                    className={`${
                      enabled ? "block" : "hidden"
                    } font-[600] text-[hsl(213,96%,18%)]`}
                  >
                    2 months free
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-[20px] my-[30px]">
            <p
              className={`${
                enabled ? "text-[hsl(231,11%,63%)]" : "text-[hsl(213,96%,18%)]"
              } font-[700]`}
            >
              Monthly
            </p>
            <div className="">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-[hsl(213,96%,18%)]" : "bg-[hsl(213,96%,18%)]"
                }
          relative inline-flex items-center h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <p
              className={`${
                enabled ? "text-[hsl(213,96%,18%)]" : "text-[hsl(231,11%,63%)]"
              } font-[700]`}
            >
              Yearly
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-[20px] Desktop:mt-[40px] px-[20px]">
          <button
            className="rounded-[5px] p-[10px] text-[hsl(231,11%,63%)] font-[600]"
            onClick={(e) => {
              e.preventDefault();
              setCount((nextCount) => nextCount - 1);
            }}
          >
            Go Back
          </button>

          <button
            className="bg-[hsl(213,96%,18%)] rounded-[5px] p-[10px] text-[white] font-[600]"
            onClick={(e) => {
              e.preventDefault();
              setCount((nextCount) => nextCount + 1);
            }}
          >
            Next Step
          </button>
        </div>
      </section>
    </>
  );
};

export default SelectPlan
