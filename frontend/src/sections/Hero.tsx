import AnchorLink from "react-anchor-link-smooth-scroll";
import { assets } from "../assets/assets";

const Hero = () => {
	return (
		<div className="flex items-center justify-evenly mx-4 sm:mx-16 lg:mx-24 xl:mx-18 my-6 sm:my-2 px-4 sm:px-6 md:px-8 lg:px-10">
			<img
				className="w-1/2 h-1/4"
				src={assets.bloodDrop}
				alt="Home-Gradient-Design"
			/>
			<div className="flex flex-col items-center justify-start xl:gap-12 xl:px-3 xl:py-1">
				<p className="text-3xl font-serif font-bold text-right leading-12 antialiased">
					Connecting Donors with <br />
					Those in Need
				</p>
				<div className="bg-[#A8174E] hidden sm:inline px-12 py-2 rounded-full cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300">
					<AnchorLink
						className="text-white text-xl font-bold decoration-none antialiased"
						offset={50}
					>
						Get Blood Now
					</AnchorLink>
				</div>
			</div>
		</div>
	);
};

export default Hero;
