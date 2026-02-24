import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Footer() {
    return (
        <>
            <div className="footer bg-neutral-950 w-full h-full">
                <div className="logo p-10 ml-20">
                    <h1 className="text-white font-bold text-4xl mt-10 italic">FoodZo</h1>
                </div>
                <div className="main-sec flex justify-evenly mb-20">
                    <div className="section pl-30">
                        <div className="sub1">
                            <h1 className="text-xl p-1 mb-3 text-white">Eternal</h1>
                            <ul>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Zomato</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Blinkit</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Feeding India</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Investor Relations</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="section pl-30">
                        <div className="sub1">
                            <h1 className="text-xl p-1 mb-3 text-white">Learn More</h1>
                            <ul>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Privacy</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Security</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Terms of Service</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Help & Support</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Report a Fraud</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="section pl-30">
                        <div className="sub1">
                            <h1 className="text-xl p-1 mb-3 text-white">For Restaurants</h1>
                            <ul>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Partner With Us</a></li>
                                <li className="list-none text-gray-400 p-1"><a href="" className="">Apps For You</a></li>
                                

                            </ul>
                        </div>
                    </div>
                    <div className="section pl-30">
                        <div className="sub1">
                            <h1 className="text-xl p-1 mb-3 text-white">Social links</h1>
                            <ul className='flex gap-2'>
                                <li className="list-none text-white p-1"><a href="" className=""><InstagramIcon/></a></li>
                                <li className="list-none text-white p-1"><a href="" className=""><YouTubeIcon/></a></li>
                                <li className="list-none text-white p-1"><a href="" className=""><XIcon/></a></li>
                                <li className="list-none text-white p-1"><a href="" className=""><LinkedInIcon/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )

}