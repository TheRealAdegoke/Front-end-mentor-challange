

const PersonalInfo = () => {
  return (
    <>
      <section className="mobileDevice:min-w-[100vw]">
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

        <div className="flex justify-end mt-[20px] Desktop:mt-[40px] px-[20px]">
          <button className="bg-[hsl(213,96%,18%)] rounded-[5px] p-[10px] text-[white] font-[600]">
            Next Step
          </button>
        </div>
      </section>
    </>
  );
}

export default PersonalInfo