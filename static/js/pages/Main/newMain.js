/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useRef } from "react";
import Footer from "./Partial2/Footer2";
import Navbar from "./Partial2/Navbar2";
import Ellipse from "../../assets/image/circle.png";
import Usdt from "../../assets/image/usdt.svg";
import Eth from "../../assets/image/eth.svg";
import Document from "../../assets/image/document.svg";
import Document2 from "../../assets/image/Document2.svg";
import Compare from "../../assets/image/Compare.png";
import Box from "../../assets/image/box.svg";
import Box2 from "../../assets/image/box2.svg";
import Box3 from "../../assets/image/box3.svg";
import Box4 from "../../assets/image/box4.svg";
import Gpu1 from "../../assets/image/GPU1.svg";
import Gpu2 from "../../assets/image/GPU2.svg";
import Gpu3 from "../../assets/image/GPU3.svg";
import Roadmap from "../../assets/image/Roadmap.svg";
import Roadmap2 from "../../assets/image/Roadmap2.svg";
import Comp1 from "../../assets/image/Comp1.svg";
import Comp2 from "../../assets/image/Comp2.svg";
import Comp3 from "../../assets/image/Comp3.svg";
import Lottie from "react-lottie";
import BareMetal from "../../utils/json/BareMetal.json";
import CloudCompute from "../../utils/json/CloudCompute.json";
import CloudDedicated from "../../utils/json/CloudDedicated.json";
import CloudGpu from "../../utils/json/CloudGpu.json";
import Dollar from "../../utils/json/Dollar.json";
import Pie1 from "../../assets/image/pie1.svg";
import Pie2 from "../../assets/image/pie2.svg";
import Pie3 from "../../assets/image/pie3.svg";
import Pie4 from "../../assets/image/pie4.svg";
import Tutorial from "../../assets/video/main tutorial with music 2.mp4";
import CircleShadow from "../../assets/image/circleshadow.png";
import Solana from "../../assets/image/Solana.svg";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../utils/contractAbi";
import { Web3 } from "web3";

