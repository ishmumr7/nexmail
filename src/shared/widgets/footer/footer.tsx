import Link from "next/link";
import React from "react";
import FooterLogo from "./footer.logo";

const Footer = () => {
	return (
		<footer className="w-full bg-[#060518] text-white pt-10">
			<div className="w-[95%] md:flex m-auto py-5">
				<div className="w-full md:w-[40%]">
					<Link href="/">
						<FooterLogo />
					</Link>
					<p className="text-2xl py-4">
						Get Nexmail updates delivered directly to your inbox.
					</p>
					<div className="flex items-center w-[350px] py-2">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							className="bg-white text-black w-full md:w-[50%] border-2 border-blue-500 h-[52px] px-2 rounded rounded-r-none outline-none text-base"
						/>
						<button className="w-[90px] cursor-pointer rounded-r h-[52px] bg-blue-500 text-base">
							Subscribe
						</button>
					</div>
					<p className="py-2 text-xs">
						By subscribing you agree to our Privacy Policy and provide consent
						to receive updates from our company.
					</p>
				</div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[50%] flex justify-around">
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">
                  Create
                </li>
                <li className="text-xl pb-4 cursor-pointer">
                  Write
                </li>
              </ul>
            </div>
          </div>
        </div>
			</div>
		</footer>
	);
};

export default Footer;
