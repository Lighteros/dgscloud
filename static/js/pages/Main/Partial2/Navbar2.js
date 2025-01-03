/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import DciLogo from "../../../assets/image/dci.svg";
import DappIcon from "../../../assets/image/dappicon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Pdf from "../../../assets/Whitepaper.pdf";
import { motion } from "framer-motion";

export default function Navbar2() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/">Home</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/#about">About</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/#roadmap">Roadmap</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/service">Services</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <a href={Pdf} download="DCI - Whitepaper.pdf">
              Whitepaper
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/dashboard">Dashboard</a>
          </ListItemButton>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton>
            <a
              href="https://app-dgscloud.vercel.app/"
              className="!m-0 text-[#00E0FF] !py-[5px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient"
            >
              Dapp
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <motion.nav
      initial={{ backgroundImage: "transparent" }}
      animate={{
        backgroundImage: scrolled
          ? "linear-gradient(to bottom, #101F2D, #101F2DE5)"
          : "linear-gradient(to bottom, transparent, transparent)",
      }}
      transition={{ duration: 1 }}
      className="flex items-center sticky top-0 left-0 justify-between gap-4 w-full px-[2rem] lg:px-[8rem] py-[2rem] z-[200]"
    >
      <img src={DciLogo} alt="logo" className="w-[30px] md:w-[40px] h-fit" />
      <div className="hidden mdl:flex items-center justify-center gap-8 [&>*]:text-white">
        <a href="/">Home</a>
        <a href="/#about">About</a>
        <a href="/#roadmap">Roadmap</a>
        <a href="/service">Services</a>
        <a href={Pdf} download="DCI - Whitepaper.pdf">
          Whitepaper
        </a>
        <a href="/dashboard">Dashboard</a>
      </div>
      <a
        href="https://app-dgscloud.vercel.app/"
        className="!m-0 hidden mdl:block hover:text-[#00E0FF] text-lg text-white !py-[5px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient"
        target="_blank"
        rel="noreferrer"
      >
        Dapp
      </a>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <GiHamburgerMenu
            onClick={toggleDrawer(anchor, true)}
            className="mdl:hidden block text-white text-3xl cursor-pointer"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundImage: "linear-gradient(to top, #07192A, #1B3141)",
                color: "white",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </motion.nav>
  );
}