export default function newMain() {
  const videoRef = useRef(null);
  const [statistic, setStatistic] = useState([]);
  const [totalCloudCompute, setTotalCloudCompute] = useState(0);
  const [totalCloudDedicated, setTotalCloudDedicated] = useState(0);
  const [totalCloudGPU, setTotalCloudGPU] = useState(0);
  const [totalBareMetal, setTotalBareMetal] = useState(0);
  const [pieActive, setPieActive] = useState(0);
  const [documentActive, setDocumentActive] = useState([false, false, false]);
  const [reflection, setReflection] = useState(0);

  const connectContract = async () => {
    const price = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=decentralized-cloud-infra&vs_currencies=usd"
    ).then((res) => res.json());
    const priceDCIUSD = price["decentralized-cloud-infra"]["usd"];
    var w3 = new Web3(
      "https://mainnet.infura.io/v3/b612c14cc3544b949550ffed3d6c85d5"
    );
    var contract2 = new w3.eth.Contract(abi, contractAddress);
    var tSupply = await contract2.methods.totalSupply().call();
    var rSupply = await contract2.methods._totalProportion().call();
    let reflectedDCI2 = tSupply - rSupply;
    reflectedDCI2 = ethers.formatEther(reflectedDCI2);
    var totalReflectedInUSD = reflectedDCI2 * priceDCIUSD;
    setReflection(totalReflectedInUSD);
  };

  useEffect(() => {
    connectContract();
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.oncanplaythrough = () => {
        videoElement.play();
      };
    }
  }, []);

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

  const changeDocument = (index) => {
    let temp = [...documentActive];
    temp[index] = !temp[index];
    setDocumentActive(temp);
  };

  return (
    <section className="min-h-screen bg-linear pb-[2rem] flex flex-col items-center justify-between w-full">
      <Navbar></Navbar>
      <main className="mt-[5rem]">
        <section className="flex items-center justify-center gap-4 flex-col px-[2rem] lg:px-[8rem]">
          <h2 className="text-[#71A3CE] text-[20px] xs:text-[30px] lg:text-[45px] font-bold uppercase">
            Unleash the Power of
          </h2>
          <h1 className="text-[#71A3CE] leading-[0.5] text-4xl xs:text-6xl lg:text-8xl font-bold mb-[1rem]">
            DECENTRALIZATION
          </h1>
          <p className="text-[#71A3CE] text-[15px] xs:text-[15px] lg:text-[25px] w-[65%] text-center">
            Secure, Scalable, and Cost-Effective Cloud Solutions.{" "}
            <br className="xs:block hidden" /> Take Control of Your Cloud
            Infrastructure Now
          </p>
        </section>
        <section className="flex flex-col items-center gap-[4rem] justify-center mt-[4rem] relative">
          <div className="absolute top-[0px] left-1/2 translate-x-[-50%]">
            <img
              src={CircleShadow}
              alt="sdvsdvs"
              className="animate-spin-pulse "
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="w-[140px] hover:text-[#00E0FF] text-[#71A3CE] text-xl py-[0.5rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] px-[1rem] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
              Community
            </button>
            <button className="w-[140px] hover:text-[#00E0FF] text-[#71A3CE] text-xl py-[0.5rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] px-[1rem] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
              Platform
            </button>
          </div>
          <div className="[&>*]:min-w-[120px] flex-wrap flex items-center w-full xl:w-[70%] 2xl:w-[60%] justify-evenly gap-10 text-[#71A3CE] py-[2rem] px-[4rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
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
                <Lottie
                  options={cloudDedicatedOptions}
                  height={50}
                  width={50}
                />
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
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-lg">Total Cost</p>
              <div className="flex items-center justify-center gap-1">
                <Lottie options={dollarOptions} height={50} width={50} />
                <h2 className="font-bold text-5xl">
                  {statistic?.totalRentCost}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-[#ffffff] text-3xl">Total Reflection</p>
            <h2 className="text-[#00E0FF] text-6xl font-bold">
              ${Number(Number(reflection).toFixed(2)).toLocaleString("en-US")}
            </h2>
          </div>
          <div className="flex items-center xl:w-auto w-full justify-center before:rounded-[20px] after:rounded-[20px] !rounded-[20px] flex-col gap-3 py-[2rem] px-[4rem] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
            <h2 className="text-[#00E0FF] text-4xl my-[2rem] font-semibold text-center">
              Fulfill your requirements effortlessly
            </h2>
            <div className="flex flex-wrap gap-4 w-fit items-stretch justify-center">
              <div className="flex flex-col justify-between gap-4 max-w-[350px] border border-[#E7E7E780] p-8 rounded-[20px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#A4D5FF] text-2xl font-semibold">
                    Instant payment (USDT & ETH)
                  </h3>
                  <p className="text-[#71A3CE]">
                    Enjoy instant purchases of our services worldwide with USDT,
                    ETH & SOL for a seamless experience.
                  </p>
                </div>
                <div className="flex items-start justify-start gap-4">
                  <div className="group p-[1rem] !m-0 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                    <img
                      src={Usdt}
                      alt="sdv"
                      className="group-hover:-translate-y-2 transition-all duration-300 group-hover:cursor-pointer"
                    />
                  </div>
                  <div className="group p-[1rem] !m-0 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                    <img
                      src={Eth}
                      alt="sdv"
                      className="group-hover:-translate-y-2 transition-all duration-300 group-hover:cursor-pointer"
                    />
                  </div>
                  <div className="group p-[1rem] !m-0 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                    <img
                      src={Solana}
                      alt="sdv"
                      className="group-hover:-translate-y-2 transition-all duration-300 group-hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 max-w-[350px] border border-[#E7E7E780] p-8 rounded-[20px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#A4D5FF] text-2xl font-semibold">
                    Services customized to your needs
                  </h3>
                  <p className="text-[#71A3CE]">
                    We prioritize understanding your needs and budget, Our
                    customizable services ensure cost-effective solutions that
                    meet your specific needs that deliver optimal outcomes.
                  </p>
                </div>
                <div className="[&>*]:relative [&>*]:z-[2] flex flex-col !m-0 !mt-auto items-start justify-start gap-4 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                  <input type="range" className="w-[70%]"></input>
                  <input type="range"></input>
                  <input type="range" className="w-[90%]"></input>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 max-w-[350px] border border-[#E7E7E780] p-8 rounded-[20px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#A4D5FF] text-2xl font-semibold">
                    A diverse selection of product services
                  </h3>
                  <p className="text-[#71A3CE]">
                    Recognizing the diversity of your needs and preferences, we
                    provide services that can be tailored to your specific
                    requirements.
                  </p>
                </div>
                <div className="flex items-start justify-start gap-4">
                  {documentActive[0] === true ? (
                    <img
                      src={Document2}
                      alt="sdv"
                      className="relative z-20"
                      onClick={() => changeDocument(0)}
                    />
                  ) : (
                    <img
                      src={Document}
                      alt="sdv"
                      className="relative z-20"
                      onClick={() => changeDocument(0)}
                    />
                  )}
                  {documentActive[1] === true ? (
                    <img
                      src={Document2}
                      alt="sdv"
                      className="relative z-20"
                      onClick={() => changeDocument(1)}
                    />
                  ) : (
                    <img
                      src={Document}
                      alt="sdv"
                      className="relative z-20"
                      onClick={() => changeDocument(1)}
                    />
                  )}
                  {documentActive[2] === true ? (
                    <img
                      src={Document2}
                      alt="sdv"
                      className="relative z-20"
                      onClick={() => changeDocument(2)}
                    />
                  ) : (
                    <img
                      src={Document}
                      alt="sdv"
                      className="relative z-20"
                      onClick={() => changeDocument(2)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="bg-compare rounded-[30px] gap-8 p-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center justify-items-center min-h-[500px] mt-[5rem] w-full"
        >
          <div className="w-full lg:w-[70%]">
            <h2 className="text-[#00E0FF] text-4xl font-semibold lg:text-left text-center">
              Secure, Scalable and Cost-Effective
            </h2>
            <p className="text-[#71A3CE] lg:text-left text-center">
              Diverse and most complete resource sharing
            </p>
          </div>
          <img
            src={Compare}
            alt=""
            className="w-full xs:w-[75%] sm:w-[50%] lg:w-[85%]"
          />
        </section>
        <section className="mt-[8rem] flex flex-col items-center justify-center">
          <h2 className="text-[#00E0FF] text-4xl text-center mb-[1.2rem] font-semibold">
            Unlock the power of <br /> Decentralized Cloud on Ethereum
          </h2>
          <p className="text-[#71A3CE] text-center">
            By leveraging smart contracts, DGS creates a marketplace for users
            to rent and share resources like server space, cloud computing,
            network capacity, and even GPU processing power. This fosters a
            collaborative community with a revenue-sharing model for token
            holders, addressing the growing need for scalable and decentralized
            infrastructure with on-demand access for all.
          </p>
          <div className="grid grid-cols-1 mdl:grid-cols-2 gap-5">
            <div className="flex flex-col items-center justify-start !bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient xl:!pl-0">
              <div className="w-full flex xl:flex-row flex-col justify-between items-center p-4 xl:pl-0 gap-4">
                <img src={Box} alt="" className="xl:block hidden" />
                <img src={Box2} alt="" className="block xl:hidden" />
                <div className="flex flex-col gap-4 w-full">
                  <h2 className="text-[#00E0FF] text-2xl font-semibold">
                    Cloud Computing
                  </h2>
                  <p className="text-[#71A3CE] text-sm">
                    DGS offers a comprehensive suite of cloud solutions to
                    perfectly match your needs. Whether you prioritize
                    affordability, ease of use, or raw power, we have the ideal
                    option for you.
                  </p>
                  <div className="gap-4 flex items-center justify-center flex-col w-full">
                    <div className="flex w-full rounded-[20px] p-4 items-center gap-2 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303]">
                      <img src={Comp1} alt="ascad" className="w-[35px]" />
                      <p className="text-[#00E0FF]">Shared CPU</p>
                    </div>
                    <div className="flex w-full rounded-[20px] p-4 items-center gap-2 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303]">
                      <img src={Comp2} alt="ascad" className="w-[35px]" />
                      <p className="text-[#00E0FF]">Dedicated CPU</p>
                    </div>
                    <div className="flex w-full rounded-[20px] p-4 items-center gap-2 !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303]">
                      <img src={Comp3} alt="ascad" className="w-[35px]" />
                      <p className="text-[#00E0FF]">Bare Metal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center !bg-gradient-to-r xl:!pl-0 !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
              <div className="w-full flex xl:flex-row flex-col justify-between items-center p-4 xl:!pl-0 gap-4">
                <img src={Box3} alt="" className="xl:block hidden" />
                <img src={Box4} alt="" className="block xl:hidden" />
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#00E0FF] text-2xl font-semibold">
                    Cloud GPU
                  </h2>
                  <p className="text-[#71A3CE] text-sm">
                    DGS empowers everyone to access the latest AI and graphics
                    technologies, unlocking new possibilities for your projects.
                    Supercharge your AI and graphics applications with DGS's
                    cloud-based GPUs.
                  </p>
                  <div className="gap-4 rounded-[20px] w-full flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 rounded-[20px] w-full !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] p-4">
                      <img src={Gpu1} alt="ascad" className="w-[35px]" />
                      <p className="text-[#00E0FF]">NVIDIA GH200</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-[20px] w-full !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] p-4">
                      <img src={Gpu2} alt="ascad" className="w-[35px]" />
                      <p className="text-[#00E0FF]">NVIDIA A16</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-[20px] w-full !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] p-4">
                      <img src={Gpu3} alt="ascad" className="w-[35px]" />
                      <p className="text-[#00E0FF]">NVIDIA A40</p>
                    </div>
                  </div>
                  <a
                    href="/service/#service"
                    className="text-[#00E0FF] text-right relative z-20"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full mt-[10rem]">
          <h2 className="text-[#00E0FF] text-4xl mb-[3rem] font-bold">
            How to use it
          </h2>
          <div className="flex flex-wrap items-stretch justify-center max-w-auto sm:[&>*]:max-w-[250px]">
            <div className="!bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient flex flex-col gap-4 p-8">
              <div className="text-3xl w-[55px] h-[55px] flex items-center justify-center text-[#A4D5FF] !m-0 !p-0 !bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                1
              </div>
              <h2 className="text-[#A4D5FF] text-2xl text-[1.6rem]">
                Go to our dApp
              </h2>
              <a
                className="bg-[#09B092] px-4 py-2 rounded-[10px] relative z-20 w-fit text-[#101F2D] font-bold"
                href="https://app-dgscloud.vercel.app/"
              >
                https://app-dgscloud.vercel.app/
              </a>
              <p className="text-[#71A3CE]">
                Access DGS dApps. It can be accessed through a website or mobile
                application.
              </p>
            </div>
            <div className="!bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient flex flex-col gap-4 p-8 !pb-4">
              <div className="text-3xl w-[55px] h-[55px] flex items-center justify-center text-[#A4D5FF] !m-0 !p-0 !bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                2
              </div>
              <h2 className="text-[#A4D5FF] text-2xl text-[1.6rem]">
                Connect your wallet
              </h2>
              <p className="text-[#71A3CE] mt-[1rem] text-sm">
                You need to connect your crypto wallet to the DGS dapps. This
                wallet is used to store the cryptocurrency that will be used to
                pay for services. Some crypto wallets compatible with DGS dapps
                include MetaMask, WalletConnect, and Binance Chain Wallet.
              </p>
            </div>
            <div className="!bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient flex flex-col gap-4 p-8">
              <div className="text-3xl w-[55px] h-[55px] flex items-center justify-center text-[#A4D5FF] !m-0 !p-0 !bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                3
              </div>
              <h2 className="text-[#A4D5FF] text-2xl text-[1.6rem]">
                Choose your service needs
              </h2>
              <p className="text-[#71A3CE] mt-[1rem] text-sm">
                Once connected to your crypto wallet, you can choose the cloud
                service you want to use. DGS dapps offers a variety of cloud
                services, such as file storage, cloud computing, and
                decentralized networks. You can select the service that best
                suits your needs.
              </p>
            </div>
            <div className="!bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient flex flex-col gap-4 p-8">
              <div className="text-3xl w-[55px] h-[55px] flex items-center justify-center text-[#A4D5FF] !m-0 !p-0 !bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
                4
              </div>
              <h2 className="text-[#A4D5FF] text-2xl text-[1.6rem]">
                Purchase and, Done!
              </h2>
              <p className="text-[#71A3CE] mt-[1rem] text-sm">
                After choosing a service, you can make a purchase using the
                cryptocurrency available in your wallet. DGS dapps uses a secure
                and decentralized payment system to ensure transaction security.
              </p>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col w-full mt-[10rem]">
          <video loop muted playsInline ref={videoRef}>
            <source src={Tutorial} />
          </video>
        </section>
        <section
          id="roadmap"
          className="flex items-center justify-center flex-col w-full mt-[10rem]"
        >
          <h2 className="text-4xl text-[#00E0FF] mb-[5rem] font-bold">
            Roadmap
          </h2>
          <img src={Roadmap} alt="roadmap" className="md:block hidden" />
          <img src={Roadmap2} alt="roadmap" className="block md:hidden" />
        </section>        
      </main>
      <Footer></Footer>
    </section>
  );
}
