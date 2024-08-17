import Link from "next/link";
import React from "react";
import FooterLogo from "../../../shared/widgets/footer/footer.logo";

const Footer = () => {
	return (
		<footer className="w-full bg-[#060518] text-white pt-10">
			<div className="w-[95%] md:flex m-auto py-5">
				<div className="w-full md:w-[40%]">
					<Link href="/">
						<FooterLogo />
					</Link>
					<p className="text-2xl pt-8">
						Get Nexmail updates delivered directly to your inbox.
					</p>
					<div className="flex items-center w-[350px] pt-8">
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
					<p className="py-6 text-xs">
						By subscribing you agree to our Privacy Policy and provide consent
						to receive updates from our company.
					</p>
				</div>
				<div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
					<div className="md:w-[50%] flex justify-around">
						<div>
							<ul>
								<li className="text-xl pb-4 cursor-pointer">Create</li>
								<li className="text-xl pb-4 cursor-pointer">Write</li>
								<li className="text-xl pb-4 cursor-pointer">Grow</li>
								<li className="text-xl pb-4 cursor-pointer">Monetize</li>
								<li className="text-xl pb-4 cursor-pointer">Analyze</li>
							</ul>
						</div>
						<div>
							<ul>
								<li className="text-xl pb-4 cursor-pointer">Careers</li>
								<li className="text-xl pb-4 cursor-pointer">Pricing</li>
								<li className="text-xl pb-4 cursor-pointer">Shop</li>
								<li className="text-xl pb-4 cursor-pointer">Compare</li>
								<li className="text-xl pb-4 cursor-pointer">Love</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<p className="text-lg text-center pb-10">
				&copy; 2024 Nexmail. Inc. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
