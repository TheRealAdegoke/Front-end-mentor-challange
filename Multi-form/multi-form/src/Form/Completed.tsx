import checked from "./images/icon-thank-you.svg"

const Completed = () => {
  return (
    <>
      <section className="pb-[40px]">
        <div className="mobileDevice:bg-[white] mobileDevice:w-[90%] mx-auto rounded-[10px] flex flex-col justify-center items-center gap-[15px] p-[40px] text-center">
          <img src={checked} alt="" className="block w-[70px]" />

          <p className="font-[700] text-[22px] text-[hsl(213,96%,18%)]">
            Thank you!
          </p>

          <p className="font-[500] text-[19px] text-[hsl(231,11%,63%)]">
            Thanks for confirming your subscription! we hope you have fun using
            our platform. If you ever need support please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </section>
    </>
  );
}

export default Completed