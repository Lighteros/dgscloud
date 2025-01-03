import React from "react";
import { motion } from "framer-motion";

import LeftPc from "../../../assets/image/LeftPc.png";
import RightPc from "../../../assets/image/RightPc.png";
import LeftStorage from "../../../assets/image/LeftStorage.png";
import RightParticle from "../../../assets/image/RightParticle.png";
import LeftNetwork from "../../../assets/image/LeftNetwork.png";
import Pdf from "../../../assets/Whitepaper.pdf";
import CloudCompute from "../../../assets/video/DCICloudCompute.mp4";
import CloudGpu from "../../../assets/video/DCICloudGPU.mp4";
import CloudStorage from "../../../assets/video/DCICloudStorage.mp4";
import CloudKubernetes from "../../../assets/video/DCIKubernetes.mp4";
import CloudNetwork from "../../../assets/video/DCINetworking.mp4";
import { FaRegCircleCheck } from "react-icons/fa6";
import Board from "../../../assets/image/board.svg";

import {
  BareMetal,
  Cdn,
  DedicatedCpu,
  Direct,
  Load,
  NVIDIAA16,
  NVIDIAA40,
  NVIDIAGH200,
  SharedCpu,
  Storage1,
  Storage2,
  Storage3,
} from "../../../assets/svg";
import { FaCaretRight } from "react-icons/fa";

