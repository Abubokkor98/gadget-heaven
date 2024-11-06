import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-white space-y-4 mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-[80%] lg:w-[70%]">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-full md:w-[80%] lg:w-[50%] text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <NavLink
          to={"/dashboard"}
          className="btn bg-white text-purple-600 px-6 font-bold rounded-full text-sm md:text-lg"
        >
          Show Now
        </NavLink>
      </div>

      <div className="w-full md:w-[60%] mx-auto rounded-2xl p-5 border-2 border-slate-50 bg-white/25 absolute left-0 right-0 mt-8">
        <img
          src="../assets/banner.jpg"
          className="rounded-xl w-full h-[350px] md:h-[450px] object-cover"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
