import { freePlan, maxPlan, scalePlan } from "@/app/configs/constants";
import { ICONS } from "@/shared/utils/icons";
import { Button } from "@nextui-org/react";

const PricingCard = ({ active }: { active: String }) => {
	return (
		<div className="w-full md:flex items-start justify-around py-8">
			{/* Launch Plan */}
			<div className="md:w-[400px] border-2 border-black bg-white rounded-md p-5 my-5 md:my-0">
				<div className="border-b border-[#000] flex gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="33"
						fill="string"
						className="mb-4"
					>
						<path
							fill="#fff"
							stroke="#3843D0"
							stroke-width="3"
							d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
						></path>
					</svg>
					<h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8">
						Launch
					</h5>
				</div>
				<br />
				<div className="pb-8 border-b border-[#000]">
					<h5 className="font-clashDisplay uppercase text-cyber-ink text-size-3xl">
						$0
					</h5>
					<p className="text-lg">No Commitment</p>
				</div>
				<div className="pt-5 pb-2">
					<p className="text-md font-[700]">What&apos;s included...</p>
				</div>
				<div className="flex flex-col gap-1 min-h-[200px]">
					{freePlan.map((i: PlanType, index: number) => (
						<div key={index} className="flex w-full items-center ">
							<span className="text-2xl text-[#FF5EC4] ">{ICONS.dot}</span>
							<p className="pl-2 text-medium">{i.title}</p>
						</div>
					))}
				</div>
				<br />
				<Button color="primary" className="w-full text-xl !py-6">
					Get Started
				</Button>
				<p className="pt-1 opacity-[0.7] text-center">Start trial</p>
			</div>

			{/* Scale Plan */}
			<div className="md:w-[400px] border-2 border-black bg-white rounded-md p-5 my-5 md:my-0">
				<div className="border-b border-[#000] flex gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="33"
						fill="string"
						className="mb-4"
					>
						<path
							fill="#fff"
							stroke="#3843D0"
							stroke-width="3"
							d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
						></path>
					</svg>
					<h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8">
						Scale
					</h5>
				</div>
				<br />
				<div className="border-b pb-8 border-black">
					<h5 className="font-clashDisplay uppercase text-cyber-ink text-size-3xl">
						${active === "Monthly" ? "49" : "42"} /month
					</h5>
					<p className="text-lg">
						$
						{active === "Monthly"
							? `Billed monthly`
							: `${42 * 12} billed anually`}
					</p>
				</div>
				<div className="pt-5 pb-2">
					<p className="text-md font-[700]">Everything on Launch +</p>
				</div>
				<div className="flex flex-col gap-1 min-h-[200px]">
					{scalePlan.map((i: PlanType, index: number) => (
						<div key={index} className="flex w-full items-center ">
							<span className="text-2xl text-[#FF5EC4] ">{ICONS.dot}</span>
							<p className="pl-2 text-medium">{i.title}</p>
						</div>
					))}
				</div>
				<br />
				<Button color="primary" className="w-full text-xl !py-6">
					Get Started
				</Button>
				<p className="pt-1 opacity-[0.7] text-center">
					Start a 30-Day Free Trial
				</p>
			</div>

			{/* Max Plan */}
			<div className="md:w-[400px] border-2 border-black bg-white rounded-md p-5 my-5 md:my-0">
				<div className="border-b border-[#000] flex gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="33"
						fill="string"
						className="mb-4"
					>
						<path
							fill="#fff"
							stroke="#3843D0"
							stroke-width="3"
							d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
						></path>
					</svg>
					<h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8">
						Max
					</h5>
				</div>
				<br />
				<div className="border-b pb-8 border-black">
					<h5 className="font-clashDisplay uppercase text-cyber-ink text-size-3xl">
						${active === "Monthly" ? "99" : "86"} /month
					</h5>
					<p className="text-lg">
						$
						{active === "Monthly"
							? `Billed monthly`
							: `${86 * 12} billed anually`}
					</p>
				</div>
				<div className="pt-5 pb-2">
					<p className="text-md font-[700]">Everything on Scale +</p>
				</div>
				<div className="flex flex-col gap-1 min-h-[200px]">
					{maxPlan.map((i: PlanType, index: number) => (
						<div key={index} className="flex w-full items-center ">
							<span className="text-2xl text-[#FF5EC4] ">{ICONS.dot}</span>
							<p className="pl-2 text-medium">{i.title}</p>
						</div>
					))}
				</div>
				<br />
				<Button color="primary" className="w-full text-xl !py-6">
					Get Started
				</Button>
				<p className="pt-1 opacity-[0.7] text-center">
					Start a 30-Day Free Trial
				</p>
			</div>
		</div>
	);
};

export default PricingCard;
