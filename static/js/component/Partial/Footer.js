import React from 'react'
import { NavLogo, Dextools, Coinmarketcap, Coingecko } from '../../assets/svg';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import Pdf from '../../assets/Whitepaper.pdf'

function Footer() {
    const handleCopy = () => {
        navigator.clipboard.writeText('0xComingSoon')
        alert('Success Copy Contract Address')
    }
    return (
        <div className='lg:mb-6 mt-[80px] lg:mt-[140px] text-white w-full flex items-center justify-center'>
            <div className='w-[90%] lg:w-[80%] relative z-40 max-w-[1320px] flex flex-col md:flex-row items-start gap-6 pb-4 justify-between'>
                <div className='flex items-start w-full lg:w-[35%] justify-between'>
                    <div className='flex flex-col items-start'>
                        <span className='text-[24px] font-bold'>Support</span>
                        <div className='flex items-start flex-col gap-1 mt-4'>
                            <a className='w-fit hover:border-b-white border border-transparent duration-150' href='https://t.me/DGS_Cloud'>Telegram</a>
                            <a className='w-fit hover:border-b-white border border-transparent duration-150' href='https://x.com'>Twitter</a>                            
                            <a className='w-fit hover:border-b-white border border-transparent duration-150' href='https://docs.dgscloud.pro/'>Documentation</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end gap-2 w-full'>
                    <NavLogo className='w-[30px] md:w-[50px] h-fit' />
                    <span className='font-semibold'>Managed by <span className='font-black'>DGS</span></span>
                    <div onClick={handleCopy} className="bg-[#665148] cursor-pointer text-white flex items-start flex-col px-6 rounded-2xl py-2">
                        <span className="text-xs md:text-sm">Contract Address</span>
                        <span className="font-bold text-sm md:text-base">0xComingSoon</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="bg-[#665148] cursor-pointer text-white flex p-2 rounded-2xl space-x-2">
                            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x00f44eb2f3500e19f7b4b63c0348f43a3aa37ebc" className="bg-white h-full hover:scale-95 duration-150 flex items-center justify-center p-2 rounded-xl">
                                <Dextools className='w-5 h-5'/>
                            </a>
                            <a href="https://coinmarketcap.com/dexscan/ethereum/0x00f44eb2f3500e19f7b4b63c0348f43a3aa37ebc" className="bg-[#2B6AFF] h-full hover:scale-95 duration-150 flex items-center justify-center p-2 rounded-xl">
                                <Coinmarketcap className='w-5 h-5'/>
                            </a>
                            <a href="https://www.geckoterminal.com/eth/pools/0x00f44eb2f3500e19f7b4b63c0348f43a3aa37ebc" className="bg-white h-full hover:scale-95 duration-150 flex items-center justify-center p-2 rounded-xl">
                                <Coingecko className='w-5 h-5'/>
                            </a>
                        </div>
                        <a className='w-fit hover:bg-white hover:text-black rounded-full p-1 duration-150' href='https://x.com/DGS_Cloud'>
                            <XIcon />
                        </a>
                        <a className='w-fit hover:bg-white hover:text-black rounded-full p-1 duration-150' href='https://t.me/DGS_Cloud'>
                            <TelegramIcon style={{ width : 30, height :30 }} />
                        </a>
                    </div>
                    <span className='text-sm'>© 2025 - DGS . All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer