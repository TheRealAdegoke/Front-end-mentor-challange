

const PersonalInfo = () => {
  return (
    <>
      <section className="bg-sidebar-mobile mobileDevice:min-w-[100vw] mobileDevice:h-[200px]">
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

        <div className="mobileDevice:bg-[white] mobileDevice:w-[90%] mx-auto rounded-[10px] mobileDevice:h-[500px] px-[20px]">
          <div className="max-w-[450px] mb-[20px]">
            <h1 className="font-[600] text-[2rem] text-[hsl(213,96%,18%)] pt-[20px] mb-[10px]">
              Personal Info
            </h1>

            <p className="text-[1.45rem] text-[hsl(231,11%,63%)]">
              Please provide your name, email address, phone number
            </p>
          </div>

          <form action="">
            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label
                htmlFor="name"
                className="text-[hsl(213,96%,18%)] font-[600]"
              >
                Name
              </label>
              <input
                type="text"
                className="block border-[1px] border-[hsl(231,11%,63%)] rounded-[5px] px-[10px] text-[23px] py-[3px] outline-[hsl(213,96%,18%)]"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label
                htmlFor="name"
                className="text-[hsl(213,96%,18%)] font-[600]"
              >
                Email Address
              </label>
              <input
                type="email"
                className="block border-[1px] border-[hsl(231,11%,63%)] rounded-[5px] px-[10px] text-[23px] py-[3px] outline-[hsl(213,96%,18%)]"
                placeholder="John@mail.com"
              />
            </div>

            <div className="flex flex-col gap-[10px] mb-[10px]">
              <label
                htmlFor="name"
                className="text-[hsl(213,96%,18%)] font-[600]"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="block border-[1px] border-[hsl(231,11%,63%)] rounded-[5px] px-[10px] text-[23px] py-[3px] outline-[hsl(213,96%,18%)]"
                placeholder="+1 8843 9393 383"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PersonalInfo