function Service() {
  return (
    <div
      id="services"
      className="w-full flex flex-col relative gap-[60px] justify-center mt-[60px] lg:mt-[140px] items-center"
    >
      {/* <div className="bg-[#0084ff32] --blur-effect absolute h-full rounded-[100%] lg:w-[500px]"></div> */}
      <div className="w-full flex items-center justify-center relative">
        <div className="w-full flex items-center justify-start absolute z-[-99]">
          <img src={LeftPc} alt="" className="w-[230px] opacity-40" />
        </div>
        <div className="w-[90%] relative z-40 max-w-[1320px] flex items-start justify-center">
          {/* <div className="--service-grad absolute hidden lg:block opacity-60 w-[90%] left-0 top-24 h-[50px]"></div> */}
          <div className="w-full flex items-center gap-4 relative z-10 flex-col md:flex-row justify-between !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient !p-8">
            <motion.div
              initial={{ translateX: -130, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full flex mt-3 lg:mt-0 relative order-2 md:order-1 flex-col items-start gap-4 justify-center text-white"
            >
              {/* <div className="--service-grad order-2 absolute lg:hidden opacity-60 w-[90%] left-0 top-0 z-[-999] h-[50px]"></div> */}
              <span className="font-bold text-[30px] sm:text-[40px] text-[#00E0FF]">
                DGS Cloud Compute
              </span>
              <span className="text-[#ffffffb0]">
                DGS offers a comprehensive suite of cloud solutions to perfectly
                match your needs. Whether you prioritize affordability, ease of
                use, or raw power, we have the ideal option for you.
              </span>
              <div className="flex items-center !p-0 flex-wrap justify-evenly w-full gap-y-2 lg:gap-x-6 text-xs lg:text-base gap-x-4 !bg-gradient-to-b !m-0  !from-[#FFFFFF1F] !to-[#73737303] rounded-[20px]">
                <div className="flex items-center gap-2 !px-6 !py-2 md:w-auto w-full">
                  <SharedCpu className="w-[30px]" />
                  <span className="text-[#00E0FF]">Shared CPU</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 md:w-auto w-full">
                  <DedicatedCpu className="w-[30px]" />
                  <span className="text-[#00E0FF]">Dedicated CPU</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 md:w-auto w-full">
                  <BareMetal className="w-[30px]" />
                  <span className="text-[#00E0FF]">Bare Metal</span>
                </div>
              </div>              
            </motion.div>
            <motion.div
              initial={{ translateX: 130, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="md:order-2 order-1 md:w-[40%] lg:w-fit"
            >
              <video
                className="w-full  rounded-lg lg:w-[500px]"
                loop
                autoPlay
                muted
              >
                <source src={CloudCompute} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative">
        <div className="w-full flex items-center justify-start absolute z-[-99]">
          <img src={RightPc} alt="" className="w-[230px] opacity-40" />
        </div>
        <div className="w-[90%] relative z-40 max-w-[1320px] flex items-start justify-center">
          {/* <div className="--service-grad absolute hidden lg:block opacity-60 w-[90%] left-0 top-24 h-[50px]"></div> */}
          <div className="w-full flex items-center relative gap-4 z-10 flex-col md:flex-row justify-between bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient !p-8">
            <motion.div
              initial={{ translateX: -130, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full flex mt-3 lg:mt-0 relative order-2 md:order-1 flex-col items-start gap-4 justify-center text-white"
            >
              {/* <div className="--service-grad order-2 absolute lg:hidden opacity-60 w-[90%] left-0 top-0 z-[-999] h-[50px]"></div> */}
              <span className="font-bold text-[30px] sm:text-[40px] text-[#00E0FF]">
                DGS Cloud GPU
              </span>
              <span className="text-[#ffffffb0]">
                DGS empowers everyone to access the latest AI and graphics
                technologies, unlocking new possibilities for your projects.
                Supercharge your AI and graphics applications with DGS's
                cloud-based GPUs.
              </span>
              <div className="grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 items-center !p-0 justify-start w-full gap-y-2 lg:gap-x-2 text-xs lg:text-base gap-x-4 !bg-gradient-to-b !m-0  !from-[#FFFFFF1F] !to-[#73737303] rounded-[20px]">
                <div className="flex items-center gap-2 !px-6 !py-2 w-full md:w-auto">
                  <img src={Board} alt="" className="w-[30px] h-[30px]" />
                  <span className="text-[#00E0FF]">NVIDIA GH200</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 w-full md:w-auto">
                  <img src={Board} alt="" className="w-[30px] h-[30px]" />
                  <span className="text-[#00E0FF]">NVIDIA A16</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 w-full md:w-auto">
                  <img src={Board} alt="" className="w-[30px] h-[30px]" />
                  <span className="text-[#00E0FF]">NVIDIA A40</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 w-full md:w-auto">
                  <img src={Board} alt="" className="w-[30px] h-[30px]" />
                  <span className="text-[#00E0FF]">NVIDIA L40S</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 w-full md:w-auto">
                  <img src={Board} alt="" className="w-[30px] h-[30px]" />
                  <span className="text-[#00E0FF]">NVIDIA A100</span>
                </div>
                <div className="flex items-center gap-2 !px-6 !py-2 w-full md:w-auto">
                  <img src={Board} alt="" className="w-[30px] h-[30px]" />
                  <span className="text-[#00E0FF]">NVIDIA H100</span>
                </div>
              </div>              
            </motion.div>
            <motion.div
              initial={{ translateX: 130, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="md:order-2 order-1 md:w-[40%] lg:w-fit"
            >
              <video
                className="w-full rounded-lg lg:w-[500px]"
                loop
                autoPlay
                muted
              >
                <source src={CloudGpu} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative">
        <div className="w-full flex items-center justify-start absolute z-[-99]">
          <img src={RightPc} alt="" className="w-[230px] opacity-40" />
        </div>
        <div className="w-[90%] relative z-40 max-w-[1320px] flex items-start justify-center">
          {/* <div className="--service-grad absolute hidden lg:block opacity-60 w-[90%] left-0 top-24 h-[50px]"></div> */}
          <div className="w-full flex gap-4 items-center relative z-10 flex-col md:flex-row justify-between bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient !p-8">
            <motion.div
              initial={{ translateX: -130, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full flex mt-3 lg:mt-0 relative order-2 md:order-1 flex-col items-start gap-4 justify-center text-white"
            >
              {/* <div className="--service-grad order-2 absolute lg:hidden opacity-60 w-[90%] left-0 top-0 z-[-999] h-[50px]"></div> */}
              <span className="font-bold text-[30px] sm:text-[40px] text-[#00E0FF]">
                DGS Proxy
              </span>
              <span className="text-[#ffffffb0]">
                DGSCloud offers robust and secure proxy server services designed
                to enhance online privacy, improve browsing speed, and ensure
                safe internet access. Our advanced proxy solutions cater to a
                wide range of needs, from personal browsing to enterprise-level
                security and content management.
              </span>
              <div className="flex items-center flex-wrap justify-evenly w-full gap-y-2 lg:gap-x-0 text-xs lg:text-base gap-x-4 !bg-gradient-to-b !m-0 !from-[#FFFFFF1F] !to-[#73737303] rounded-[20px] px-0 py-3">
                <div className="flex items-center gap-2 !px-2 !py-2 md:w-auto w-full">
                  <FaRegCircleCheck className="w-[30px] text-[#00E0FF]" />
                  <span className="text-[#00E0FF]">Privacy Protection</span>
                </div>
                <div className="flex items-center gap-2 !px-2 !py-2 md:w-auto w-full">
                  <FaRegCircleCheck className="w-[30px] text-[#00E0FF]" />
                  <span className="text-[#00E0FF]">Security Enhancement</span>
                </div>
                <div className="flex items-center gap-2 !px-2 !py-2 md:w-auto w-full">
                  <FaRegCircleCheck className="w-[30px] text-[#00E0FF]" />
                  <span className="text-[#00E0FF]">Access Flexibility</span>
                </div>
              </div>              
            </motion.div>
            <motion.div
              initial={{ translateX: 130, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="md:order-2 order-1 md:w-[40%] lg:w-fit"
            >
              <video
                className="w-full rounded-lg lg:w-[500px]"
                loop
                autoPlay
                muted
              >
                <source src={CloudNetwork} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
