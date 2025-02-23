import React from "react";

const RegisterAsDonor = () => {
	return (
		<div className="bg-[#FFFFFF] xl:w-screen xl:h-screen flex flex-col items-center justify-center border">
			<div className="border xl:w-1/2 xl:h-18 flex items-center xl:px-6 xl:mb-4">
				<h1 className="text-xl font-semibold">Register As Donor</h1>
			</div>
			<div className="border xl:w-1/2 flex flex-col items-center justify-between xl:py-3 xl:gap-2">
				<div className="border xl:w-full flex xl:px-4 xl:gap-12">
					<label
						className="text-[#646464] xl:w-1/2 flex items-center text-md font-semibold xl:px-2 border"
						htmlFor=""
					>
						Full Name
					</label>
					<input
						className="text-[#646464] xl:w-full text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
						type="text"
						placeholder="First Name"
					/>
					<input
						className="text-[#646464] xl:w-full text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
						type="text"
						placeholder="Last Name"
					/>
				</div>
				<div className="border xl:w-full flex xl:px-4 xl:gap-12">
					<label
						className="border text-[#646464] flex items-center text-md font-semibold xl:px-2"
						htmlFor=""
					>
						Mobile Number
					</label>
					<input
						className="text-[#646464] xl:w-1/2 text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
						type="text"
						placeholder="Number"
					/>
				</div>
				<div className="border xl:w-full flex xl:px-4 xl:gap-12">
					<label
						className="border text-[#646464] flex items-center text-md font-semibold xl:px-2"
						htmlFor=""
					>
						E-mail
					</label>
					<input
						className="text-[#646464] xl:w-1/2 text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
						type="text"
						placeholder="Email Id"
					/>
				</div>
				<div className="border xl:w-full flex items-start justify-between xl:px-4 xl:gap-12">
					<div className="flex xl:gap-1">
						<label
							className="border text-[#646464] flex items-center text-md font-semibold xl:px-2"
							htmlFor=""
						>
							Address
						</label>
						<textarea
							className="text-[#646464] text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
							name=""
							id=""
						>
							Address
						</textarea>
					</div>
					<div className="border flex flex-col items-center justify-between xl:gap-12">
						<div className="border xl:w-full flex xl:gap-4">
							<label
								className="border text-[#646464] flex items-center text-md font-semibold xl:px-2"
								htmlFor=""
							>
								Age
							</label>
							<input
								className="text-[#646464] xl:w-1/2 text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
								type="text"
								placeholder="Age"
							/>
						</div>
						<div className="border xl:w-full flex xl:gap-4">
							<label
								className="border text-[#646464] flex items-center text-md font-semibold xl:px-2"
								htmlFor=""
							>
								Blood Group
							</label>
							<input
								className="text-[#646464] xl:w-1/2 text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
								type="text"
								placeholder="Blood Group"
							/>
						</div>
					</div>
				</div>
				<div className="border flex xl:px-4">
					<div className="border xl:w-full flex xl:px-4 xl:gap-12">
						<label htmlFor="">District</label>
						<input type="text" placeholder="District" />
					</div>
					<div className="border xl:w-full flex xl:px-4 xl:gap-12">
						<label htmlFor="">State</label>
						<input type="text" placeholder="State" />
					</div>
				</div>
				<div className="border xl:w-full flex xl:px-4 xl:gap-12">
					<label
						className="text-[#646464] flex items-center text-md font-semibold xl:px-2 border"
						htmlFor=""
					>
						Pincode
					</label>
					<input
						className="text-[#646464] text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
						type="text"
						placeholder="Pincode"
					/>
				</div>
				<div className="border xl:w-1/2 flex flex-col items-center justify-between xl:py-3 xl:gap-2">
					<div className="border xl:w-full flex xl:px-4 xl:gap-12">
						<label
							className="text-[#646464] xl:w-1/2 flex items-center text-md font-semibold xl:px-2 border"
							htmlFor=""
						>
							Last Donation
						</label>
						<input
							className="text-[#646464] xl:w-full text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
							type="text"
							placeholder="Month"
						/>
						<input
							className="text-[#646464] xl:w-full text-md font-semibold xl:px-2 outline-none border border-[#DADADA] rounded"
							type="text"
							placeholder="Year"
						/>
					</div>
				</div>
			</div>
			<div className="border flex xl:px-4">
				{/* Checkbox */}
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="bg-[#A8174E] text-white text-lg font-bold rounded antialiased xl:px-12 xl:py-1 cursor-pointer">
				Submit
			</div>
		</div>
	);
};

export default RegisterAsDonor;
