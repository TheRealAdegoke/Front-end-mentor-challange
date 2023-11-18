import Arcade from "./images/icon-arcade.svg"
import Advance from "./images/icon-advanced.svg";
import Pro from "./images/icon-pro.svg";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const SelectPlan = () => {
    const [enabled, setEnabled] = useState(false);

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

          <div className="flex gap-[30px] mobileDevice:flex-col">
            <div className="flex Desktop:flex-col gap-[10px] border-[1px] border-[hsl(243,100%,62%)] rounded-[8px] p-[20px] mobileDevice:p-[10px]">
              <div>
                <img src={Arcade} alt="" className="block" />
              </div>

              <div>
                <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                  Arcade
                </p>
                <p className="text-[hsl(231,11%,63%)] font-[400]">$90/yr</p>
                <p className="font-[400] text-[hsl(213,96%,18%)]">
                  2 months free
                </p>
              </div>
            </div>

            <div className="flex Desktop:flex-col gap-[10px] border-[1px] border-[hsl(243,100%,62%)] rounded-[8px] p-[20px] mobileDevice:p-[10px]">
              <div>
                <img src={Advance} alt="" className="block" />
              </div>

              <div>
                <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                  Advance
                </p>
                <p className="text-[hsl(231,11%,63%)] font-[400]">$90/yr</p>
                <p className="font-[400] text-[hsl(213,96%,18%)]">
                  2 months free
                </p>
              </div>
            </div>

            <div className="flex Desktop:flex-col gap-[10px] border-[1px] border-[hsl(243,100%,62%)] rounded-[8px] p-[20px] mobileDevice:p-[10px]">
              <div>
                <img src={Pro} alt="" className="block" />
              </div>

              <div>
                <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                  Pro
                </p>
                <p className="text-[hsl(231,11%,63%)] font-[400]">$90/yr</p>
                <p className="font-[400] text-[hsl(213,96%,18%)]">
                  2 months free
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[20px] my-[30px]">
            <p className="font-[700] text-[hsl(213,96%,18%)]">Monthly</p>
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
            <p className="font-[700] text-[hsl(231,11%,63%)]">Yearly</p>
          </div>
        </div>

        <div className="flex justify-between mt-[20px] Desktop:mt-[40px] px-[20px]">
          <button className="rounded-[5px] p-[10px] text-[hsl(231,11%,63%)] font-[600]">
            Go Back
          </button>

          <button className="bg-[hsl(213,96%,18%)] rounded-[5px] p-[10px] text-[white] font-[600]">
            Next Step
          </button>
        </div>
      </section>
    </>
  );
}

export default SelectPlan