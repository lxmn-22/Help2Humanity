import AnchorLink from "react-anchor-link-smooth-scroll";
import { assets } from "../assets/assets";

const Hero = () => {
	return (
		<div className="border w-screen h-full flex items-center justify-evenly">
			<img
				className="border w-1/2"
				src={assets.hgd}
				alt="Home-Gradient-Design"
			/>
			<div className="border flex flex-col items-center justify-end xl:gap-9 xl:px-3 xl:py-1">
				<p className="text-xl font-serif font-bold text-right">
					"Connecting Donors with <br />
					Those in Need"
				</p>
				<div className="bg-[#A8174E] hidden sm:inline px-6 py-1 rounded-full bg-primary text-md sm:text-base font-bold cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300">
					<AnchorLink
						className="text-white decoration-none"
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
