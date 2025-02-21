import AnchorLink from "react-anchor-link-smooth-scroll";
import { assets } from "../assets/assets";

const Footer = () => {
	return (
		<div className="bg-[#1E2833] h-11/12 flex flex-col items-center justify-between mx-4 sm:mx-16 lg:mx-24 xl:mx-18 my-6 sm:my-2 px-4 sm:px-6 md:px-8 lg:px-10">
			<div className="border-b border-gray-500 w-full flex justify-between xl:mx-44 xl:mt-8 xl:p-6 xl:gap-3">
				{/* Logo */}
				<img src={assets.whiteDrop} alt="White-Drop" />
				<div className="flex xl:gap-8 items-center">
					<h2 className="text-white font-mono text-lg">
						Ready to get started?
					</h2>
					<AnchorLink className="bg-white text-md font-semibold rounded xl:px-9 xl:py-2 cursor-pointer">
						Donate
					</AnchorLink>
				</div>
			</div>

			<div className="flex xl:mt-4">
				{/* Newsletter */}
				<div className="xl:p-12 xl:mr-48">
					<div className="flex flex-col">
						<h2 className="text-white text-xl antialiased font-semibold">
							Subscribe to our newsletter
						</h2>
						<div className="flex items-center xl:gap-6">
							<input
								className="text-gray-400 text-base outline-none border-b xl:my-3"
								type="text"
								placeholder="Email address"
							/>
							<img
								className="w-3 h-4 rounded"
								src={assets.path}
								alt="Arrow"
							/>
						</div>
					</div>
					<div className="flex justify-between xl:my-10">
						<a className="text-white text-xs antialiased cursor-pointer">
							Terms & Conditions
						</a>
						<a className="text-white text-xs antialiased cursor-pointer">
							Privacy Policy
						</a>
					</div>
				</div>
				{/* Services */}
				<div className="flex flex-col xl:gap-3 xl:p-12">
					<h2 className="text-xl text-white font-semibold">
						Services
					</h2>
					<a className="text-white text-sm">Email Marketing</a>
					<a className="text-white text-sm">Campaigns</a>
					<a className="text-white text-sm">Branding</a>
					<a className="text-white text-sm">Offline</a>
				</div>
				{/* About */}
				<div className="flex flex-col xl:gap-3 xl:p-12">
					<h2 className="text-xl text-white font-semibold">About</h2>
					<a className="text-white text-sm">Our Story</a>
					<a className="text-white text-sm">Benefits</a>
					<a className="text-white text-sm">Team</a>
					<a className="text-white text-sm">Careers</a>
				</div>
				{/* Help */}
				<div className="flex flex-col xl:gap-3 xl:p-12">
					<h2 className="text-xl text-white font-semibold">Help</h2>
					<a className="text-white text-sm">FAQs</a>
					<a className="text-white text-sm">Contact Us</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
