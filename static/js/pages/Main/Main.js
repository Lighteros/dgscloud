import React from "react";

import Navbar2 from "../../pages/Main/Partial2/Navbar2";
import Footer from "../../component/Partial/Footer";
import Home from "./Partial/Home";
import Service from "./Partial/Service";
import Featuers from "./Partial/Featuers";
import Tokenomics from "./Partial/Tokenomics";
import Roadmap from "./Partial/Roadmap";

function Main() {
  return (
    <div className="w-screen lg:w-full flex flex-col items-center justify-center min-h-screen bg-linear2 pb-[2rem]">
      {/* <img className='test' src={testImage} alt=''/> */}
      <Navbar2 />

      <section className="flex flex-col items-center justify-center w-full overflow-hidden px-[2rem] lg:px-[8rem]">
        <Home />
        <Service />
      </section>

      <Footer />
    </div>
  );
}

export default Main;
