import { ICONS } from "@/shared/utils/icons";
import { Slider } from "@nextui-org/slider";
import React from "react";

const UserPlan = () => {
	return (
		<div className="w-full my-3 p-3 bg-[rgb(245,243,255)] rounded hover:shadow-xl cursor-pointer">
			<div className="w-full flex items-center justify-between">
				<h5 className="text-sm font-bold">Launch Plan</h5>
				<div className="w-fit px-2 py-1 shadow ml-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-[#E77CAE] bg-gradient-to-r">
					<span className="text-white text-sm">{ICONS.electric}</span>
					<span className="text-white text-xs">Upgrade</span>
				</div>
			</div>
			<h5 className="text-[#831743] text-xs">Total subscribers</h5>
			<Slider
				aria-label="Player progress"
				hideThumb={true}
				defaultValue={0}
				className="max-w-md"
			/>
			<h6 className="text-[#831743] text-xs">0 of 2500 added</h6>
		</div>
	);
};

export default UserPlan;
