import React, { useCallback, useEffect, useState } from "react";
import Map from "../../assets/image/map.png";
import Navbar from "../../component/Partial/Navbar";
import Footer from "../../component/Partial/Footer";
import {
  CloudDedicatedIcon,
  CloudGpuIcon2,
  BareMetalIcon,
  CloudComputeIcon2,
  UsFlagIcon,
} from "../../assets/svg";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { dotsPosition as dots, tableData } from "../../utils/Config";
import Loading from "../../component/Loading/Loading";
import "../../styles/Dapp.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { headerRoute } from "../../utils/Config";
import { NavLogo } from "../../assets/svg";
import Pdf from "../../assets/Whitepaper.pdf";
import Navbar2 from "../Main/Partial2/Navbar2";

function Stats() {
  const [activeButton, setActiveButton] = useState("All Locations");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

    dotsPosition.forEach((item) => {
      // Cari objek dengan kota yang sama di objek pertama
      const foundIndex = data.data.findIndex(
        (element) => element.city === item.city
      );
      // Jika ditemukan, gabungkan properti continent ke objek pertama
      if (foundIndex !== -1) {
        data.data[foundIndex].continent = item.continent;
      }
    });

    setStatistic(data);
  };

  useEffect(() => {
    getStatistic();
  }, []);

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: theme.typography.pxToRem(12),
    },
    [`& .MuiTooltip-tooltip`]: {
      padding: 0,
    },
  }));

  const handleClick = (text) => {
    setActiveButton(text);
  };

  const [dotsPosition] = useState(dots);

  if (statistic?.data?.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #114252 5%, #16303f 50%)",
      }}
      className="w-screen lg:w-full flex flex-col items-center justify-center"
    >
      <Navbar2 />
      <section className="relative w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ translateY: 130, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full flex flex-col items-center justify-center"
        >
          <h2 className="mt-10 sm:mt-20 text-white text-[50px] font-bold">
            DGS’s Statistics
          </h2>
          <p className="text-white text-[20px] -translate-y-2">
            31 worldwide locations
          </p>
          <div className="w-full mt-10 sm:mt-20 map-image flex items-center justify-center relative">
            <img src={Map} alt="" className="w-[70%]" />
            {dotsPosition.map((item, index) => (
              <HtmlTooltip
                key={index}
                title={
                  <React.Fragment>
                    <div className="flex flex-col items-center justify-center p-3 w-full gap-2 bg-gradient-to-b min-w-[200px] from-[#236099] to-[#101F2D] [&>*]:text-white">
                      <div
                        style={{ gridTemplateColumns: "auto 1fr" }}
                        className="p-1 px-2 grid w-full bg-[rgba(255,255,255,.2)] items-center content-center gap-2"
                      >
                        <img
                          src={
                            statistic?.data?.filter(
                              (items) => items.city === item?.city
                            )[0]?.flagUrl
                          }
                          width="40"
                          height="40"
                          alt="flag"
                        />
                        <p className="mx-auto text-xl">{item?.city}</p>
                      </div>
                      {[
                        {
                          text: "Cloud Compute",
                          value: statistic?.data?.filter(
                            (items) => items.city === item?.city
                          )[0]?.cloudCompute,
                        },
                        {
                          text: "Cloud Dedicated",
                          value: statistic?.data?.filter(
                            (items) => items.city === item?.city
                          )[0]?.cloudDedicated,
                        },
                        {
                          text: "Cloud Gpu",
                          value: statistic?.data?.filter(
                            (items) => items.city === item?.city
                          )[0]?.cloudGPU,
                        },
                        {
                          text: "Bare Metal",
                          value: statistic?.data?.filter(
                            (items) => items.city === item?.city
                          )[0]?.bareMetal,
                        },
                        {
                          text: "Revenue",
                          value: `$${
                            statistic?.data?.filter(
                              (items) => items.city === item?.city
                            )[0]?.totalCost
                          }/mo`,
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center w-full gap-4 [&>*]:text-sm"
                        >
                          <p className="text-[rgba(255,255,255,.5)]">
                            {item?.text}
                          </p>
                          <p>{item?.value}</p>
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                }
                className="sm:block hidden"
              >
                <div
                  style={{ top: `${item.y}%`, left: `${item.x}%` }}
                  className={`cursor-pointer bg-[#00e0ff] w-[.9%] h-[.9vmax] rounded-[100px] absolute z-40 group`}
                ></div>
              </HtmlTooltip>
            ))}
          </div>

          <div className="w-[50%] h-[100px] rounded-[50%] bg-[rgba(0,224,255,0.69)] blur-3xl z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="[&>*]:cursor-pointer responsive-grid justify-items-center justify-center content-center items-center gap-y-4 z-40 p-4 gap-x-6 grid-cols-2 absolute top-[135px] left-1/2 -translate-x-1/2  w-full">
            <Button
              variant="contained"
              onClick={() => handleClick("All Locations")}
              className={` ${
                activeButton !== "All Locations"
                  ? "opacity-50 !bg-[#1A4E5E]"
                  : "!bg-[rgba(0,224,255,0.69)]"
              } col-span-2 span2 !border-[rgba(0,224,255,0.69)] !border-[1px] !border-solid !shadow-none !text-white !px-8 w-full max-w-[200px]`}
            >
              All Locations
            </Button>
            {[
              "North America",
              "Latin America",
              "Asia",
              "Australia",
              "Europe",
              "Africa",
            ].map((item, index) => (
              <Button
                variant="contained"
                key={index}
                onClick={() => handleClick(item)}
                className={` ${
                  activeButton !== item
                    ? "opacity-50 !bg-[#1A4E5E]"
                    : "!bg-[rgba(0,224,255,0.69)]"
                }  !border-[rgba(0,224,255,0.69)] !border-[1px] !border-solid !shadow-none !text-white !px-8 w-full`}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="h-[1px] w-[60%] bg-white my-8 sm:my-16 opacity-20"></div>
          <div className="mx-auto w-[92%] sm:hidden gap-6 flex flex-col items-center justify-center border-[1px] border-solid !border-[rgba(0,224,255,0.2)] bg-gradient-to-b from-[rgba(0, 224, 255, 0.6)] to-[rgba(0, 224, 255, 0.2)] p-4">
            {statistic?.data
              ?.filter((item) => {
                if (activeButton !== "All Locations") {
                  return item.continent === activeButton;
                } else {
                  return true;
                }
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 w-full gap-2 bg-gradient-to-b from-[#236099] to-[#101F2D] [&>*]:text-white"
                >
                  <div
                    style={{ gridTemplateColumns: "auto 1fr" }}
                    className="p-1 px-2 grid w-full bg-[rgba(255,255,255,.2)] items-center content-center"
                  >
                    <img
                      src={item?.flagUrl}
                      alt="Flag"
                      width="40"
                      height="40"
                    />
                    <p className="mx-auto">{item?.city}</p>
                  </div>
                  {[
                    { text: "Cloud Compute", value: item?.cloudCompute },
                    { text: "Cloud Dedicated", value: item?.cloudDedicated },
                    { text: "Cloud Gpu", value: item?.cloudGPU },
                    { text: "Bare Metal", value: item?.bareMetal },
                    { text: "Revenue", value: `$${item?.totalCost}/mo` },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center w-full"
                    >
                      <p className="text-[rgba(255,255,255,.5)]">
                        {item?.text}
                      </p>
                      <p>{item?.value}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ translateY: 130, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[95%] sm:w-[65%] m-4 mb-20"
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, #0085FF26, #0C1B2E00,#0085FF26)",
            }}
            className="border-[0.05px] border-[#17ffd427] border-solid flex flex-wrap gap-4 text-white p-8 rounded-[20px] justify-evenly items-center [&>*]:min-w-[155px]"
          >
            {[
              {
                text: "Cloud Compute",
                value: totalCloudCompute,
                icon: <CloudComputeIcon2 />,
              },
              {
                text: "Cloud Dedicated",
                value: totalCloudDedicated,
                icon: <CloudDedicatedIcon />,
              },
              {
                text: "Cloud Gpu",
                value: totalCloudGPU,
                icon: <CloudGpuIcon2 />,
              },
              {
                text: "Bare Metal",
                value: totalBareMetal,
                icon: <BareMetalIcon />,
              },
              {
                text: "Revenue",
                value: `$${statistic?.totalRentCost}/mo`,
                icon: "",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-3"
              >
                <span className="text-base">{item?.text}</span>
                <div className="flex gap-4 items-center justify-center">
                  {item?.icon && item?.icon}
                  <p className="font-bold text-3xl text-[#00E0FF] md:text-5xl">
                    {item?.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export default Stats;
