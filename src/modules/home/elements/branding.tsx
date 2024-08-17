import { partners } from "@/app/configs/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Branding = () => {
	return (
		<div className="border-t-2 border-b-2 border-[#000] py-10">
			<h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative">
				Created by the early Morning Brew Team
			</h3>
			<div className="w-full text-center pt-1">
				<h3 className="uppercase bg-[#f091dd] rounded p-2 text-xl md:text-2xl text-center inline-block font-medium">
					Now powering the world&apos;s top newsletters
				</h3>
			</div>
      <Marquee className="w-full flex justify-around">
        {
          partners.map((i: PartnersTypes, index: number) => (
            <>
              <Image src={i.url} key={index} alt="partner" width={150} height={150} className={`md:mx-8 w-[100px] md:w-[120px] mx-3`}/>
            </>
          ))
        }
      </Marquee>
		</div>
	);
};

export default Branding;
