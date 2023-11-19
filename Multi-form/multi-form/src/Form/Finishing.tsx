

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

          <div></div>
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