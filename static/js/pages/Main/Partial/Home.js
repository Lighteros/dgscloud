import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import BareMetal from "../../../utils/json/BareMetal.json";
import CloudCompute from "../../../utils/json/CloudCompute.json";
import CloudDedicated from "../../../utils/json/CloudDedicated.json";
import CloudGpu from "../../../utils/json/CloudGpu.json";
import Dollar from "../../../utils/json/Dollar.json";

function Home() {
  const [statistic, setStatistic] = useState([]);
  const [totalCloudCompute, setTotalCloudCompute] = useState(0);
  const [totalCloudDedicated, setTotalCloudDedicated] = useState(0);
  const [totalCloudGPU, setTotalCloudGPU] = useState(0);
  const [totalBareMetal, setTotalBareMetal] = useState(0);

  const getStatistic = async () => {
    let data = await fetch("https://api.dcicloud.ai/stats");
    data = await data.json();

    data.data.forEach((cityData) => {
      setTotalCloudCompute((prev) => prev + parseFloat(cityData.cloudCompute));
      setTotalCloudDedicated(
        (prev) => prev + parseFloat(cityData.cloudDedicated)
      );
      setTotalCloudGPU((prev) => prev + parseFloat(cityData.cloudGPU));
      setTotalBareMetal((prev) => prev + parseFloat(cityData.bareMetal));
    });

    setStatistic(data);
  };

  useEffect(() => {
    getStatistic();
  }, []);
  const bareMetalOptions = {
    loop: true,
    autoplay: true,
    animationData: BareMetal,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const cloudComputeOptions = {
    loop: true,
    autoplay: true,
    animationData: CloudCompute,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const cloudDedicatedOptions = {
    loop: true,
    autoplay: true,
    animationData: CloudDedicated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const cloudGpuOptions = {
    loop: true,
    autoplay: true,
    animationData: CloudGpu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dollarOptions = {
    loop: true,
    autoplay: true,
    animationData: Dollar,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("0xComingSoon");
    alert("Success Copy Contract Address");
  };
  return (
    <div
      id="home"
      className="w-full gap-[24px] lg:gap-[60px] flex relative lg:flex-row flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[#A9D2F5] text-5xl font-bold lg:text-start text-center">
          Explore the DGS Services
        </h1>
        <p className="text-[#71A3CE] lg:text-start text-center">
          By leveraging smart contracts, DGS creates a marketplace for users to
          rent and share resources like server space, cloud computing, network
          capacity, and even GPU processing power. This fosters a collaborative
          community with a revenue-sharing model for token holders, addressing
          the growing need for scalable and decentralized infrastructure with
          on-demand access for all.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center w-full sm:w-[600px] lg:!w-[1500px] justify-evenly gap-10 text-[#71A3CE] py-[2rem] px-[4rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-lg">Cloud Compute</p>
          <div className="flex items-center justify-center gap-1">
            <Lottie options={cloudComputeOptions} height={50} width={50} />
            <h2 className="font-bold text-5xl">{totalCloudCompute}</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-lg">Cloud Dedicated</p>
          <div className="flex items-center justify-center gap-1">
            <Lottie options={cloudDedicatedOptions} height={50} width={50} />
            <h2 className="font-bold text-5xl">{totalCloudDedicated}</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-lg">Cloud GPU</p>
          <div className="flex items-center justify-center gap-1">
            <Lottie options={cloudGpuOptions} height={50} width={50} />
            <h2 className="font-bold text-5xl">{totalCloudGPU}</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-lg">Bare Metal</p>
          <div className="flex items-center justify-center gap-1">
            <Lottie options={bareMetalOptions} height={50} width={50} />
            <h2 className="font-bold text-5xl">{totalBareMetal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
