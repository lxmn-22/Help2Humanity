import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
	return (
		<div className="flex sticky items-center justify-evenly top-2 mx-4 sm:mx-16 lg:mx-24 xl:mx-18 my-6 sm:my-2 px-4 sm:px-6 md:px-8 lg:px-10">
			{/* Logo */}
			<img
				className="w-32 h-32 cursor-pointer hover:animate-bounce transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
				src={assets.logo}
				alt="Logo"
			/>

			<div className="w-full flex justify-end gap-12">
				{/* Menu items */}
				<ul className="hidden md:flex items-start gap-12 font-medium font-mono text-lg">
					<NavLink to="/">
						<li className="py-1">Home</li>
						<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
					</NavLink>
					<NavLink to="/about_us">
						<li className="py-1">About Us</li>
						<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
					</NavLink>
					<NavLink to="/find_blood">
						<li className="py-1">Find Blood</li>
						<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
					</NavLink>
					<NavLink to="/register_now">
						<li className="py-1">Register Now</li>
						<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
					</NavLink>
				</ul>

				{/* Log In Button (Hidden on small screens) */}
				<div className="bg-[#A8174E] hidden sm:inline px-6 py-1 rounded-full bg-primary text-md sm:text-base font-bold cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300">
					<AnchorLink
						className="text-white decoration-none"
						offset={50}
					>
						Log In
					</AnchorLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
