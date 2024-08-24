"use client";
import DashboardOverviewCard from "@/shared/components/cards/overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";
import { useUser } from "@clerk/nextjs";

const Main = () => {
	const { user } = useUser();

	return (
		<div className="p-5 w-full h-screen bg-[#f9fafb]">
			<h1 className="text-2xl text-surface-900 font-medium">
				Hi {user?.fullName}👋
			</h1>
			<p className="opacity-[0.7] text-base text-[rgb(107,114,128)] font-[500] mt-[0.25rem]">Here&apos;s how your publication is doing</p>
			<div className="w-full flex">
				<div className="w-[65%] min-h-[88vh] pr-5 mt-5">
					<DashboardOverviewCard />
					<SubscribersChart />
				</div>
			</div>
		</div>
	);
};

export default Main;
