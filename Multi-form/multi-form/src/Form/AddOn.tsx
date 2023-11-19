

const AddOn = () => {
  return (
    <>
      <section className="pb-[40px]">
        <div className="mobileDevice:bg-[white] mobileDevice:w-[90%] mx-auto rounded-[10px] pb-[20px] px-[20px]">
          <div className="max-w-[450px] mb-[20px]">
            <h1 className="font-[600] text-[2rem] text-[hsl(213,96%,18%)] pt-[20px] mb-[10px]">
              Pick add-ons
            </h1>

            <p className="text-[1.45rem] text-[hsl(231,11%,63%)]">
              Add-ons help enhance your gaming experience.
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center border-[1px] border-[hsl(243,100%,62%)] rounded-[8px] p-[20px] mobileDevice:p-[10px]">
              <div className="flex items-center gap-[20px]">
                <div>
                  <input type="checkbox" name="" id="" className="" />
                </div>
                <div>
                  <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                    Online service
                  </p>
                  <p className="text-[hsl(231,11%,63%)] font-[400]">
                    Access to multiplayer games
                  </p>
                </div>
              </div>

              <p className="text-[hsl(243,100%,62%)]">+ $1/mo</p>
            </div>

            <div className="flex justify-between items-center border-[1px] border-[hsl(243,100%,62%)] rounded-[8px] p-[20px] mobileDevice:p-[10px]">
              <div className="flex items-center gap-[20px]">
                <div>
                  <input type="checkbox" name="" id="" className="" />
                </div>
                <div>
                  <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                    Local storage
                  </p>
                  <p className="text-[hsl(231,11%,63%)] font-[400]">
                    Extra 1TB of cloud save
                  </p>
                </div>
              </div>

              <p className="text-[hsl(243,100%,62%)]">+ $1/mo</p>
            </div>

            <div className="flex justify-between items-center border-[1px] border-[hsl(243,100%,62%)] rounded-[8px] p-[20px] mobileDevice:p-[10px]">
              <div className="flex items-center gap-[20px]">
                <div>
                  <input type="checkbox" name="" id="" className="" />
                </div>
                <div>
                  <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                    Customizable profile
                  </p>
                  <p className="text-[hsl(231,11%,63%)] font-[400]">
                    Custom theme on your profile
                  </p>
                </div>
              </div>

              <p className="text-[hsl(243,100%,62%)]">+ $1/mo</p>
            </div>
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

export default AddOn