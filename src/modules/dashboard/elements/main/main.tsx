"use client";
import DashboardOverviewCard from "@/shared/components/cards/overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";
import { ICONS } from "@/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast"

const Main = () => {
	const { user } = useUser();
	const [copied, setCopied] = useState(false);

	const handleCopyLink = () => {
		const smallText = document.querySelector(".copy-text") as HTMLElement;
		if (smallText) {
			const textToCopy = smallText.innerText;
			navigator.clipboard.writeText(textToCopy).then(() => {
				setCopied(true);
				toast.success("Copied!")
			})
		}
	}

	return (
		<div className="p-5 w-full h-screen bg-[#f9fafb]">
			<h1 className="text-2xl text-surface-900 font-medium">
				Hi {user?.fullName}👋
			</h1>
			<p className="opacity-[0.7] text-base text-[rgb(107,114,128)] font-[500] mt-[0.25rem]">
				Here&apos;s how your publication is doing
			</p>
			<div className="w-full flex">
				<div className="w-[65%] min-h-[88vh] pr-5 mt-5">
					<DashboardOverviewCard />
					<SubscribersChart />
				</div>
				<div className="w-[35%] p-5">
					<div className="w-full flex justify-end">
						<Button className="bg-black text-white text-lg rounded !px-6">
							<span className="mr-1 ml-[-5px]">{ICONS.write}</span>
							Start Writing
						</Button>
					</div>

					{/* Resources */}
					<div className="mt-2">
						<h5 className="text-xl font-medium">Resources</h5>
						<div className="w-full bg-white border rounded p-5 my-3">
							<div>
								<h4 className="font-medium">Home Page</h4>
								<div className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor pointer"
								onClick={handleCopyLink}>
									<small className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap select-none copy-text ${
                      copied ? "text-blue-800" : "text-black"
                    }`}>
											https://nexmail.beehiiv.com/
									</small>
									<div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                    <span className="text-lg">{ICONS.copy}</span>
                    <span className="pl-1">copy</span>
                  </div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Tutorials */}
					<div className="w-full bg-white border rounded p-5 my-3">
						<h5 className="text-medium">Tutorials</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
