import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { text } from "stream/consumers";
import SidebarFooterLogo from "./sidebar.footer.logo";
import { useEffect } from "react";

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
	const { activeRoute, setActiveRoute } = useRouteChange();
	const { signOut, user } = useClerk();
	const pathname = usePathname();

	const LogoutHandler = () => {
		signOut();
		redirect("/sign-in");
	};

	useEffect(() => {
		setActiveRoute(pathname);
	}, [pathname, setActiveRoute]);

	return (
		<>
			{!bottomContent ? (
				<>
					{sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
						<Link
							key={index}
							href={item.url}
							className="p-2 py-3 flex items-center font-[500] text-gray-700"
						>
							<span
								className={`text-medium mr-2 ${
									item.url === activeRoute && "text-[#463bbd]"
								}`}
							>
								{item.icon}
							</span>
							<span
								className={`text-small mr-2 ${
									item.url === activeRoute && "text-[#463bbd]"
								}`}
							>
								{item.title}
							</span>
						</Link>
					))}
				</>
			) : (
				<>
					{sideBarBottomItems.map(
						(item: DashboardSideBarTypes, index: number) => (
							<Link
								key={index}
								href={
									item.url === "/"
										? `/subscribe?username=${user?.username}`
										: item.url
								}
								className="p-2 py-3 flex items-center font-[500] text-gray-700"
							>
								<span
									className={`text-medium mr-2 ${
										item.url === activeRoute && "text-[#463bbd]"
									}`}
								>
									{item.icon}
								</span>
								<span
									className={`text-small mr-2 ${
										item.url === activeRoute && "text-[#463bbd]"
									}`}
								>
									{item.title}
								</span>
							</Link>
						)
					)}

					{/* Sign Out */}
					<div
						className="p-2 py-3 flex items-center cursor-pointer border-b font-[500] text-gray-700"
						onClick={LogoutHandler}
					>
						<span className="text-medium mr-2">{ICONS.logOut}</span>
						<span className="text-small ">Sign Out</span>
					</div>

					{/* Footer */}
					<br />
					<br />
					<div className="w-full flex justify-center cursor-pointer">
						<SidebarFooterLogo />
					</div>
					<p className="text-sm text-center pt-5 pb-10">
						&copy; 2024 Nexmail. Inc. All rights reserved.
					</p>
				</>
			)}
		</>
	);
};

export default DashboardItems;
