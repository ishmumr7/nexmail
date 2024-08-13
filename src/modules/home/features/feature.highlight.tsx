import { Button } from "@nextui-org/react";
import Image from "next/image";

const FeatureHighlight = () => {
	return (
		<div className="w-full flex items-center justify-around bg-[#9399f4] py-5 px-20 text-center md:py-0 md:text-left md:min-h-[55vh]">
			<div className="">
				<Image
					src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
					alt=""
					width={400}
					height={400}
					className="w-[100%] ml-5"
				/>
			</div>
			<div className="">
				<h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mx-auto mb-2 md:text-left">
					CREATE
				</h2>
				<br />
				<h3 className="text-cyber-ink text-xl md:text-3xl max-w-lg font-semibold">
					The most powerful editing and design tools in email.
				</h3>
				<br />
				<p className="text-cyber-ink text-xl md:text-2xl max-w-lg font-[400]">
					Warning: A writing experience unlike anything you&lsquo;ve ever
					experienced - proceed with caution.
				</p>
				<br />
				<Button className="bg-white border-[2px] border-[#000] rounded text-2xl !p-7 !px-16">
					Start Building
				</Button>
			</div>
		</div>
	);
};

export default FeatureHighlight;
