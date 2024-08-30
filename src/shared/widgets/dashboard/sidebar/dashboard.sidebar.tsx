"use client";

import { ICONS } from "@/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import DashboardItems from "./dashboard.items";
import UserPlan from "./user.plan";

const DashboardSidebar = () => {
	const { user } = useUser();

	return (
		<div className="p-2 h-screen flex flex-col justify-between">
			<div>
				<div className="p-2 flex items-center bg-[#f5f5f5f5] rounded text-sm">
					<span className="text-2xl">{ICONS.home}</span>
					<h5 className="pl-2 pt-1">{user?.lastName}&apos;s Newsletter</h5>
				</div>
				<DashboardItems />
			</div>
			<div>
				<UserPlan />
				<DashboardItems bottomContent={true} />
			</div>
		</div>
	);
};

export default DashboardSidebar;
