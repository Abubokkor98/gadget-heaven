import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Banner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-white space-y-4 mt-8">
        <h1 className="lg:text-5xl  font-bold w-[70%] ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-[50%] ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <NavLink
          to={"/dashboard"}
          className="btn bg-white text-purple-600 px-6 font-bold rounded-full"
        >
          Shop Now
        </NavLink>
      </div>
      {/* herder banner */}
      <div className=" w-[60%] h- mx-auto rounded-2xl p-5 border-2 border-slate-50 bg-white/25 absolute left-0 right-0 mt-8">
        <img
          src='/banner.jpg'
          className="rounded-xl w-full h-[450px] object-cover"
          alt=""
        />
      </div>
    </>
  )
}
