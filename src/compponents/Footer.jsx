import React from "react";
import payments from "../assets/website/credit-cards.webp"
import { delay, motion, spring } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-orange-400">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 pt-3 gap-4 lg:p-[3rem] md:gap-4">

        {/* Group-1 */}
        <motion.div div className="flex flex-col items-start gap-4 p-3"
        whileInView={{
          y : [100 , 0],
          opacity : [0 , 1]
        }}
        transition={{
          delay : 0.3,
          type : spring,
          damping : 8,
          stiffness : 100
        }}
        >  
          <h1 className="text-white text-3xl font-bold">Lorem Cafe</h1>
          <p className="text-sm text-white lg:pr-[5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos cumque suscipit, blanditiis vero quam quidem. Sequi animi veniam dolore. Molestias impedit cupiditate, soluta veritatis asperiores hic ratione temporibus alias.
          </p>
          <p className="text-white">
            <i className="fa-solid fa-phone "></i> +91 80571-23654
          </p>
          <p className="text-white">
            <i class="fa-solid fa-location-dot"></i> Tajganj, Agra
          </p>
        </motion.div>

        {/* Group-2 */}
        <motion.div className="flex flex-col items-start gap-4 p-3"
        whileInView={{
          y : [100 , 0],
          opacity : [0 , 1]
        }}
        transition={{
          delay : 0.5,
          type : spring,
          damping : 8,
          stiffness : 100
        }}
        >
          <h1 className="text-white text-3xl font-bold">Quick links</h1>

          <div className="grid grid-cols-2 gap-[5rem]">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-white">Home</h2>
                <h2 className="text-white">About</h2>
                <h2 className="text-white">Contact Us</h2>
                <h2 className="text-white">Privacy Policy</h2>
            </div>

            <div className="flex flex-col items-start gap-3">
                <h2 className="text-white">Home</h2>
                <h2 className="text-white">About</h2>
                <h2 className="text-white">Contact Us</h2>
                <h2 className="text-white">Privacy Policy</h2>
            </div>
          </div>
        </motion.div>


        {/* Group-3 */}
        <motion.div className="flex flex-col items-start gap-2 p-3"
        whileInView={{
          y : [100 , 0],
          opacity : [0 , 1]
        }}
        transition={{
          delay : 0.7,
          type : spring,
          damping : 8,
          stiffness : 100
        }}
        >
          <h1 className="text-white text-3xl font-bold">Follow Us</h1>

          <div className="mt-1 space-x-4 pl-1">
            <i class="fa-brands fa-square-facebook text-3xl text-white"></i>
            <i class="fa-brands fa-instagram text-3xl text-white"></i>
            <i class="fa-brands fa-telegram text-3xl text-white"></i>
            <i class="fa-brands fa-youtube text-3xl text-white"></i>
          </div>

          <p className="mt-5 text-white text-xl font-bold">
            Payment Methods
          </p>

          <img src={payments} className="h-[20%] w-[80%]"></img>


        </motion.div>
      </div>
    
        <div className=" flex justify-center">
            <hr className="w-[95%] h-[1px] bg-white border-1 border-white "></hr>
        </div>

        <div className=" py-[2rem] flex justify-center items-center bg-orange-400">
            <h2 className=" text-white text-center text-sm">Copyright © 2024 Company Name. All rights reserved.</h2>
        </div>


    </div>
  );
};

export default Footer;
