import React, { useState, useEffect } from "react";
import Navbar from "./Partial2/Navbar2";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers/providers";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../utils/contractAbi";
import { Web3 } from "web3";

const projectId = "15e4858679f87a994c0c5be4e43bc16f";

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://mainnet.infura.io/v3/b612c14cc3544b949550ffed3d6c85d5",
};

const metadata = {
  name: "Decentracard",
  description: "Decentracard Wallet Connect Modal",
  url: "https://decentracard.com",
  icons: [
    "https://www.dextools.io/resources/tokens/logos/ether/0x2f3d0d2317802a65faac6e4cd94067c37b4d4804.png?1704994992796",
  ],
};

const web3Modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true,
});

function useWalletAddress() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const ethersProvider = isConnected
    ? new BrowserProvider(walletProvider)
    : null;

  const signer = isConnected ? ethersProvider.getSigner() : null;
  return { address, chainId, isConnected, ethersProvider, signer };
}

export default function Reflection() {
  const { address, chainId, isConnected, ethersProvider, signer } =
    useWalletAddress();
  const [contract, setContract] = useState();
  const [reflection, setReflection] = useState(0);
  const [reflectedDCI, setReflectedDCI] = useState(0);
  const [reflected, setReflected] = useState(0);
  const [reflectedUsd, setReflectedUsd] = useState(0);
  const [priceDCIUSD, setPriceDCIUSD] = useState(0);

  const connectEthereumWallet = async () => {
    try {
      const instance = await web3Modal.open();
      if (instance) {
        const provider = new ethers.BrowserProvider(instance);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
      } else {
        throw new Error("No provider returned from Web3Modal.");
      }
    } catch (err) {
      console.error("Ethereum wallet connection failed:", err);
    }
  };

  const connectContract = async () => {
    if (isConnected && contract) {
      var balanceOf = await contract.balanceOf(address);
      var reflectionBalance = await contract._rOwned(address);
      var reflected = balanceOf - reflectionBalance;
      reflected = ethers.formatEther(reflected);
      var reflectedUsd = reflected * priceDCIUSD;
      setReflectedUsd(reflectedUsd);
      setReflected(reflected);
    }
    if (isConnected && !contract) {
      const signer = ethersProvider?.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, await signer);
      setContract(contract);
    }

    if (!isConnected && !contract) {
      const price = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=decentralized-cloud-infra&vs_currencies=usd"
      ).then((res) => res.json());
      const priceDCIUSD = price["decentralized-cloud-infra"]["usd"];
      setPriceDCIUSD(priceDCIUSD);
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
      setReflectedDCI(reflectedDCI2);
    }
  };

  useEffect(() => {
    connectContract();
  }, [contract, isConnected]);

  return (
    <div className="bg-reflection h-screen w-full flex items-center justify-between flex-col relative">
      <Navbar />
      <div className="flex flex-col gap-8 items-center justify-center relative z-[20]">
        <h2 className="text-[rgba(169,210,245,1)] text-4xl sm:text-6xl font-bold">
          Token Reflection
        </h2>
        <div className="flex flex-col items-center w-full sm:w-auto gap-2 justify-center ">
          <p className="text-[rgba(255,255,255,1)] text-3xl opacity-70">
            Total Reflection
          </p>
          <h1 className="text-[rgba(0,224,255,1)] font-bold text-3xl sm:text-7xl">
            ${Number(Number(reflection).toFixed(2)).toLocaleString("en-US")}
          </h1>
          <h1 className="text-white font-bold !text-2xl">
            Worth of {Number(reflectedDCI).toFixed(2)} DCI
          </h1>
        </div>
        {isConnected ? (
          <div className="backdrop-blur-lg flex flex-col items-center w-[95vw] lg:w-auto justify-center !py-[2rem] !px-[2rem] sm:!px-[4rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient">
            <p className="text-[rgba(255,255,255,1)] text-xl opacity-70">
              Address
            </p>
            <h1 className="break-all !bg-[rgba(28,28,28,0.80)] text-center flex items-center justify-center text-[rgba(0,224,255,1)] text-lg sm:text-2xl !py-[1rem] !px-[1rem] sm:!px-[3rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] border-gradient">
              {address}
            </h1>
            <p className="opacity-70 text-white text-xl">My Reflection</p>
            <div className="!bg-[rgba(28,28,28,0.80)] flex-col flex items-center justify-center w-[300px] text-[rgba(0,224,255,1)] text-2xl !py-[1rem] !px-[1rem] sm:!px-[3rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] border-gradient">
              <p>${reflectedUsd}</p>
              <p className="text-[15px] text-white">{reflected} DCI</p>
            </div>
          </div>
        ) : (
          <div
            onClick={connectEthereumWallet}
            className="cursor-pointer text-[rgba(0,224,255,1)] text-2xl !py-[1rem] !px-[3rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient"
          >
            Connect Wallet
          </div>
        )}
      </div>
      <h2 className="text-white p-8 text-xl">
        © {new Date().getFullYear()} - DGS . All rights reserved.
      </h2>
      <div className="w-[300px] h-[300px] ease-in-out animate-circle1 absolute z-[10] top-1/2 translate-y-[-50%] bg-[#00E0FF] blur-[150px] rounded-[50%]"></div>
      <div className="w-[300px] h-[300px] ease-in-out animate-circle2 absolute z-[10] top-1/2 translate-y-[-50%] bg-[#17FFD5] blur-[150px] rounded-[50%]"></div>
    </div>
  );
}
