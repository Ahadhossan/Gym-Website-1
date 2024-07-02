import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaInternetExplorer } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-8 text-white bg-slate-950 md:pt-0">
      <div className="flex flex-col justify-center gap-5 p-8 px-5 md:flex-row md:gap-24 md:px-32">
        <div className="w-full space-y-4 md:w-1/4">
          <span className="text-3xl font-bold ">Flex</span>
          <span className="text-3xl font-bold text-orange-500 ">Force</span>

          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            optio nam officiis dolor, nobis consequuntur.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="pt-5 pb-4 text-2xl font-medium md:pt-0">
            Quick Contacts
          </h1>
          <div className="space-y-2 ">
            <div className="flex items-center gap-3">
              <FaLocationDot size={23} />
              <p className="text-sm ">
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail size={23} />
              <p className="text-sm ">help@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <IoMdCall size={23} />
              <p className="text-sm ">+8801234567890</p>
            </div>
            <div className="flex items-center gap-3">
              <FaInternetExplorer size={23} />
              <p className="text-sm ">www.gym.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-2xl font-medium md:pt-0">
            Popular Tags
          </h1>
          <div className="space-y-5 ">
            <h3 className="font-medium text-center uppercase transition-all cursor-pointer ring-2 ring-slate-500 hover:bg-orange-500">
              Workout
            </h3>
            <h3 className="font-medium text-center uppercase transition-all cursor-pointer ring-2 ring-slate-500 hover:bg-orange-500">
              Trainers
            </h3>
            <h3 className="font-medium text-center uppercase transition-all cursor-pointer ring-2 ring-slate-500 hover:bg-orange-500">
              Nutrition
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
