import React from "react";

const RegisterNow = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-start p-6 sm:p-8 md:p-10 lg:p-12 mx-4 sm:mx-16 lg:mx-24 xl:mx-32 my-6 sm:my-4 shadow-lg">
			<div className="bg-[#A8174E] w-full h-24 flex items-center justify-start px-6 mb-6">
				<h1 className="text-xl sm:text-2xl text-white font-bold">
					Register As Donor
				</h1>
			</div>
			<form className="w-full flex flex-col gap-8">
				{/* Full Name */}
				<div className="flex flex-col sm:flex-row gap-12">
					<input
						className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
						type="text"
						placeholder="First Name"
					/>
					<input
						className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
						type="text"
						placeholder="Last Name"
					/>
				</div>
				{/* Mobile Number */}
				<input
					className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
					type="text"
					placeholder="Mobile Number"
				/>
				{/* Email */}
				<input
					className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
					type="email"
					placeholder="Email"
				/>
				<div className="w-full flex gap-12">
					{/* Address */}
					<textarea
						className="border border-gray-300 px-3 py-2 w-1/2 h-32 resize-none focus:outline-[#A8174E]"
						placeholder="Address"
					></textarea>
					{/* Age & Blood Group */}
					<div className="w-1/2 flex flex-col gap-10">
						<input
							className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
							type="number"
							placeholder="Age"
						/>
						<input
							className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
							type="text"
							placeholder="Blood Group"
						/>
					</div>
				</div>
				{/* District & State */}
				<div className="flex flex-col sm:flex-row gap-12">
					<input
						className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
						type="text"
						placeholder="District"
					/>
					<input
						className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
						type="text"
						placeholder="State"
					/>
				</div>
				{/* Pincode */}
				<input
					className="border border-gray-300 px-3 py-2 w-full gap-12 focus:outline-[#A8174E]"
					type="text"
					placeholder="Pincode"
				/>
				{/* Last Donation */}
				<div className="flex flex-col sm:flex-row gap-12">
					<input
						className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
						type="text"
						placeholder="Last Donation Month"
					/>
					<input
						className="border border-gray-300 px-3 py-2 w-full focus:outline-[#A8174E]"
						type="text"
						placeholder="Last Donation Year"
					/>
				</div>
				{/* Terms and Conditions */}
				<div className="flex items-center gap-2">
					<input type="checkbox" className="w-4 h-4" />
					<p className="text-gray-600 text-sm">
						I agree to all the terms and conditions and provided
						details are correct.
					</p>
				</div>
				{/* Submit Button */}
				<button className="bg-[#A8174E] text-white text-lg font-bold py-2 w-full sm:w-auto sm:px-12 mt-2 hover:bg-[#8e143e] transition cursor-pointer">
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegisterNow;
