

const Finishing = () => {
  return (
    <>
      <section className="pb-[40px]">
        <div className="mobileDevice:bg-[white] mobileDevice:w-[90%] mx-auto rounded-[10px] pb-[20px] px-[20px]">
          <div className="max-w-[450px] mb-[20px]">
            <h1 className="font-[600] text-[2rem] text-[hsl(213,96%,18%)] pt-[20px] mb-[10px]">
              Finishing up
            </h1>

            <p className="text-[1.45rem] text-[hsl(231,11%,63%)]">
              Double-check everything looks ok before confirming.
            </p>
          </div>

          <div className="bg-[hsl(217,100%,97%)] p-[15px] rounded-[8px]">
            <div className="flex justify-between items-center mb-[15px]">
              <div className="flex items-center gap-[20px]">
                <div>
                  <p className="font-[700] text-[20px] text-[hsl(213,96%,18%)]">
                    Arcade (monthly)
                  </p>
                  <p className="text-[hsl(231,11%,63%)] font-[600] underline cursor-pointer">
                    Change
                  </p>
                </div>
              </div>

              <p className="text-[hsl(213,96%,18%)] font-[600]">+$9/mo</p>
            </div>

            <hr />

            <div className="flex justify-between items-center my-[10px]">
              <div className="flex items-center gap-[20px]">
                <div>
                  <p className="text-[hsl(231,11%,63%)] font-[600]">
                    Online service
                  </p>
                </div>
              </div>

              <p className="text-[hsl(213,96%,18%)] font-[600]">+$9/mo</p>
            </div>

            <div className="flex justify-between items-center mb-[15px]">
              <div className="flex items-center gap-[20px]">
                <div>
                  <p className="text-[hsl(231,11%,63%)] font-[600]">
                    Local storage
                  </p>
                </div>
              </div>

              <p className="text-[hsl(213,96%,18%)] font-[600]">+$9/mo</p>
            </div>
          </div>

          <div className="flex justify-between items-center my-[10px] w-[95%] mx-auto">
            <div className="flex items-center gap-[20px]">
              <div>
                <p className="text-[hsl(231,11%,63%)] font-[600]">
                  Total (monthly)
                </p>
              </div>
            </div>

            <p className="text-[hsl(213,96%,18%)] font-[600]">+$9/mo</p>
          </div>
        </div>

        <div className="flex justify-between mt-[20px] Desktop:mt-[40px] px-[20px]">
          <button className="rounded-[5px] p-[10px] text-[hsl(231,11%,63%)] font-[600]">
            Go Back
          </button>

          <button className="bg-[hsl(213,96%,18%)] rounded-[5px] p-[10px] text-[white] font-[600]">
            Confirm
          </button>
        </div>
      </section>
    </>
  );
}

export default Finishing